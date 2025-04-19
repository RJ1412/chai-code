import { motion } from "framer-motion";
import image1 from "./images/test1.png"
import image2 from "./images/test2.png";
import image3 from "./images/test3.png";
import image4 from "./images/test4.png";
import image5 from "./images/test5.png";
import image6 from "./images/test6.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white mt-20 py-20 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center mb-4"
      >
        <span className="text-sm font-mono px-3 py-1 ml-65 bg-black text-white dark:bg-white dark:text-black rounded-full">
          Testimonials
        </span>
      </motion.div>

     
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4 ml-60"
      >
        Our Students Feedback
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-12 ml-85"
      >
        Explore the incredible advantages of enrolling in our courses and enhancing your skills.
      </motion.p>


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="ml-40 relative w-[320px] h-[250px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-neutral-900 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.03] cursor-pointer group"
          >
            <img
              src={img}
              alt={`Testimonial ${idx + 1}`}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        ))}
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mt-16"
      >
        <a
          href="#"
          className="inline-block px-6 py-3 ml-65 font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 border-none rounded-xl shadow-lg hover:brightness-110 transition duration-300"
        >
          Join Cohorts Live Classes
        </a>
      </motion.div>
    </section>
  );
};
