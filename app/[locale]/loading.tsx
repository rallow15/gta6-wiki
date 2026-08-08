export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-bg">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-2 border-neon-pink/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-neon-pink animate-spin" />
        </div>
        <p className="text-text-muted text-sm tracking-wider uppercase">Loading...</p>
      </div>
    </div>
  );
}