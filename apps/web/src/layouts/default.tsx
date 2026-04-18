import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <a
          className="flex items-center gap-1 text-current no-underline"
          href={siteConfig.links.twitter}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-muted">Developed by</span>
          <p className="text-accent">Me</p>
        </a>
      </footer>
    </div>
  );
}
