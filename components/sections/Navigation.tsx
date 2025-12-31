"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV_LINKS, SLICE_LINKS } from "@/lib/constants";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navbarTop = 24; // top-6 = 24px
      const navbarHeight = 60; // Approximate navbar height
      // Navbar position in viewport (relative to top of viewport)
      const navbarViewportTop = navbarTop;
      const navbarViewportBottom = navbarTop + navbarHeight;
      const navbarViewportCenter = navbarTop + navbarHeight / 2;
      const threshold = 50; // Minimum pixels the navbar must be inside the dark section
      
      // Find dark sections by ID first (more reliable)
      const darkSectionIds = [
        'justice-stack', // JusticeFeatures - "Why Slices Work for Real Products"
        'mechanics', // TechnicalFeatures
        'business-use-cases', // BusinessUseCases - "Built for real business use cases"
      ];
      
      let isOverDark = false;
      
      darkSectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // rect.top is already relative to viewport, no need to add scrollY
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          
          // Check if navbar overlaps with dark section in viewport
          // Navbar is over dark section if it overlaps AND is well inside (not just touching edges)
          const isOverlapping = navbarViewportBottom > elementTop && navbarViewportTop < elementBottom;
          const isWellInside = navbarViewportCenter >= elementTop + threshold && 
                              navbarViewportCenter <= elementBottom - threshold;
          
          if (isOverlapping && isWellInside) {
            // Double check: verify the section actually has a dark background
            // Check the section element itself, not children
            const sectionElement = element.closest('section') || element;
            const classList = sectionElement.classList.toString();
            const isDarkBg = classList.includes('bg-[#050505]') || 
                           classList.includes('bg-[#080808]') ||
                           classList.includes('bg-black');
            
            // Also verify it's NOT a light background
            const isLightBg = classList.includes('bg-[#FAFAFA]') ||
                            classList.includes('bg-white') ||
                            classList.includes('bg-gray-50') ||
                            classList.includes('bg-gray-100');
            
            if (isDarkBg && !isLightBg) {
              isOverDark = true;
            }
          }
        }
      });
      
      // Fallback: Also check any section with dark background classes
      // But be very strict - only if clearly inside and verified dark
      if (!isOverDark) {
        const darkSections = document.querySelectorAll('section[class*="bg-[#050505]"], section[class*="bg-[#080808]"], section[class*="bg-black"]');
        darkSections.forEach(section => {
          const rect = section.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          
          // Check if navbar overlaps and is well inside
          const isOverlapping = navbarViewportBottom > elementTop && navbarViewportTop < elementBottom;
          const isWellInside = navbarViewportCenter >= elementTop + threshold && 
                              navbarViewportCenter <= elementBottom - threshold;
          
          if (isOverlapping && isWellInside) {
            // Verify it's actually a dark section by checking classes
            const classList = section.classList.toString();
            const isDarkBg = classList.includes('bg-[#050505]') || 
                           classList.includes('bg-[#080808]') ||
                           classList.includes('bg-black');
            
            // Also verify it's NOT a light background
            const isLightBg = classList.includes('bg-[#FAFAFA]') ||
                            classList.includes('bg-white') ||
                            classList.includes('bg-gray-50') ||
                            classList.includes('bg-gray-100');
            
            if (isDarkBg && !isLightBg) {
              isOverDark = true;
            }
          }
        });
      }
      
      setIsDarkBackground(isOverDark);
    };

    // Use requestAnimationFrame for smoother detection
    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex flex-col items-center pointer-events-none px-6">
      <nav className={`pointer-events-auto w-full max-w-5xl flex items-center justify-between rounded-full border backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] pl-5 pr-2 py-2.5 transition-all duration-300 ${
        isDarkBackground 
          ? "border-white/10 bg-black/40 backdrop-blur-xl" 
          : "border-white/20 bg-white/20 backdrop-blur-xl"
      }`}>

        {/* Logo and Links Container */}
        <div className="flex items-center gap-8">
          {/* Logo Badge */}
          <Link
            href="/"
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-bold shadow-lg transition-all hover:scale-105 ${
              isDarkBackground
                ? "border-white/30 bg-white text-[#0d1a12] shadow-[0_4px_12px_rgba(255,255,255,0.2)]"
                : "border-gray-200 bg-white text-[#0d1a12] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            }`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Image
              src="/icons/slice-logo-transparent.svg"
              alt="Slice Logo"
              width={20}
              height={20}
              className="size-5"
            />
            Slice
          </Link>

          {/* Desktop Nav Links */}
          <div className={`hidden items-center gap-6 text-sm font-medium md:flex ${
            isDarkBackground ? "text-white" : "text-[#0D1A12]"
          }`}>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.name}
                href={item.href === "#" ? "#" : item.href}
                className="hover:text-primary transition-colors"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (item.href === "#") {
                    e.preventDefault();
                  } else if (item.href.startsWith("#")) {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  } else if (item.href.startsWith("http")) {
                    // External links are handled by the href, no preventDefault needed
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Link href={SLICE_LINKS.APP} target="_blank" rel="noopener noreferrer">
            <Button className="h-12 px-6 rounded-full bg-black hover:bg-primary text-white text-base font-bold transition-colors hidden sm:flex border border-white/10">
              Launch Demo<ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-full transition-colors ${
              isDarkBackground 
                ? "hover:bg-white/10 text-white" 
                : "hover:bg-black/5 text-[#0D1A12]"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto w-full max-w-5xl mt-2 rounded-[32px] border border-white/20 bg-white/60 backdrop-blur-xl shadow-[0_15px_60px_rgba(0,0,0,0.12)] p-4 animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.name}
                href={item.href === "#" ? "#" : item.href}
                className="px-4 py-3 text-lg font-medium text-[#0D1A12] rounded-xl hover:bg-black/5 transition-colors"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (item.href === "#") {
                    e.preventDefault();
                  } else if (item.href.startsWith("#")) {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  } else if (item.href.startsWith("http")) {
                    // External links are handled by the href, no preventDefault needed
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link href={SLICE_LINKS.APP} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full mt-2 h-12 rounded-full bg-black hover:bg-primary text-white text-base font-bold transition-colors">
                Launch App (Mainnet Demo) <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
