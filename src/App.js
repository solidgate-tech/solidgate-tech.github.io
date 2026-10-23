import { useEffect, useState } from "react";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { HOME_HASH } from "./data/nav";
import { AIPage } from "./pages/AIPage";
import { InterviewGuidePage } from "./pages/InterviewGuidePage";
import { KnowledgeVaultPage } from "./pages/KnowledgeVaultPage";
import { MindsBehindTheCodePage } from "./pages/MindsBehindTheCodePage";
import { TechRadarPage } from "./pages/TechRadarPage";

// Hash routes are kept stable so links shared before the redesign keep working
const PAGES = {
  "#home": TechRadarPage,
  "#interview": InterviewGuidePage,
  "#minds-behind-code": MindsBehindTheCodePage,
  "#more-about-us": KnowledgeVaultPage,
  "#ai": AIPage,
};

const currentHash = () => (PAGES[window.location.hash] ? window.location.hash : HOME_HASH);

export function App() {
  const [hash, setHash] = useState(currentHash);

  useEffect(() => {
    const onHashChange = () => {
      const next = currentHash();
      setHash((previous) => {
        if (previous !== next) window.scrollTo(0, 0);
        return next;
      });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const Page = PAGES[hash];

  return (
    <>
      <Header activeHash={hash} />
      <main>
        <Page />
      </main>
      <Footer />
    </>
  );
}
