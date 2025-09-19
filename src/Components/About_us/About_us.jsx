import { motion } from "framer-motion";

export default function About_us() {
  return (
    <section
      id="about"
      className="bg-gray-900 py-16 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our To-Do List App helps you stay organized and productive.  
          We focus on providing a clean, simple, and efficient way to manage your daily tasks.  
          Whether you’re planning your day, working on a project, or keeping track of deadlines,  
          our app makes sure you never miss a thing!
        </motion.p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          {
            title: "Simple & Intuitive",
            desc: "A clean design that makes adding and tracking tasks effortless.",
          },
          {
            title: "Stay Organized",
            desc: "Categorize, prioritize, and complete your tasks with ease.",
          },
          {
            title: "Boost Productivity",
            desc: "Focus on what matters most and achieve your daily goals.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
