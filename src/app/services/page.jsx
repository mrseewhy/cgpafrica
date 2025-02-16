import CTAArea from "@/components/CTAArea"
import Header from "@/components/Header"
import ServicesPage from "@/components/ServicesPage"

export const metadata = {
  // General SEO Metadata
  title: "Capricon Global Properties | Our Services",
}

const page = () => {
  return (
    <div>
        <Header headline={'Our Services'}/>
        <ServicesPage/>
        <CTAArea heading={'Your journey towards quality living and real estate investment begins here.'} button={'Get Started'}/>
    </div>
  )
}

export default page
