import { motion } from "framer-motion";
import { Code2, Layout, Database, Cloud, Cpu, Globe } from "lucide-react";
import ServiceCard from "../comp/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Frontend Engineering",
      description:
        "Design and develop responsive, accessible, and user-centric interfaces using React, TypeScript, Tailwind CSS, and modern UI best practices.",
    },
    {
      icon: Database,
      title: "Backend Engineering",
      description:
        "Build secure, scalable, and high-performance REST APIs using Node.js, Express, MongoDB, Redis, and PostgreSQL with clean architecture principles.",
    },
    {
      icon: Code2,
      title: "Full-Stack Application Development",
      description:
        "End-to-end development of production-ready web applications—from frontend implementation to backend logic, database design, and API integration.",
    },
    {
      icon: Cloud,
      title: "Deployment & Cloud Setup",
      description:
        "Deploy, configure, and maintain applications on platforms like Vercel, Netlify, and Render, with environment management and CI/CD workflows.",
    },
    {
      icon: Cpu,
      title: "Performance & Optimization",
      description:
        "Optimize application performance by improving load times, reducing bundle size, and ensuring smooth, scalable user experiences.",
    },
    {
      icon: Globe,
      title: "API Integration & Services",
      description:
        "Integrate third-party services such as authentication systems, payment gateways, and analytics APIs using secure and maintainable code.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-24 bg-gradient-to-br from-[#fefce8] via-[#f0fdf4] to-[#ecfdf5] dark:from-[#1A2332] dark:via-[#1A2332] dark:to-[#1A2332] text-foreground">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100"
      >
        What I Do
      </motion.h2>

      <p className="mt-4 max-w-2xl mx-auto text-center text-gray-600 dark:text-gray-300 text-lg">
        I help businesses and individuals build reliable, scalable, and
        high-quality web applications by combining modern frontend technologies
        with robust backend systems.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
