// Server component that injects JSON-LD structured data into the page head.
// Render one or several schema.org objects; they are serialized into a single
// <script type="application/ld+json"> tag. No "use client" so it stays SSR'd.

type Json = Record<string, unknown> | Record<string, unknown>[];

export function JsonLd({ data }: { data: Json }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}