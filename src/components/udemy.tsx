import React from "react";
import { motion } from "framer-motion"; 
import { UseElementVisibility } from "@/hooks/use-element-visibility";

interface StarIconProps {
  filled?: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({ filled = true }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`lucide lucide-star h-4 w-4 text-orange-500 ${
      filled ? "fill-orange-500" : "fill-orange-500 opacity-70"
    }`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

export const Udemy = () => {
  const [ref1, isVisible1] = UseElementVisibility();
  const [ref2, isVisible2] = UseElementVisibility(); // Currently unused

  return (
    <>

      <motion.div
        ref={ref1}
        initial={{ opacity: 0, scale: 0 }}
        animate={isVisible1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{
          duration: 2,
          scale: { type: "spring", duration: 0.4, bounce: 0.5 },
        }}
      >
        <div className="mt-20 ml-60">
          <p className="text-7xl font-medium mb-5">Our Courses on Udemy</p>
          <p className="text-3xl font-medium mt-5">
            Join thousands of students who have transformed their careers with
            our comprehensive courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 bg-black rounded-2xl ml-60">
          <div className="p-8 bg-black backdrop-blur-sm rounded-l-xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Complete web development course
            </h3>
            <p className="text-gray-300 mb-6">
              Only web development course that you will need. Covers HTML, CSS,
              Tailwind, Node, React, MongoDB, Prisma, Deployment etc
            </p>

            <div className="flex items-center gap-2 mb-6">
              <div className="text-4xl font-bold text-white">4.7</div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(4)].map((_, index) => (
                    <StarIcon key={index} filled />
                  ))}
                  <StarIcon filled={false} />
                </div>
                <div className="text-sm text-gray-400">Top Rated</div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl font-bold text-orange-500">₹399</div>
              <div className="text-gray-500 line-through text-sm">₹3,099</div>
              <div className="bg-orange-500/20 text-orange-400 text-xs px-2 py-1 rounded">
                87% off
              </div>
            </div>

            <div>
              <a
                href="https://hitesh.ai/udemy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-2 h-auto rounded-xl shadow-lg shadow-orange-500/20">
                  Check Udemy Courses
                </button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="h-full relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/KZ31wDjYleI?si=-gnzytzyEsfm8KS8"
                title="ChaiCode Web Development Course"
                className="absolute top-0 left-0 w-full h-full rounded-r-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
