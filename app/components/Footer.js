import Link from "next/link";
import { LogoFacebook, LogoGithub, LogoLinkedin } from "@gravity-ui/icons";
import { Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-violet-600 to-purple-500 font-bold text-white">
                H
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Hire<span className="text-violet-500">Hub</span>
                </h2>

                <p className="text-sm text-gray-400">
                  AI-Powered Hiring Platform
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-gray-400">
              Connect talented professionals with top companies. Discover
              opportunities, manage recruitment, and accelerate hiring with
              modern AI-powered tools.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-3">
              <button className="rounded-xl border border-white/10 p-3 text-gray-400 transition-all hover:border-violet-500 hover:text-violet-500">
                <LogoFacebook className="size-5" />
              </button>

              <button className="rounded-xl border border-white/10 p-3 text-gray-400 transition-all hover:border-violet-500 hover:text-violet-500">
                <LogoLinkedin className="size-5" />
              </button>

              {/* <button className="rounded-xl border border-white/10 p-3 text-gray-400 transition-all hover:border-violet-500 hover:text-violet-500">
                <LogoTwitter className="size-5" />
              </button> */}

              <button className="rounded-xl border border-white/10 p-3 text-gray-400 transition-all hover:border-violet-500 hover:text-violet-500">
                <LogoGithub className="size-5" />
              </button>
            </div>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-violet-500">
              Job Seekers
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/jobs"
                  className="text-gray-400 transition hover:text-white"
                >
                  Browse Jobs
                </Link>
              </li>

              <li>
                <Link
                  href="/companies"
                  className="text-gray-400 transition hover:text-white"
                >
                  Companies
                </Link>
              </li>

              <li>
                <Link
                  href="/saved-jobs"
                  className="text-gray-400 transition hover:text-white"
                >
                  Saved Jobs
                </Link>
              </li>

              <li>
                <Link
                  href="/career-advice"
                  className="text-gray-400 transition hover:text-white"
                >
                  Career Advice
                </Link>
              </li>
            </ul>
          </div>

          {/* Recruiters */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-violet-500">
              Recruiters
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/post-job"
                  className="text-gray-400 transition hover:text-white"
                >
                  Post Job
                </Link>
              </li>

              <li>
                <Link
                  href="/recruiters"
                  className="text-gray-400 transition hover:text-white"
                >
                  Recruiter Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 transition hover:text-white"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="/talent-search"
                  className="text-gray-400 transition hover:text-white"
                >
                  Talent Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-violet-500">
              Resources
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 transition hover:text-white"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/help-center"
                  className="text-gray-400 transition hover:text-white"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} HireHub. All rights reserved.</p>

          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy">Privacy Policy</Link>

            <Link href="/terms-of-service">Terms of Service</Link>

            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
