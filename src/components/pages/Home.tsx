import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Home = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-24 container mx-auto px-6 overflow-hidden bg-gradient-to-br from-[#fefce8] via-[#f0fdf4] to-[#ecfdf5] dark:from-[#1A2332] dark:via-[#1A2332] dark:to-[#1A2332] text-foreground"
    >
      {/* Background Motion Effect */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-[#fefce8] via-[#f0fdf4] to-[#ecfdf5] dark:from-[#1f2937] dark:via-[#111827] dark:to-[#0f172a] z-[-1]"
      />

      {/* Decorative Glows */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-300/10 rounded-full blur-3xl animate-pulse z-[-1]" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-pulse z-[-1]" />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center lg:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
          Building Scalable <br />
          <span className="text-emerald-600 dark:text-emerald-400">
            Full-Stack Web Solutions
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
        >
          I’m <strong className="text-[#00D492]">Abdullah Al-Maruf</strong>, a
          dedicated{" "}
          <strong className="text-[#00D492]">Full-Stack Developer</strong> with
          hands-on experience in building end-to-end, secure, and scalable web
          applications. I work across both frontend and backend using{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            Node.js, Express, MongoDB, Redis, PostgreSQL, React, Next.js,
            TypeScript, Tailwind CSS, Redux Toolkit, Git & GitHub, and Shadcn UI
          </span>
          , with a strong focus on clean architecture, performance optimization,
          and seamless user experiences.
        </motion.p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button
            onClick={() => window.open("https://wa.me/8801857756965", "_blank")}
            className="px-4 py-2 text-base bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Hire Me
          </Button>

          {/* download cv */}
          <Button
            asChild
            className="px-4 py-2 text-base rounded-[8px] bg-emerald-600
              hover:bg-emerald-700s"
          >
            <a href="/assets/maruf.pdf" download className="cv-btn  text-white">
              Download CV
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="px-4 py-2 text-base border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800"
          >
            <Link to="/portfolio">View Projects</Link>
          </Button>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ rotate: 1, scale: 1.03 }}
        className="relative"
      >
        <img
          src="/images/maruf.jpg"
          alt="Abdullah Al-Maruf – Full-Stack Developer"
          className="w-80 md:w-[400px] rounded-xl shadow-xl object-cover"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md text-sm text-gray-700 dark:text-gray-200"
        >
          Let’s build something impactful
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
