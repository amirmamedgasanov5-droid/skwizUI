/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";

type Page = "home" | "price" | "why";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<Page>("home");

  return (
    <div className="min-h-screen bg-white font-geist selection:bg-gray-100">
      <AnimatePresence mode="wait">
        {currentPage === "home" ? (
          <HomeView key="home" onNavigate={setCurrentPage} />
        ) : currentPage === "price" ? (
          <PriceView key="price" onNavigate={setCurrentPage} />
        ) : currentPage === "why" ? (
          <WhyView key="why" onNavigate={setCurrentPage} />
        ) : (
          <div key="placeholder" className="p-12 text-center text-gray-400">
            <button onClick={() => setCurrentPage("home")} className="text-[10px] uppercase underline cursor-pointer">
              Back to Home
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Nav({ activePage, onNavigate }: { activePage: Page; onNavigate: (p: Page) => void }) {
  return (
    <nav className="m-0 flex items-start justify-center sm:justify-start gap-[15px] text-left text-[10px] text-[#c4c4c4] font-geist w-full max-w-[1200px]">
      <div 
        onClick={() => onNavigate("home")}
        className={`relative cursor-pointer transition-colors ${activePage === "home" ? "text-black" : "font-light hover:text-black"}`}
      >
        home
      </div>
      <div 
        onClick={() => onNavigate("price")}
        className={`relative cursor-pointer transition-colors ${activePage === "price" ? "text-black" : "font-light hover:text-black"}`}
      >
        price
      </div>
      <div
        onClick={() => onNavigate("why")}
        className={`relative font-light text-transparent bg-clip-text bg-[#c4c4c4] text-center cursor-pointer hover:text-black transition-colors ${activePage === "why" ? "text-black" : ""}`}
        style={{ 
          WebkitBackgroundClip: activePage === "why" ? "none" : "text", 
          WebkitTextFillColor: activePage === "why" ? "#000" : "transparent" 
        }}
      >
        why it costs this much.
      </div>
    </nav>
  );
}

function HomeView({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen relative flex flex-col items-center sm:items-start pt-[39px] px-[25px] sm:px-[50px] pb-10 box-border leading-normal tracking-normal text-center text-[13px] text-black"
    >
      <Nav activePage="home" onNavigate={onNavigate} />

      <div className="flex-1 w-full flex items-center justify-center">
        <div className="w-[259px] flex flex-col items-center gap-5">
          <div className="relative font-light text-center">
            crafting digital experiences for those who notice the details. focus
            on high-end ui/ux and minimalist aesthetics. building interfaces
            that feel as good as they look
          </div>
          
          <div className="flex items-center justify-center w-full py-0">
            <div className="flex items-center justify-center gap-2.5">
              <EmailButton />
              
              <button
                onClick={() => window.open('https://t.me/kyfax', '_blank')}
                className="cursor-pointer border-[#d9d9d9] border-solid border-[1px] py-[3px] px-8 bg-transparent h-5 flex-1 rounded-[10px] box-border flex items-center justify-center hover:bg-[rgba(191,191,191,0.09)] hover:border-[#bfbfbf] transition-all"
              >
                <div className="relative text-[8px] font-geist text-black text-center shrink-0">
                  telegram
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PriceView({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen relative flex flex-col items-center sm:items-start pt-[39px] px-[25px] sm:px-[50px] pb-10 box-border leading-normal tracking-normal text-center text-[8px] text-[#c4c4c4]"
    >
      <Nav activePage="price" onNavigate={onNavigate} />

      <div className="flex-1 w-full flex items-center justify-center">
        <div className="w-[227px] flex flex-col items-center gap-[5px]">
          <div className="flex items-start py-0 px-0">
            <div className="relative uppercase tracking-[0.05em]">price: custom logic only.</div>
          </div>
          <div className="relative text-[13px] text-black text-center font-light leading-relaxed">
            bespoke digital solutions. starts with a vision, ends with a project. inquire for availability.
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function WhyView({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen relative bg-white flex flex-col items-center sm:items-start pt-[39px] px-[25px] sm:px-[50px] pb-10 box-border leading-normal tracking-normal text-center text-[13px] text-black"
    >
      <Nav activePage="why" onNavigate={onNavigate} />
      
      <div className="flex-1 w-full flex items-center justify-center">
        <div className="max-w-[337px] relative font-light text-center">
          you are not paying for pixels. you are paying for the logic that
          powers your empire. we don’t just design. we build digital
          infrastructure. simplicity is the ultimate sophistication.
        </div>
      </div>
    </motion.div>
  );
}

function EmailButton() {
  const [copied, setCopied] = React.useState(false);
  const email = "hello@interface.design";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="group relative cursor-pointer border-none py-[5px] px-10 bg-black rounded-[10px] flex items-center justify-center hover:bg-[#333] transition-all min-w-[100px] h-5 box-border"
    >
      <div className="relative text-[8px] font-geist text-white text-center z-[1] shrink-0">
        {copied ? "copied" : (
          <>
            <span className="group-hover:hidden whitespace-nowrap">email</span>
            <span className="hidden group-hover:block whitespace-nowrap">copy</span>
          </>
        )}
      </div>
    </button>
  );
}





