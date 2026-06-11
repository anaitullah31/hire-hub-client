"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { authClient } from "../lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Companies", href: "/companies" },
    { label: "For Recruiters", href: "/recruiters" },
    { label: "Pricing", href: "/plans" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();

    router.push("/signin");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-lg font-bold text-white">
            H
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              Hire<span className="text-violet-500">Hub</span>
            </h1>
            <p className="text-xs text-gray-400">Find Your Dream Job</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-violet-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-white/10" />

          {user ? (
            <Button onClick={handleSignOut} color="danger" variant="flat">
              Sign Out
            </Button>
          ) : (
            <Link
              href="/signin"
              className="text-sm font-medium text-gray-300 hover:text-violet-400"
            >
              Sign In
            </Link>
          )}

          {/* <Link
            href="/singup"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black"
          >
            Get Started
          </Link> */}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-white lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black lg:hidden transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <aside
          className={`h-dvh w-full bg-black transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 p-5">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-lg font-bold text-white">
                H
              </div>

              <div>
                <h1 className="text-lg font-bold text-white">
                  Hire<span className="text-violet-500">Hub</span>
                </h1>
                <p className="text-xs text-gray-400">Find Your Dream Job</p>
              </div>
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex h-[calc(100dvh-84px)] flex-col overflow-y-auto p-5">
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-violet-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-white/10 pt-6">
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  className="rounded-xl border border-white/10 px-4 py-3 text-center text-white"
                >
                  Sign In
                </Link>

                <Link
                  href="/register"
                  className="rounded-xl bg-white px-4 py-3 text-center font-semibold text-black"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
