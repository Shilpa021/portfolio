'use client'
import Section from "../../components/Section";
import Card from "../../components/Card";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "../../components/Hero";
import Signature from "../../components/Signature";
import Impact from "../../components/Impact";
import Philosophy from "../../components/Philosophy";
import Decisions from "../../components/Decisions";
import Failure from "../../components/Failure";
import Story from "../../components/Story";

export default function Home() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">

      {/* HERO */}
      {/* <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="section relative"
      >
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

        <h1 className="text-5xl font-bold">Shilpa Rana</h1>
        <h1 className="text-5xl font-semibold leading-tight max-w-2xl">
          I build frontend systems that scale —
          <span className="text-gray-500">
            from UI components to architecture powering 100K+ users
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl">
          Frontend Tech Lead with 10+ years experience in React, GraphQL,
          and performance optimization. Focused on building systems,
          not just features.
        </p>
      </motion.section> */}

<Hero />
      {/* ABOUT */}
      <Section title="About">
        <p className="text-gray-400 max-w-2xl">
          10+ years of experience building high-performance web and Smart TV apps.
          I specialize in React, GraphQL BFF, and frontend architecture.
          I’ve led teams, improved performance by 30%+, and built reusable systems
          that scale across products.
        </p>
      </Section>

      {/* SKILLS */}
      <Section title="Skills">
        <div className="flex flex-wrap gap-3">
          {[
            "React", "Javascript", "GraphQL", "Redux",
            "TypeScript", "Next.js", "Performance", "Design Systems"
          ].map(s => (
            <span key={s} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section title="Selected Work">
        <div className="grid gap-6">

          <Card>
            <h3 className="text-xl font-semibold">
              PRM Sales & Service (Tata Play)
            </h3>
            <p className="text-gray-400 mt-2">
              Built GraphQL BFF, reduced API calls by 40%, improved load time by 30%.
            </p>
            <Link href="/case-study/prm" className="text-blue-400 mt-2 inline-block">
              Read Case Study →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold">
              Smart TV Platform
            </h3>
            <p className="text-gray-400 mt-2">
              Built React TV apps optimized for low memory devices.
            </p>
            <Link href="/case-study/tv" className="text-blue-400 mt-2 inline-block">
              Read Case Study →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold">
              ULTA Performance Optimization
            </h3>
            <p className="text-gray-400 mt-2">
              Improved rendering performance by 25% via memoization.
            </p>
            <Link href="/case-study/ulta" className="text-blue-400 mt-2 inline-block">
              Read Case Study →
            </Link>
          </Card>

        </div>
      </Section>

      {/* CONTACT */}
      <Section title="Contact">
        <p className="text-gray-400">rana.shilpa021@gmail.com</p>
        <p className="text-gray-400">linkedin.com/in/shilparana021</p>
      </Section>

      <Signature />
      <Impact />
      <Philosophy />
      <Decisions />
      <Failure />
      <Story />

    </main>
  );
}