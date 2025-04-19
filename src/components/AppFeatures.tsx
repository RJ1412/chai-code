import { motion } from "framer-motion";
import { FaAndroid, FaApple } from "react-icons/fa";
import { CheckCircle } from "lucide-react";

const features = [
  "Access all courses and content directly on your phone",
  "Log in with your existing account seamlessly",
  "Track your learning progress and resume anytime",
  "Production-ready code tutorials, simplified for learners",
  "Cross-platform syncing between web and mobile",
  "Engage with the developer community",
  "Get real-time updates and notifications",
  "Reach out easily with integrated support options",
];

export const AppFeaturesSection = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 px-6 md:px-16 ml-60 mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        ChaiCode App is Now on Mobile!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10"
      >
        A home for programmers to learn, grow, and engage with the community. ChaiCode offers high-quality courses with
        video lectures and production-ready code examples—now available right at your fingertips.
      </motion.p>

      
      <motion.ul
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14"
      >
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center space-x-4 text-lg">
            <CheckCircle className="text-green-500 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <a
          href="https://play.google.com/store/apps/details?id=com.chaicode.courses&hl=en_IN"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:brightness-110 transition"
        >
          <FaAndroid className="text-2xl" />
          Get it on Android
        </a>

        <a
          href="https://apps.apple.com/in/app/chaicode/id6504993143"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl shadow hover:brightness-110 transition"
        >
          <FaApple className="text-2xl" />
          Download on iOS
        </a>
      </motion.div>
    </section>
  );
};
