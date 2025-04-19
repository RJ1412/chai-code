import React from "react";
import { motion } from "framer-motion";
import discordImage from "./images/hitesh.jpg";
import { UseElementVisibility } from "@/hooks/use-element-visibility";

export const Discord = () => {
  const [ref, isVisible] = UseElementVisibility();

  return (
    <div className="bg-white text-black py-24 px-4 md:px-10 mt-30 ml-60 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-12"
      >
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="space-y-6"
        >
          <span className="bg-orange-100 text-orange-500 text-base px-4 py-1 rounded-full font-semibold">
            Community
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Join our <span className="text-orange-500">community</span> <br />
            where <br />
            creativity thrives.
          </h2>
        </motion.div>

        {/* Right Side: Image + Discord Button */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
          className="flex flex-col items-center"
        >
          
          <div className="border border-gray-300 rounded-xl p-4 w-full max-w-sm bg-white shadow hover:shadow-xl transition-shadow duration-300">
            <img
              src={discordImage}
              alt="Discord Community"
              className="w-full h-60 object-cover rounded"
            />
             <a
  href="https://discord.gg/KBPgMdu4Mn"
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
    whileHover={{ scale: 1.1, backgroundColor: "#1E1E1E" }}
    transition={{
      duration: 0.6,
      type: "spring",
      stiffness: 200,
      damping: 10,
    }}
    className="mt-4 bg-black text-white px-4 py-2 rounded flex items-center justify-center gap-2 cursor-pointer shadow-lg"
  >
    <motion.img
      src="https://img.icons8.com/ios-filled/50/ffffff/discord-logo.png"
      alt="Discord icon"
      className="w-5 h-5"
      whileHover={{ rotate: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
    <span className="font-semibold">Discord</span>
  </motion.div>
</a>

          </div>
        
        </motion.div>
      </motion.div>

      {/* Centered Button */}
      <div className="w-screen flex justify-center mt-12 absolute left-1/2 -translate-x-1/2">
        <motion.div
          whileHover={{ scale: 1.08 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-orange-500 text-black font-semibold px-8 py-5 rounded-xl shadow-lg text-center cursor-pointer transition-all text-lg"
        >
          80,000 Active <br /> coders in Discord
        </motion.div>
      </div>
    </div>
  );
};
