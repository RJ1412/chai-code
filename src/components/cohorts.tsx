import ReactPlayer from 'react-player'
import { CiCalendar } from "react-icons/ci";
import { MdOutlineTimer } from "react-icons/md";
import { Button } from './ui/button';

const Live =  () => {
    return (
        <>
           <div className='ml-80 flex h-10 justify-center items-center'>
        <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
  </span> 
   <p className='text-red-500 text-sm'>LIVE</p>
        </div>
        </>
    )
}

interface PriceDisplayProps {
    currentPrice: number | string;
    originalPrice?: number | string;
  }

const Price = ({currentPrice, originalPrice} : PriceDisplayProps) => {
    return (
        <>
         <div className='mt-auto text-start flex items-center'>
            <span className='font-bold text-start ml-1 text-xl'>{currentPrice} INR</span>
            <span className='ml-2 text-sm line-through '>{originalPrice} INR</span>
        </div>
        </>
    )
}

export const Cohort = () => {
    return (
  <>
<div className="mt-20 ml-60">
  <p className="text-7xl font-md mb-5">Cohorts</p>
  <p className="text-3xl font-md mt-5">Live Training Classes</p>
</div>
<div className="grid grid-cols-3 gap-30 ml-25 mt-6 mb-5 ">
    <div className="col-span-1 border-1 flex flex-col h-150 border-black rounded-lg w-[400px] text-white bg-black">
      <Live></Live>
        <ReactPlayer width={399} height={300} controls={true} playing={true} light={true} url='https://youtu.be/Kjd-SWpe1do' />
        <div className='pl-1'>
        <p className='text-2xl font-bold text-left'>Full Stack Data Science 1.0</p>
        <p className='text-1xl font-light text-left mb-3'>From Python basics to project deployment</p>
        <span className= "flex gap-1">
        <CiCalendar className='text-lg mt-0 '/>
        <p className='text-left mr-6 text-sm'>Starts April 12, 2025</p>
        <MdOutlineTimer className='mt-[2px] text-md'></MdOutlineTimer>
        <p className='text-sm'>6 months</p>
        </span>
        </div>
        <Price currentPrice={6999} originalPrice={8999}/>
        <div className='text-xs text-start ml-1 mb-3 text-orange-400'>Save 38%</div>
        <Button className=' mb-1 mx-1 bg-gradient-to-r from bg-orange-500 to bg-amber-600 hover:bg-amber-700 hover:cursor-pointer'>Learn More</Button>
        
    </div>
    <div className="col-span-1 border-1 flex flex-col border-black rounded-lg w-[400px] text-white bg-black">
        <Live></Live>
        <ReactPlayer width={399} height={300} controls={true} playing={true} light={true} url='https://youtu.be/VNb_LawBBWU' />
        <div className='pl-1'>
        <p className='text-2xl font-bold text-left line-clamp-1'>GenAI with Python | Concept to Deployment Projects 1.0</p>
        <p className='text-1xl font-light text-left mb-3'>Development Side of AI Application</p>
        <span className= "flex gap-1">
        <CiCalendar className='text-lg mt-0 '/>
        <p className='text-left mr-6 text-sm'>Starts April 7, 2025</p>
        <MdOutlineTimer className='mt-[2px] text-md'></MdOutlineTimer>
        <p className='text-sm'>1-2 months</p>
        </span>
        </div>
        <Price currentPrice={4999} originalPrice={7999}/>
        <div className='text-xs text-start ml-1 mb-3 text-orange-400'>Save 38%</div>
        <Button className=' mb-1 mx-1 bg-gradient-to-r from bg-orange-500 to bg-amber-600 hover:bg-amber-700 hover:cursor-pointer'>Learn More</Button>
    </div>
    <div className="col-span-1 border-1 flex flex-col border-black rounded-lg w-[400px] text-white bg-black">
        <Live></Live>
        <ReactPlayer width={399} height={300} controls={true} playing={true} light={true} url='https://youtu.be/oBLpqSHc3lA' />
        <div className='pl-1'>
        <p className='text-2xl font-bold text-left'>Full Stack Data Science 1.0</p>
        <p className='text-1xl font-light text-left mb-3'>From Python basics to project deployment</p>
        <span className= "flex gap-1">
        <CiCalendar className='text-lg mt-0 '/>
        <p className='text-left mr-6 text-sm'>Starts April 15, 2025</p>
        <MdOutlineTimer className='mt-[2px] text-md'></MdOutlineTimer>
        <p className='text-sm'>1-2 months</p>
        </span>
        </div>
        <Price currentPrice={4999} originalPrice={7999}/>
        <div className='text-xs text-start ml-1 mb-3 text-orange-400'>Save 38%</div>
        <Button className=' mb-1 mx-1 bg-gradient-to-r from bg-orange-500 to bg-amber-600 hover:bg-amber-700 hover:cursor-pointer'>Learn More</Button>
    </div>

</div>

   </>
    )
}