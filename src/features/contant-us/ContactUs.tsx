"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden"
    >


      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-green-400 font-veneer">Get in Touch</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto text-pretty font-dm">
            Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as
            possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-primary-foreground/80 mb-8 text-pretty">
                Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to
                answer all your questions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center animate-bounce-hover">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-primary-foreground/80">Fuory@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center animate-bounce-hover">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-primary-foreground/80">+201010101972</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center animate-bounce-hover">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Office</h4>
                  <p className="text-primary-foreground/80">
                    Moharm beik , Alexandria
                    <br />
                   Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card
            className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-ring/25"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-ring/25"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-ring/25 resize-none"
                      placeholder="Tell us about your project or ask us a question..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-400 hover:bg-green-400/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
