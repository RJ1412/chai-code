import './App.css'
import { Whyus } from './components/whyussection'
import { TwitterCard } from './components/twittercard'
import { Cohort } from './components/cohorts'
import { Udemy } from './components/udemy'
import { CohortBenefits } from "./components/cohort_benifits"
import { WhyChaiCode } from './components/whychaicode'
import { Topics } from './components/topics'
import { Discord } from './components/discord'
import { Footer } from './components/footer'
import { FreeAPISection } from './components/freeapi'
import { TestimonialsSection } from './components/testimonial'
import { AppFeaturesSection } from './components/AppFeatures'

 function App() {

  return (
    <>
     <div className=' max-w-fit bg-white dark:bg-black text-black dark:text-white '>
        <Whyus/>
        <TwitterCard></TwitterCard>
        <Cohort></Cohort>
        <TestimonialsSection></TestimonialsSection>
        <Udemy></Udemy>
        <CohortBenefits></CohortBenefits>
        <WhyChaiCode></WhyChaiCode>
        <Topics></Topics>
        <Discord></Discord>
        <AppFeaturesSection></AppFeaturesSection>
        <FreeAPISection></FreeAPISection>
        <Footer></Footer>
        </div>
    </>
  )
}

export default App
