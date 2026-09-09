import ContactUs from "@/features/contact-us/ContactUs";
import { Helmet } from "react-helmet-async";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      content: "+201010101972",
      description: "Mon to Fri · 9am to 6pm",
      link: "tel:+201010101972",
      label: "Call us",
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "info@fuory.com",
      description: "Send us your query anytime",
      link: "mailto:aliashour468@gmail.com",
      label: "Send email",
    },
    {
      icon: MapPin,
      title: "Office Address",
      content: "Alexandria, Egypt",
      description: "Moharm Bek , Alexandria Governorate",
      link: "https://maps.app.goo.gl/HhPRi5KG2WgHVjwM8",
      label: "Get directions",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "24/7 Available",
      description: "Emergency support available",
      link: null,
      label: "Always available",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Fuory</title>
        <meta
          name="description"
          content="Get in touch with Fuory for fresh and frozen Egyptian produce, export inquiries, partnerships, and international orders."
        />
      </Helmet>

      {/* =========================================================
          CONTACT FORM
      ========================================================== */}

      <ContactUs />

      {/* =========================================================
          CONTACT INFORMATION
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#f7f9f5] py-20 md:py-28">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-green-300/20 blur-[120px]" />

          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-300/20 blur-[130px]" />

          <div className="absolute right-[-100px] top-20 h-72 w-72 rounded-full border border-green-700/10" />

          <div className="absolute right-[-50px] top-32 h-52 w-52 rounded-full border border-green-700/10" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-green-600/50" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-green-700">
                Let's Connect
              </span>

              <span className="h-px w-10 bg-green-600/50" />
            </div>

            <h2 className="font-veneer text-5xl uppercase tracking-wide text-gray-950 sm:text-6xl md:text-7xl">
              Contact
              <span className="text-green-600"> Fuory</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Whether you're looking for fresh Egyptian produce, frozen
              products, or a long-term export partnership, our team is ready
              to help.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              const CardContent = (
                <div className="group relative h-full overflow-hidden rounded-3xl border border-gray-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-2xl hover:shadow-green-900/10 sm:p-7">
                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-green-400/10 blur-3xl transition-all duration-500 group-hover:bg-green-400/25" />

                  {/* Top line */}
                  <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-green-600 to-emerald-400 transition-transform duration-500 group-hover:scale-x-100" />

                  {/* Icon */}
                  <div className="relative mb-7 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-white shadow-lg shadow-green-900/15 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-6 w-6" />
                    </div>

                    {info.link && (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-all duration-300 group-hover:border-green-200 group-hover:bg-green-50 group-hover:text-green-700">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div className="relative">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-green-600">
                      {info.label}
                    </p>

                    <h3 className="mb-2 text-lg font-bold text-gray-950">
                      {info.title}
                    </h3>

                    <p className="break-words text-base font-semibold text-gray-800">
                      {info.content}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {info.description}
                    </p>
                  </div>

                  {/* Bottom arrow */}
                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-green-700">
                    <span>
                      {info.link ? "Connect with us" : "We're here for you"}
                    </span>

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block h-full"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 overflow-hidden rounded-3xl border border-green-900/10 bg-green-800 px-6 py-6 shadow-xl shadow-green-950/10 md:px-8"
          >
            <div className="grid gap-6 md:grid-cols-3 md:divide-x md:divide-white/10">
              <div className="flex items-center gap-4 md:pr-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green-300">
                  <Globe2 className="h-5 w-5" />
                </div> 

                <div>
                  <p className="text-xs uppercase tracking-wider text-green-200/50">
                    Global Reach
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Exporting Egyptian Produce
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6 md:border-t-0 md:px-8 md:pt-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green-300">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-green-200/50">
                    Quality
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    International Standards
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6 md:border-t-0 md:pl-8 md:pt-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green-300">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-green-200/50">
                    Support
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Fast Business Response
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          LOCATION / MAP
      ========================================================== */}

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-green-600" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-green-700">
                  Find Us
                </span>
              </div>

              <h2 className="font-veneer text-5xl uppercase tracking-wide text-gray-950 sm:text-6xl">
                Visit Our
                <span className="text-green-600"> Location</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                Our Alexandria office is ready to welcome you. Come meet the
                team and discuss your next produce sourcing opportunity.
              </p>
            </motion.div>

            {/* Address badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 rounded-2xl border border-green-100 bg-green-50/70 px-5 py-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-700 text-white">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-green-600">
                  Our Office
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  Moharb Bik, Alexandria Governorate
                </p>

                <p className="text-xs text-gray-500">Egypt</p>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100 p-2 shadow-2xl shadow-gray-900/10"
          >
            {/* Map glow */}
            <div className="pointer-events-none absolute -inset-20 -z-10 bg-green-500/10 blur-3xl" />

            <div className="relative h-[400px] overflow-hidden rounded-[1.5rem] sm:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3415.7013359432563!2d29.9084614754027!3d31.118032066910082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5e9aad4d67fe3%3A0x733295a7102b24ed!2z2YXYrdi32Kkg2KjZitmI2LEg2KzYp9ix2K_Zhg!5e0!3m2!1sen!2sus!4v1759171901795!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "saturate(0.8)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fuory Alexandria office location"
              />

              {/* Floating map label */}
              <div className="pointer-events-none absolute bottom-5 left-5">
                <div className="flex items-center gap-3 rounded-2xl border border-white/30 bg-black/60 px-4 py-3 text-white shadow-xl backdrop-blur-xl">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-600">
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-white/60">
                      FUORY
                    </p>

                    <p className="text-sm font-semibold">
                      Alexandria, Egypt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom location CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 sm:flex-row"
          >
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-sm shadow-green-500/50" />

              <span className="text-sm font-medium text-gray-600">
                Alexandria office · Egypt
              </span>
            </div>

            <a
              href="https://maps.app.goo.gl/HhPRi5KG2WgHVjwM8"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-semibold text-green-700 transition-colors hover:text-green-800"
            >
              Open in Google Maps

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}