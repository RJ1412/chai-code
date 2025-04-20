import React from "react";
import { motion } from "framer-motion";
import { UseElementVisibility } from "@/hooks/use-element-visibility";

const benefits = [
  {
    title: "Taught by Professionals",
    description:
      "Our cohorts are being taught by top industry experts and educators",
  },
  {
    title: "Bounties",
    description:
      "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard",
  },
  {
    title: "Coding hostels",
    description:
      "There is nothing like late night discussion with fellow learners and solving bugs",
  },
  {
    title: "Peer Code Reviews",
    description:
      "With our internal tools like Masterji, every code assignment gets feedback to improve your code",
  },
  {
    title: "Leet Lab",
    description:
      "Our in-house built LeetCode style platform that helps you understand the foundation of programming language",
  },
  {
    title: "Revision classes",
    description:
      "We have so many peer classes by fellow learners that you get so many chances to learn that topic",
  },
];

export const CohortBenefits = () => {
  const [ref, isVisible] = UseElementVisibility();

  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, scale: 0 }}
    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
    transition={{
      duration: 2,
      scale: { type: "spring", duration: 0.4, bounce: 0.5 },
    }}
    >
        
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2 mt-20 ml-60">Key Benefits of Cohorts</h1>
        <p className="text-sm ml-65">
          Cohorts are best way to learn because you finish the course in a timely manner
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10 ml-50 mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 p-6 hover:shadow-2xl hover:scale-[1.03] hover:border-orange-300 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-orange-500">
              {benefit.title}
            </h3>
            <p className="text-sm  mt-2">{benefit.description}</p>
          </div>
        ))}

        <div className="md:col-span-3 border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start hover:shadow-2xl hover:scale-[1.03] hover:border-orange-300 transition-all duration-300  cursor-pointer">
          <div className="md:w-full">
            <h3 className="text-xl font-semibold text-orange-500">
              Alumni Network and job listings
            </h3>
            <p className="text-sm  mt-2">
              The alumni Network that you always wished for in your college. We have a dedicated platform where students get to know each other, do projects, make agencies and join Hackathons. Our HR team also post regular job updates that you can apply directly whenever you are ready
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
