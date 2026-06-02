"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Card, Input } from "@heroui/react";
import { authClient } from "@/app/lib/auth-client";

export default function SigninPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignin = async (event) => {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const { error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setErrorMessage(error.message || "Invalid credentials");
        return;
      }

      setSuccessMessage("Login successful!");

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-10">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.20),transparent_45%)]" />

      <Card className="relative z-10 w-full max-w-md border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600 text-2xl font-bold text-white">
              H
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

          <p className="mt-2 text-gray-400">
            Sign in to continue your journey.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="mb-5 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSignin} className="grid grid-cols-1 gap-5">
          <Input
            required
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            variant="bordered"
            className="w-full"
          />

          <Input
            required
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            variant="bordered"
            className="w-full"
          />

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-violet-400 transition hover:text-violet-300"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            isLoading={loading}
            className="h-12 w-full bg-violet-600 font-semibold text-white hover:bg-violet-700"
          >
            Sign In
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <Button
          variant="bordered"
          className="h-12 w-full border-white/10 text-white"
        >
          Continue with Google
        </Button>

        <p className="mt-6 text-center text-sm text-gray-400">
          Do not have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-violet-400 hover:text-violet-300"
          >
            Sign Up
          </Link>
        </p>
      </Card>
    </main>
  );
}
