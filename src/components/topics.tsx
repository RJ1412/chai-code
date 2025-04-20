import { motion } from "framer-motion";
import { UseElementVisibility } from "@/hooks/use-element-visibility";


const topics = [
  { name: "Docker", link: "https://youtu.be/rr9cI4u1_88?si=Mr0i9kuW1JaXfy4Z" },
  { name: "MCP Server", link: "https://youtu.be/dZyQNy3-HjU?si=D-uAsoTvc2CyZuX_" },
  { name: "Kubernetes", link: "https://youtu.be/7XDeI5fyj3w?si=Lx2Q1hk6_dp_qs79" },
  { name: "Python", link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s" },
  { name: "React Native", link: "https://www.youtube.com/playlist?list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c" },
  { name: "Django", link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy" },
  { name: "NextJS", link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBAaWGtn9GA2PTw0HO0tXzq" },
  { name: "TypeScript", link: "https://www.youtube.com/playlist?list=PLRAV69dS1uWRPSfKzwZsIm-Axxq-LxqhW" },
  { name: "JavaScript", link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37" },
  { name: "Prisma", link: "https://youtu.be/PWs6gFmjDyo?si=6_iMMWPYrhOhl93p" },
  { name: "Fast Api", link: "https://youtu.be/foGklduxhM0?si=meL6T9RRq60Bo-gV" },
  { name: "Numpy", link: "https://youtu.be/x7ULDYs4X84?si=B98GjWQivkaJKc4i" },
  { name: "SAAS", link: "https://www.youtube.com/playlist?list=PLRAV69dS1uWTvNby0b1w_boT35Onv5YWS" },
  { name: "Git", link: "https://www.youtube.com/playlist?list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o" },
  { name: "Tailwind", link: "https://www.youtube.com/playlist?list=PLRAV69dS1uWTd5IYNjm75PlS0gYi0mRFJ" }
];

export const Topics = () => {
  const [ref, isVisible] = UseElementVisibility();
  return (
    <>

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
          <h1 className="text-4xl font-bold mb-2 mt-20 ml-90">Topics Cloud</h1>
          <p className="text-sm text-gray-700 ml-65">
            You can find videos and courses on topics and much more
          </p>
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-10 ml-70 max-w-6xl mx-auto">
          {topics.map((topic, index) => (
            <a
              key={index}
              href={topic.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-yellow-400 p-6  shadow hover:shadow-2xl hover:scale-[1.03] hover:border-orange-300 transition-all duration-300 cursor-pointer text-orange-500 font-semibold flex items-center justify-center text-center"
            >
              {topic.name}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
};
