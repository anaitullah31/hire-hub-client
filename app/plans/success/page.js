import Link from "next/link";
import { redirect } from "next/navigation";
import { CheckCircle } from "lucide-react";

import { stripe } from "../../lib/stripe";
import { createSubscription } from "@/app/lib/actions/subscriptions";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const {
    status,
    customer_details: { email: customerEmail },
    metadata,
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    redirect("/");
  }

  if (status === "complete") {
    const subsInfo = {
      email: customerEmail,
      planId: metadata.planId,
    };
    const result = await createSubscription(subsInfo);
    console.log(result);

    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <section className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          <h1 className="mb-3 text-3xl font-bold text-gray-900">
            Payment Successful!
          </h1>

          <p className="mb-6 text-gray-600">
            Thank you for your purchase. We appreciate your business.
          </p>

          <div className="mb-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
            <p>A confirmation email will be sent to:</p>
            <p className="mt-1 font-semibold text-gray-900">{customerEmail}</p>
          </div>

          <p className="mb-8 text-sm text-gray-500">
            If you have any questions, please contact us at{" "}
            <a
              href="mailto:orders@example.com"
              className="font-medium text-blue-600 hover:underline"
            >
              orders@example.com
            </a>
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Back to Home
            </Link>

            <Link
              href="/jobs"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Continue Shopping
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return null;
}
