import { motion } from "framer-motion";

export const FreeAPISection = () => {
  return (
    <section className=" py-16 px-6 md:px-16 mt-10 ml-90">
      
      {/* Top Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500">
          FreeAPI - Open Source
        </h2>
      </motion.div>

      {/* Content and Video Side by Side */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
            Unlock Your Potential with Our API Hub
          </h3>
          <p className="text-lg leading-relaxed text-center md:text-left">
            Our API Hub is designed to streamline your learning experience in API handling across various programming languages.
            <br />
            With this resource, you can effortlessly build and showcase your front-end portfolio in both web and mobile applications.
            <br />
            Join us to enhance your skills and take your coding projects to the next level!
          </p>
        </motion.div>

        {/* Right Side - YouTube Embed */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl border-2 border-orange-500 shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/xJq0EQMFGyg"
              title="FreeAPI Video"
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Centered Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-12 text-center"
      >
        <a
          href="https://freeapi.app/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-black font-semibold px-8 py-5 rounded-xl shadow-lg text-center cursor-pointer transition-all text-lg"
           >
          Check FreeAPI Docs
        </a>
      </motion.div>
    </section>
  );
};
