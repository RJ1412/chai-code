import ReactPlayer from 'react-player'
import { motion } from 'motion/react'
import { UseElementVisibility } from '@/hooks/use-element-visibility'
import { ModeToggle } from './mode-toggle'
import logo_white from "../chai-assets/chaicode-white.png"
import logo from "../chai-assets/chaicode-black.png";
import { useTheme } from "./theme-provider";
export const Whyus = () => {
    const { theme } = useTheme();
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolvedTheme = theme === "system" ? (systemPrefersDark ? "dark" : "light") : theme;
  
  
    const [ball1, isball1Visible] = UseElementVisibility()
    const [ball2, isball2Visible] = UseElementVisibility()
    const [ball3, isball3Visible] = UseElementVisibility()
    const [ball4, isball4Visible] = UseElementVisibility()
    const [ball5, isball5Visible] = UseElementVisibility()
    const [ball6, isball6Visible] = UseElementVisibility()
    const [border, isborderVisible] = UseElementVisibility()
    return (


        <>
        <div 
        className="flex flex-col justify-center h-[vh] wrap-normal bg-white dark:bg-black text-black dark:text-white">
  <div className=''>
    <header className=" fixed w-fit  h-23 z-5 bg-white dark:bg-black text-black dark:text-white">
      <div className=" px-6 flex justify-around pb-2">
        {/* <div className='h-8 w-15'>
          <img src={logo} className='mt-5 h-[50px] w-[50px]' alt="" />
        </div> */}
        <div className="text-3xl mr-100 pt-4">
        <img
          src={resolvedTheme === "dark" ? logo_white : logo}
            alt="ChaiCode"
            
          />
        </div>
        <div className="flex flex-row items-center gap-20 pt-2 pr-5 text-lg font-semibold mr-10 ">
          <div className="relative inline-flex items-center font-semibold  hover:text-gray-900 hover:cursor-pointer">
            Cohorts
            {/* Red dot next to Cohorts */}
            <span className="ml-1 inline-block w-2 h-2 rounded-full bg-red-500 mt-1"></span>
          </div>
          <div className=" hover:text-gray-900 hover:cursor-pointer">
            Udemy
          </div>
          <div  className=" hover:text-gray-900 hover:cursor-pointer">
            Docs
          </div>
          <div  className=" hover:text-gray-900 hover:cursor-pointer">
            Reviews
          </div>
        </div>
      
      
        <div  className=" hover:text-gray-900 hover:cursor-pointer mt-8 ml-50 pr-4">
            <ModeToggle></ModeToggle>
          </div>
        
        <div className='pl-4'>
          <motion.button
          whileHover={{
            // scale : 1.1
          }}
            whileTap={{
              scale : [0.90,1.1]
            }} 
           className=" rounded-lg bg-gradient-to-r from bg-amber-500 to bg-orange-400 hover:cursor-pointer mt-8 pr-4">
            Login
          </motion.button>
        </div>
   
      </div>
      <motion.span 
      ref = {border}
      initial = {{
          width : 0 
      }}
      animate = {
        isborderVisible ? { width: "100%" } : { width: 0 }
      }
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute bottom-0 left-0 h-1 w-full ml-0 bg-gradient-to-r from bg-amber-500 to bg-yellow-400"></motion.span>
    </header>
    </div>
 
     <motion.div
      ref={ball1}
      initial={{ opacity: 0, scale: 0 }}
      animate={isball1Visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{
        duration: 1,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      
     className="w-60 border rounded-md mt-35 ml-155 py-2 px-0 shadow-lg transition-all duration-700 hover:scale-110 ">
       <p>Trusted by 1.5M code learners</p>
     </motion.div>
     <motion.div 
  ref={ball2}
  initial={{ opacity: 0, scale: 0 }}
  animate={isball2Visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
  transition={{
    duration: 1,
    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
  }}
  className="mt-20 ml-100 px-6 max-w-4xl mx-auto text-center space-y-6"
>
  <h2 className="text-5xl font-bold leading-tight">
    Consistency and Community
  </h2>
  <p className="text-2xl font-medium">
    An unmatched learning experience for coding courses
  </p>
</motion.div>

<motion.div 
  ref={ball3}
  initial={{ opacity: 0, scale: 0 }}
  animate={isball3Visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
  transition={{
    duration: 1,
    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
  }}
  className="mt-10 ml-90 px-6 max-w-3xl mx-auto text-lg leading-relaxed text-center"
>
  <p>
    Content is everywhere, but we provide a learning experience that is unmatched.
    From bounties and peer learning to code reviews and a virtual hostel.
  </p>
  <p className="mt-4">
    Connect with our Alumni Network, join doubt sessions, collaborate on group projects,
    and engage in a variety of community-driven activities to stay on track.
  </p>
</motion.div>

  <motion.div 
   ref={ball4}
   initial={{ opacity: 0, scale: 0 }}
   animate={isball4Visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
   transition={{
     duration: 1,
     scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
   }}
  className="flex w-110 gap-4 h-20 py-4 pl-6 mt-12 ml-130 text-4xl border-2 rounded-lg border-amber-400 shadow-lg transition-all duration-700 hover:scale-110">
      <p>Check all Live Cohorts</p>
      <div className="flex items-center gap-2">
  <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
  </span>
</div>

  </motion.div>

  <motion.div 
   ref={ball5}
   initial={{ opacity: 0, scale: 0 }}
   animate={isball5Visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
   transition={{
     duration: 1,
     scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
   }}
   
  className='ml-115 pt-4 '>
<ReactPlayer width={550} height={300} controls={true} playing={true} light={true} url='https://youtu.be/RDagRV7ueMI?si=uckG58qqU_Y5BxMT' />
</motion.div>

<motion.div 
 ref={ball6}
 initial={{ opacity: 0, scale: 0 }}
 animate={isball6Visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
 transition={{
   duration: 1,
   scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
 }}
>
  <div className='ml-56 mt-20'>
    <p className='text-2xl'>Love that we get from our community</p>
    <p className='text-4xl mt-3 font-medium'>Tweet Love</p>
  </div>
</motion.div>
    </div>
        </>
    )
}