import { Briefcase, Factory, Persons, Star } from "@gravity-ui/icons";
import Image from "next/image";

export default function StatsSection() {
  const stats = [
    { icon: Briefcase, value: "50K", label: "Active Jobs" },
    { icon: Factory, value: "12K", label: "Companies" },
    { icon: Persons, value: "2M", label: "Job Seekers" },
    { icon: Star, value: "97%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="relative -mt-px overflow-hidden bg-[#080311] py-24 text-white sm:py-28 lg:py-32">
      {/* Globe Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/globe.png"
          alt="Globe"
          fill
          priority
          className="pointer-events-none object-cover object-center opacity-100"
        />
      </div>

      {/* Soft blend only */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080311]/40 via-transparent to-black/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Assisting over <span className="text-violet-400">15,000</span> job
          seekers
          <br className="hidden sm:block" />
          find their dream positions.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-black/60 p-8 shadow-2xl backdrop-blur-md"
              >
                <Icon className="size-6 text-white" />

                <h3 className="mt-16 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                  {item.value}
                </h3>

                <p className="mt-5 text-base text-gray-300 sm:text-lg">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}