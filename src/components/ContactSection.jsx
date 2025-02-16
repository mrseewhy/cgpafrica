import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, href: "https://www.facebook.com/CGPAFRICA", bg: "bg-blue-600" },
    { icon: <Twitter className="w-6 h-6" />, href: "#", bg: "bg-sky-500" },
    { icon: <Instagram className="w-6 h-6" />, href: "#", bg: "bg-pink-600" },
    { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/company/capricorn-global-properties/", bg: "bg-blue-500" },
    { icon: <Mail className="w-6 h-6" />, href: "mailto:info@cgpafrica.com", bg: "bg-red-500" },
  ];

  const contactInfo = [
    {
      title: "Call",
      value: "+2348096555444, +27795833788",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      title: "WhatsApp",
      value: "+27795833788",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      title: "Email",
      value: "info@cgpafrica.com",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      title: "Address",
      value: "Plot V-148, Maiyegun Beach Estate, Lekki, Lagos State",
      icon: <MapPin className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-sans font-bold mb-6 text-yellow-600 ">Follow us on social media</h2>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 mb-8 items-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`${social.bg} p-2 rounded-lg text-white hover:opacity-80 transition-opacity`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 border border-orange-200 rounded-lg hover:shadow-md transition-shadow bg-white"
                >
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <div className="text-orange-500">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg font-sans">{info.title}</h3>
                    <p className="text-gray-700 font-poppins">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Section */}
          <div className="order-1 md:order-2">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <img
                src="/images/contact.jpg"
                alt="Contact representative"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;