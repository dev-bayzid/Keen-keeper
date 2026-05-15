"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: { duration: 0.8 },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative z-10 max-w-3xl text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 text-sm backdrop-blur-xl mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          System Error
        </motion.div>

        {/* 404 */}
        <motion.h1 className="text-8xl md:text-[12rem] font-black tracking-tight leading-none flex justify-center gap-2">
          {["4", "0", "4"].map((digit, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: i * 0.2,
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="relative"
            >
              {digit === "0" ? (
                <motion.span
                  animate={{
                    rotate: [-6, 6, -6],
                    scale: [1, 1.05, 1],
                    opacity: [0.9, 1, 0.9],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block text-transparent bg-clip-text bg-linear-to-r from-emerald-300 via-green-400 to-emerald-500"
                >
                  0
                </motion.span>
              ) : (
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-300 via-green-400 to-emerald-500">
                  {digit}
                </span>
              )}
            </motion.span>
          ))}
        </motion.h1>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-3xl md:text-5xl font-bold tracking-tight bg-linear-to-r from-emerald-200 via-green-300 to-emerald-400 bg-clip-text text-transparent"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          The page you are trying to access does not exist or may have been
          moved. The link might be broken, outdated, or temporarily unavailable.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Home Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-emerald-400 px-7 py-3 font-semibold text-slate-950 transition-all duration-300"
            >
              <span className="relative z-10">Back Home</span>

              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="relative z-10"
              >
                →
              </motion.span>

              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>

          {/* Contact Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-slate-700 px-7 py-3 text-slate-300 hover:border-emerald-400/40 hover:text-emerald-300 transition-all duration-300"
            >
              Contact Support
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "220px" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-0.5 bg-linear-to-r from-transparent via-emerald-400 to-transparent mx-auto mt-16"
        />
      </motion.div>
    </main>
  );
}
