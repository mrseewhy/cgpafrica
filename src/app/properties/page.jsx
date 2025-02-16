import CTAArea from "@/components/CTAArea"
import GalleryPage from "@/components/GalleryPage"
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
        <div id='shortlet' className="py-12 ">
          <h3 className="text-3xl md:text-4xl font-semibold text-yellow-600 mb-4 font-sans text-center">Shortlet</h3>
          <p className="text-center max-w-2xl mx-auto">Premium Shortets in Africa’s richest square mile, Sandton</p>
          <GalleryPage/>
        </div>
        <CTAArea heading={'Ready to Find Your Dream Property? We have the perfect property for you.'} button={'Contact Us'}/>
    </div>
  )
}

export default page