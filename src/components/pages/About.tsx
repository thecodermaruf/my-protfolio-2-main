import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="container mx-auto px-6 py-24 max-w-3xl text-center bg-gradient-to-br from-[#fefce8] via-[#f0fdf4] to-[#ecfdf5] dark:from-[#1A2332] dark:via-[#1A2332] dark:to-[#1A2332] text-foreground">
      {/* Profile Image */}
      <motion.img
        src="/images/maruf.jpg"
        alt="Abdullah Al-Maruf"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover"
      />

      {/* Heading */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 dark:text-gray-100"
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
      >
        Hi, I’m{" "}
        <span className="font-semibold text-[#00D492] dark:text-[#00D492]">
          Abdulla Al-Maruf
        </span>
        , a dedicated{" "}
        <strong className="text-[#00D492]">Full-Stack Web Developer</strong>{" "}
        with hands-on experience in building modern, scalable, and
        high-performance web applications. I work across both frontend and
        backend using{" "}
        <strong className="text-[#00D492]">
          Node.js, Express, MongoDB, Redis, PostgreSQL, React, Next.js,
          TypeScript, Tailwind CSS, Redux Toolkit, and Shadcn UI
        </strong>
        . I focus on writing clean, maintainable code and enjoy transforming
        complex problems into efficient, user-friendly digital solutions.
      </motion.p>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
        {[
          "Node.js",
          "Express",
          "MongoDB",
          "Redis",
          "PostgreSQL",
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Redux Toolkit",
          "Shadcn UI",
          "HTML5",
          "CSS",
          "Git & GitHub",
        ].map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 dark:bg-[#00D492] text-black dark:text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
