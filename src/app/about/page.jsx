import Header from '@/components/Header'
import AboutUs from '@/components/AboutPage'
import Cards from '@/components/AboutTwoCards'
import CoreValues from '@/components/CoreValues'
import WorkWithUs from '@/components/WorkWithUs'
import CTAArea from '@/components/CTAArea'


export const metadata = {
  // General SEO Metadata
  title: "Capricon Global Properties | About us",
}
const page = () => {
  return (
    <div>
        <Header headline={'About us'}/>
        <AboutUs/>
        <Cards/>
        <CoreValues/>
        <WorkWithUs/>
        <CTAArea heading={'Join us as we turn dreams into addresses, one home at a time. Capricorn Global Properties – Where Dreams Find a Home.'} button={'Get Started'}/>
    </div>
    
  )
}

export default page