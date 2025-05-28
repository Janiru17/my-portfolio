"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="min-h-[calc(100vh-64px)] flex items-center py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 w-full relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-green-500/10 dark:bg-green-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-2 sm:mx-4 lg:mx-6 px-2 sm:px-4 lg:px-8 max-w-none sm:max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-6 sm:mb-8 lg:mb-12"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 dark:from-blue-400 dark:via-green-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient bg-300% relative">
              Me
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-400 dark:to-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-400 dark:to-green-400 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-start max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Main content card */}
          <motion.div className="lg:col-span-2 group" variants={itemVariants}>
            <div className="bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-800/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl border border-blue-500/20 dark:border-blue-400/20 hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-all duration-500 hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 dark:from-blue-400/5 dark:to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-blue-600 to-green-500 dark:from-blue-400 dark:to-green-400 rounded-full mr-3"></div>
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 bg-clip-text text-transparent">
                    My Background
                  </h3>
                </div>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                    I'm{" "}
                    <span className="font-bold bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent hover:from-green-500 hover:to-blue-600 dark:hover:from-green-400 dark:hover:to-blue-400 transition-all duration-300">
                      Janiru Wickramage
                    </span>
                    , a Software Engineering undergraduate at the University of
                    Westminster and a Software Engineer Intern at Swivel Tech
                    (July 2024 - Present). I specialize in building modern web
                    applications using JavaScript, TypeScript, React, Next.js,
                    and Node.js, with a focus on accessibility and performance.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                    My passion for technology drives me to create innovative
                    solutions. At Swivel Tech, I contribute to full-stack
                    development projects, while my involvement in university
                    clubs like the Leo Club and Rotaract Club at IIT has honed
                    my leadership and communication skills.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                    I'm committed to lifelong learning, holding certifications
                    in React.js and Python, and I stay updated with industry
                    trends to deliver cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats grid - Now arranged as a 2x2 square */}
          <motion.div
            className="lg:col-span-1 flex justify-center items-center"
            variants={containerVariants}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4 w-fit">
              {[
                {
                  label: "Experience",
                  value: "1+ Year",
                  icon: "🚀",
                  gradient: "from-blue-500 to-purple-600",
                },
                {
                  label: "Projects",
                  value: "10+",
                  icon: "💻",
                  gradient: "from-green-500 to-teal-600",
                },
                {
                  label: "Certifications",
                  value: "2",
                  icon: "🏆",
                  gradient: "from-yellow-500 to-orange-600",
                },
                {
                  label: "Location",
                  value: "Colombo, SL",
                  icon: "📍",
                  gradient: "from-pink-500 to-red-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-800/70 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-blue-500/10 dark:border-blue-400/10 hover:border-blue-500/30 dark:hover:border-blue-400/30 overflow-hidden aspect-square flex flex-col justify-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}
                  ></div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {item.label}
                    </h4>
                    <p
                      className={`text-sm sm:text-base lg:text-lg font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.value}
                    </p>
                  </div>
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/20 dark:group-hover:border-blue-400/20 transition-colors duration-500"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-10 lg:mt-12"
          variants={itemVariants}
        >
          <div className="flex space-x-1.5">
            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse delay-700"></div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        .bg-300\% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
}
