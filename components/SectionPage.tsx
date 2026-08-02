import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface SectionPageProps {
  title: string;
  titleAccent?: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function SectionPage({ title, titleAccent, subtitle, children }: SectionPageProps) {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
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
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}