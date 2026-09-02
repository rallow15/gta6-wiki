import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { SITE_LAST_UPDATED } from "@/lib/site";

interface SectionPageProps {
  title: string;
  titleAccent?: string;
  subtitle: string;
  children: React.ReactNode;
  /** ISO date displayed as last updated. Defaults to the global site last-updated date. */
  lastUpdated?: string;
  /** Optional note displayed under the meta block. */
  metaNote?: string;
  /** Set to false to hide the E-E-A-T meta block (e.g. legal pages). */
  showMeta?: boolean;
}

export default function SectionPage({ title, titleAccent, subtitle, children, lastUpdated = SITE_LAST_UPDATED, metaNote, showMeta = true }: SectionPageProps) {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 border-b-2 border-neon-pink/30 pb-6">
            <h1 className="font-display text-4xl sm:text-5xl tracking-wider">
              {titleAccent ? (
                <>
                  <span className="neon-text text-neon-pink">{titleAccent}</span>{" "}
                  <span className="text-text-primary">{title}</span>
                </>
              ) : (
                <span className="neon-text text-neon-pink">{title}</span>
              )}
            </h1>
            <p className="mt-3 text-text-muted max-w-xl">{subtitle}</p>
          </div>
          {showMeta && <PageMeta lastUpdated={lastUpdated} note={metaNote} />}
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}