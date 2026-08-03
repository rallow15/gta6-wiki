$apiKey = "AIzaSyC2eya3RBZu0GkJIX8_EkitK8zAI0Uxxn0"

# Try multiple models in order
$models = @("gemini-2.5-flash-image", "gemini-2.5-flash", "gemini-2.0-flash")

$prompt = @"
Create a photorealistic professional logo for "gta6codetriche.fr", a GTA VI fan wiki website. Bold 3D extruded text "GTA 6" with neon pink to sunset orange gradient, realistic neon glow, chrome metallic depth. Below: "CODETRICHE.FR" in cyan neon. Dark background. Tropical Vice City vibes: palm trees, sunset glow. Cinematic lighting. Professional graphic designer quality. Square format.
"@

foreach ($model in $models) {
    $url = "https://generativelanguage.googleapis.com/v1beta/models/$($model):generateContent?key=$apiKey"

    $body = @{
      contents = @(
        @{
          parts = @(
            @{
              text = $prompt
            }
          )
        }
      )
      generationConfig = @{
        responseModalities = @("TEXT", "IMAGE")
      }
    } | ConvertTo-Json -Depth 10

    $headers = @{
      "Content-Type" = "application/json"
    }

    Write-Host "Trying model: $model"

    try {
      $response = Invoke-RestMethod -Uri $url -Method Post -Headers $headers -Body ([System.Text.Encoding]::UTF8.GetBytes($body)) -TimeoutSec 300
      Write-Host "SUCCESS with $model!"

      $count = 0
      foreach ($candidate in $response.candidates) {
        foreach ($part in $candidate.content.parts) {
          if ($part.inlineData) {
            $mimeType = $part.inlineData.mimeType
            $base64Data = $part.inlineData.data
            $bytes = [Convert]::FromBase64String($base64Data)

            if ($mimeType -eq "image/png") { $ext = "png" } else { $ext = "jpg" }

            $count++
            $outPath = "C:\Users\salim\gta6-wiki\.skill-archive\logo-creator\2026-08-02-gta6codetriche\logo-01.$ext"
            [IO.File]::WriteAllBytes($outPath, $bytes)
            Write-Host "Image saved to: $outPath ($($bytes.Length) bytes)"
          }
          if ($part.text) {
            Write-Host "Text: $($part.text.Substring(0, [Math]::Min(300, $part.text.Length)))"
          }
        }
      }
      if ($count -eq 0) {
        Write-Host "No images in response. Full response:"
        Write-Host ($response | ConvertTo-Json -Depth 10 | Select-Object -First 50)
      }
      break
    } catch {
      $errorMsg = $_.Exception.Message
      Write-Host "Failed with $model : $errorMsg"
      if ($errorMsg -match "429|quota|limit") {
        Write-Host "Quota exceeded for $model, trying next..."
        continue
      }
      if ($errorMsg -match "404|not found|not supported") {
        Write-Host "Model not available, trying next..."
        continue
      }
      Write-Host "Unexpected error, stopping."
      break
    }
}

Write-Host "Done!"