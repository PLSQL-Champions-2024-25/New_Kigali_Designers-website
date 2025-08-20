"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Users, Award, Zap, CheckCircle, ArrowRight, Play, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ServicesPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const services = [
    {
      id: "promotional",
      title: "Promotional Materials",
      description: "Custom branded merchandise and promotional clothing for marketing campaigns",
      icon: <Zap className="h-8 w-8" />,
      features: ["Custom Branding", "Bulk Orders", "Quick Turnaround", "Quality Materials"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd19.jpg-omVIlsiz5sEUhnrNBQzJqPrD12WlqA.webp",
      video: "https://youtu.be/2o6FjOrcjpQ?si=QwpYFzrOnq5NLIiT",
      projects: ["Corporate T-shirts", "Event Merchandise", "Trade Show Apparel", "Brand Uniforms"],
    },
    {
      id: "uniforms",
      title: "Institutional Uniforms",
      description: "Professional uniforms for schools, hospitals, corporations, and government institutions",
      icon: <Users className="h-8 w-8" />,
      features: ["Durable Fabrics", "Professional Design", "Size Customization", "Bulk Pricing"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd18.jpg-A4bXsHxEpwfVn7O8JSE1j7340vEaT4.webp",
      video: "https://youtu.be/2o6FjOrcjpQ?si=QwpYFzrOnq5NLIiT",
      projects: ["School Uniforms", "Medical Scrubs", "Security Uniforms", "Corporate Wear"],
    },
    {
      id: "retail",
      title: "Retail Brands",
      description: "Our own fashion lines and retail clothing brands for the local and international market",
      icon: <Award className="h-8 w-8" />,
      features: ["Fashion Forward", "Local Market", "Quality Assurance", "Trendy Designs"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd14.jpg-tuuQ6U2JiBewUW2DcKI6xEmLDbwSgT.webp",
      video: "https://youtu.be/2o6FjOrcjpQ?si=QwpYFzrOnq5NLIiT",
      projects: ["Casual Wear", "Traditional Attire", "Modern Fashion", "Seasonal Collections"],
    },
  ]

  const testimonials = [
    {
      name: "Ministry of Education",
      role: "Government Institution",
      content:
        "New Kigali Designers provided excellent school uniforms for over 50 schools across Rwanda. Outstanding quality and service.",
      rating: 5,
    },
    {
      name: "Kigali Convention Centre",
      role: "Event Venue",
      content:
        "Their promotional materials for our international conferences were exceptional. Professional and timely delivery.",
      rating: 5,
    },
    {
      name: "Bank of Kigali",
      role: "Financial Institution",
      content: "Professional corporate uniforms that represent our brand perfectly. Highly recommend their services.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From promotional materials to institutional uniforms and retail brands, we deliver exceptional garment
              manufacturing services across Rwanda and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                <Phone className="mr-2 h-5 w-5" />
                Get Quote
              </Button>
              <Button size="lg" variant="outline">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three decades of expertise in garment manufacturing, serving diverse clients from government institutions
              to international brands.
            </p>
          </div>

          <Tabs defaultValue="promotional" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="text-sm md:text-base">
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-rose-100 p-3 rounded-lg mr-4">{service.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">{service.title}</h3>
                    </div>

                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">Recent Projects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.projects.map((project, index) => (
                          <Badge key={index} variant="secondary">
                            {project}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="bg-rose-600 hover:bg-rose-700">
                      Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {/* Service Image */}
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    {/* Video Section */}
                    <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-100">
                      {activeVideo === service.id ? (
                        <iframe
                          width="100%"
                          height="240"
                          src="https://www.youtube.com/embed/2o6FjOrcjpQ?si=QwpYFzrOnq5NLIiT&autoplay=1"
                          title="Production Process Video"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div
                          className="relative h-60 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center cursor-pointer group"
                          onClick={() => setActiveVideo(service.id)}
                        >
                          <div className="bg-white/90 rounded-full p-4 group-hover:bg-white transition-colors">
                            <Play className="h-8 w-8 text-rose-600" />
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-gray-700 font-medium">Watch: {service.title} Process</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">From concept to delivery, we ensure quality at every step</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your needs and requirements" },
              { step: "02", title: "Design", desc: "Creating custom designs and prototypes" },
              { step: "03", title: "Production", desc: "Manufacturing with quality control" },
              { step: "04", title: "Delivery", desc: "Timely delivery and after-sales support" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-rose-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600">What our clients say about our services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-rose-100 mb-8">
            Get in touch with our team to discuss your garment manufacturing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-gray-100">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-600 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: +250 780 521 244
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">New Kigali Designers</h3>
              <p className="text-gray-400">
                Leading clothing production company in Rwanda, serving clients since 1998.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Promotional Materials</li>
                <li>Institutional Uniforms</li>
                <li>Retail Brands</li>
                <li>Custom Design</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/gallery" className="hover:text-white">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/production-process" className="hover:text-white">
                    Production Process
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Kigali, Rwanda</p>
                <p>+250 780 521 244</p>
                <p>info@newkigalidesigners.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 New Kigali Designers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
