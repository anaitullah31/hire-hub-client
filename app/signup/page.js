"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Card, Input } from "@heroui/react";
import { authClient } from "../lib/auth-client";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const { data, error } = await authClient.signUp.email({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        image: formData.image,
      });

      if (error) {
        setErrorMessage(error.message || "Failed to create account.");
        return;
      }

      setSuccessMessage("Account created successfully!");

      setTimeout(() => {
        router.push("/signin");
      }, 1200);
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black px-4 py-16 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center justify-center">
        <Card className="w-full max-w-md border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl">
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600 text-2xl font-bold text-white">
                H
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white">Create Account</h1>
            <p className="mt-2 text-sm text-gray-400">
              Join HireHub and start your career journey.
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

          <form onSubmit={handleSignup} className="flex flex-col gap-5">
            <Input
              required
              name="name"
              type="text"
              label="Name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              variant="bordered"
              className="w-full"
            />

            <Input
              name="image"
              type="url"
              label="Photo URL"
              placeholder="https://example.com/photo.jpg"
              value={formData.image}
              onChange={handleChange}
              variant="bordered"
              className="w-full"
            />

            <Input
              required
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              variant="bordered"
              className="w-full"
            />

            <Input
              required
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              variant="bordered"
              className="w-full"
            />

            <Button
              type="submit"
              color="primary"
              className="h-12 w-full bg-violet-600 font-semibold text-white"
              isLoading={loading}
            >
              Sign Up
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/signin" className="font-medium text-violet-400">
              Sign in
            </Link>
          </p>
        </Card>
      </div>
    </main>
  );
}
