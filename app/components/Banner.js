import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_30%,rgba(124,58,237,0.12))]" />

      <div className="relative mx-auto flex min-h-180 max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur">
          <span className="text-xl">💼</span>
          <span className="font-semibold text-white">50,000+</span>
          <span className="uppercase tracking-widest">New Jobs This Month</span>
        </div>

        <h1 className="max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Find Your Dream Job Today
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg md:text-xl">
          HireHub connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role faster.
        </p>

        <form className="mt-10 w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-3 rounded-xl bg-transparent px-3 py-3">
              <svg
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                />
              </svg>

              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full bg-transparent text-white outline-none placeholder:text-gray-400"
              />
            </div>

            <div className="hidden h-8 w-px bg-white/10 md:block" />

            <div className="flex flex-1 items-center gap-3 rounded-xl bg-transparent px-3 py-3">
              <svg
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                />
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10.5h.01"
                />
              </svg>

              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full bg-transparent text-white outline-none placeholder:text-gray-400"
              />
            </div>

            <button
              type="submit"
              className="flex h-14 items-center justify-center rounded-xl bg-violet-600 px-7 font-semibold text-white transition hover:bg-violet-700 md:w-16 md:px-0"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                />
              </svg>
            </button>
          </div>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400">
          <span>Trending Position</span>

          {["Product Designer", "AI Engineering", "DevOps Engineer"].map(
            (item) => (
              <Link
                key={item}
                href={`/jobs?category=${item}`}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white transition hover:border-violet-500 hover:text-violet-400"
              >
                {item}
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
