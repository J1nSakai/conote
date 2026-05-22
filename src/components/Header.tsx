"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  showNav?: boolean;
}

export function Header({ showNav = true }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isNotesRoute = pathname?.startsWith("/notes");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0B0E14]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight text-gradient-purple-teal transition-all duration-300 group-hover:opacity-90">
            conote
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider text-[#0D9488] font-semibold bg-[#0D9488]/10 px-1.5 py-0.5 rounded-sm">
            AI recall
          </span>
        </Link>

        {/* Desktop Navigation */}
        {showNav && !isNotesRoute && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#CBC3D7]">
            <a
              href="#features"
              className="transition-colors hover:text-[#E5E2E1]"
            >
              Features
            </a>
            <a
              href="#workflow"
              className="transition-colors hover:text-[#E5E2E1]"
            >
              Workflow
            </a>
            <a
              href="#pricing"
              className="transition-colors hover:text-[#E5E2E1]"
            >
              Pricing
            </a>
            <a href="#about" className="transition-colors hover:text-[#E5E2E1]">
              About
            </a>
          </nav>
        )}

        {/* {isNotesRoute && (
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/notes"
              className={cn(
                "transition-colors pb-1 border-b-2 hover:text-[#E5E2E1]",
                pathname === "/notes" 
                  ? "border-[#0D9488] text-[#E5E2E1]" 
                  : "border-transparent text-[#CBC3D7]"
              )}
            >
              My Notes
            </Link>
          </nav>
        )} */}

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {isNotesRoute ? (
            <div></div>
          ) : (
            <>
              <Link
                href="/notes"
                className="text-sm font-medium text-[#CBC3D7] hover:text-[#E5E2E1]"
              >
                Sign In
              </Link>
              <Link href="/notes">
                <Button
                  size="sm"
                  className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/85 text-white font-medium rounded-sm border-none shadow-none ai-glow-subtle cursor-pointer"
                >
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="text-[#CBC3D7] hover:text-[#E5E2E1] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/5 bg-[#121212] px-6 py-4 flex flex-col gap-4 text-base font-medium">
          {showNav && !isNotesRoute && (
            <>
              <a
                href="#features"
                className="text-[#CBC3D7] hover:text-[#E5E2E1] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#workflow"
                className="text-[#CBC3D7] hover:text-[#E5E2E1] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Workflow
              </a>
              <a
                href="#pricing"
                className="text-[#CBC3D7] hover:text-[#E5E2E1] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-[#CBC3D7] hover:text-[#E5E2E1] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
            </>
          )}

          {isNotesRoute && (
            <Link
              href="/notes"
              className="text-[#E5E2E1] py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Notes
            </Link>
          )}

          <div className="pt-2 border-t border-white/5 flex flex-col gap-3">
            {isNotesRoute ? (
              <Link href="/notes/new" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#0D9488] text-white rounded-sm">
                  New Note
                </Button>
              </Link>
            ) : (
              <>
                <Link
                  href="/notes"
                  className="text-center py-2 text-[#CBC3D7] hover:text-[#E5E2E1]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link href="/notes" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#8B5CF6] text-white rounded-sm">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
