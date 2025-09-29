import ContactUs from "@/features/contact-us/ContactUs";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      content: "+20 100 000 0000",
      description: "Mon to Fri 9am to 6pm",
      link: "tel:+201000000000"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "info@fuory.com",
      description: "Send us your query anytime!",
      link: "mailto:info@fuory.com"
    },
    {
      icon: MapPin,
      title: "Office Address",
      content: "Alexandria, Egypt",
      description: "Elshatby, Alexandria Governorate",
      link: "https://maps.google.com/?q=Alexandria,Egypt"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "24/7 Available",
      description: "Emergency support available",
      link: null
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Fuory</title>
        <meta
          name="description"
          content="Get in touch with Fuory. We're here to help with all your fresh and frozen produce needs."
        />
      </Helmet>



      {/* Contact Form Section */}
      <ContactUs />

            {/* Contact Information Cards */}
      <section className="py-16 bg-gradient-to-br from-white to-green-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-veneer text-green-600 mb-4 uppercase tracking-wide bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
             Contact Info
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              We're here to help with all your fresh and frozen produce needs. Reach out to us through any of the following channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={{cardVariants}}
                className="relative group"
              >
                {info.link ? (
                  <a
                    href={info.link}
                    className="block bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/50 shadow-lg shadow-green-500/10 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 h-full"
                  >
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-green-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-gray-800 font-medium text-base mb-1">
                        {info.content}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/50 shadow-lg shadow-green-500/10 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 h-full">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-green-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-gray-800 font-medium text-base mb-1">
                        {info.content}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-green-50/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-veneer text-green-600 mb-3 uppercase tracking-wide bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Visit Our Location
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light">
              Find us easily at our Alexandria office. We welcome visitors during business hours.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl shadow-green-500/10 h-[400px] border-2 border-white/50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3415.7013359432563!2d29.9084614754027!3d31.118032066910082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5e9aad4d67fe3%3A0x733295a7102b24ed!2z2YXYrdi32Kkg2KjZitmI2LEg2KzYp9ix2K_Zhg!5e0!3m2!1sen!2sus!4v1759171901795!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Additional Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <div className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm rounded-full px-4 py-2 border border-green-200/60">
              <MapPin className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                Moharb bik, Alexandria Governorate, Egypt
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}