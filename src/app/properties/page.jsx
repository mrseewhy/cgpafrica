import CTAArea from "@/components/CTAArea"
import Header from "@/components/Header"
import PropertiesSection from "@/components/PropertiesSection"

export const metadata = {
  // General SEO Metadata
  title: "Capricon Global Properties | Our Properties",
}

const page = () => {
  return (
    <div>
        <Header headline={'Our Properties'}/>
        <PropertiesSection/>
        <CTAArea heading={'Ready to Find Your Dream Property? We have the perfect property for you.'} button={'Contact Us'}/>
    </div>
  )
}

export default page