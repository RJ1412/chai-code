import React from "react";
import { UseElementVisibility } from "@/hooks/use-element-visibility";
import { motion } from 'motion/react';
import image1 from './images/hitesh.jpg'
const benefits = [
  {
    title: "Comprehensive Curriculum",
    description:
      "Master key concepts and hands-on skills with clarity and confidence. Learn what truly matters, the right way, thorough, practical, and easy to understand.",
  },
  {
    title: "You finish it",
    description:
      "Our cohorts are a collaborative journey. Students learn together, stay motivated, and complete the course on time as a community.",
  },
  {
    title: "Industry Guests",
    description:
      "We’re connected with industry experts and regularly bring them into our classes for engaging, fun, and insightful sessions with students.",
  },
  {
    title: "Code and Chill",
    description:
      "Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall into place.",
  },
  {
    title: "Improve Communication",
    description:
      "One of the best ways to boost communication skills is through practice. Our peer classes make it happen where co-learners teach, share, and grow together.",
  },
  {
    title: "Bounties",
    description:
      "Every cohort comes with exciting cash prizes and some even feature a MacBook giveaway! It’s our way of keeping the motivation high and the learning fun.",
  }
];

export const WhyChaiCode = () => {
  const [ref, isVisible] = UseElementVisibility();
  const [isVisible2, setIsVisible2] = UseElementVisibility();
  return (
    <div>
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
          <h1 className="text-4xl font-bold mb-2 mt-20 ml-60">But Why ChaiCode ?</h1>
          <p className="text-sm text-gray-700 ml-65">
            ChaiCode exists because we love tech and teaching
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-10 ml-50 mx-auto">
          <div className="space-y-6 md:col-span-2">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl border border-yellow-400 p-6  shadow hover:shadow-2xl hover:scale-[1.03] hover:border-orange-300 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-bold text-orange-500 mb-2 mt-2">
                  {benefit.title}
                </h3>
                <p className="text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="col-span-2 flex flex-col items-center text-center rounded-xl border border-yellow-400 p-6  shadow hover:shadow-2xl hover:scale-[1.03] hover:border-orange-300 transition-all duration-300 cursor-pointer">
            <img
              src= {image1} />
            <h3 className="text-lg font-bold text-orange-500 mb-2">Hitesh Choudhary</h3>
            <p className="text-smmt-2">
              Retired from corporate and full-time YouTuber, ex-founder of LCO (acquired), ex-CTO, Sr. Director at PW. 2 YT channels (950k & 470k), stepped into 43 countries.
            </p>
            <h4 className="text-md font-bold text-orange-500 mt-4">Approach</h4>
            <p className="text-sm -700">
              Project-based courses with peer learning and bounties with many activities.
            </p>
          </div>

          <div className="space-y-6 md:col-span-2">
            {benefits.slice(3).map((benefit, index) => (
              <div
                key={index + 3}
                className="rounded-xl border border-yellow-400 p-6  shadow hover:shadow-2xl hover:scale-[1.03] hover:border-orange-300 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-bold text-orange-500 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
     <motion.div 
  
     ref={isVisible2}
     initial={{ opacity: 0, scale: 0 }}
     animate={setIsVisible2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
     transition={{
       duration: 1,
       scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
     }}
   
     className='w-100 h-28 ml-140 mt-10 mb-6 border rounded-lg border-amber-400 text-2xl p-4 shadow-lg transition-all duration-700 hover:scale-110'>
       <p className='mt-5'>Join Cohorts Live Classes</p> 
   </motion.div> 
   </div>
  );
};
