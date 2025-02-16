import ContactSection from "@/components/ContactSection"
import CTAArea from "@/components/CTAArea"
import Header from "@/components/Header"

export const metadata = {
  // General SEO Metadata
  title: "Capricon Global Properties | Contact us",
}

const page = () => {
  return (
    <div>
        <Header headline={'Contact us'}/>
        <ContactSection/>
        <CTAArea heading={' '} button={' '}/>
    </div>
  )
}

export default page
