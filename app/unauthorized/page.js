"use client"
import Link from "next/link";
import { Button, Card } from "@heroui/react";

 function UnauthorizedPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22),transparent_45%)]" />

      <Card className="relative z-10 w-full max-w-xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl backdrop-blur-xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-red-500/10 text-4xl">
          🔒
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
          Access Denied
        </p>

        <h1 className="text-3xl font-bold md:text-5xl">Unauthorized Access</h1>

        <p className="mx-auto mt-4 max-w-md text-gray-400">
          You do not have permission to view this page. Please sign in with the
          correct account or return to the homepage.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            as={Link}
            href="/signin"
            className="h-12 bg-violet-600 px-8 font-semibold text-white hover:bg-violet-700"
          >
            Sign In
          </Button>

          <Button
            as={Link}
            href="/"
            variant="bordered"
            className="h-12 border-white/10 px-8 text-white"
          >
            Go Home
          </Button>
        </div>
      </Card>
    </main>
  );
}


export default UnauthorizedPage