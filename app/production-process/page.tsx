import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Scissors, Palette, Zap, CheckCircle, Package, Truck, Settings, Eye, Shirt, Sparkles } from "lucide-react"

export default function ProductionProcessPage() {
  const productionSteps = [
    {
      step: 1,
      title: "Design & Pattern Creation",
      description:
        "Our creative team develops unique designs blending traditional African patterns with modern aesthetics. Digital design tools are used to create precise patterns.",
      icon: Palette,
      duration: "2-3 days",
      machines: ["CAD Design Software", "Pattern Plotting Machine", "Digital Tablet"],
      image: "/design-pattern-creation.png",
    },
    {
      step: 2,
      title: "Fabric Selection & Sourcing",
      description:
        "We carefully select premium fabrics from local and international suppliers, ensuring quality, sustainability, and cultural authenticity.",
      icon: Shirt,
      duration: "1-2 days",
      machines: ["Fabric Testing Equipment", "Color Matching System", "Quality Scanner"],
      image: "/fabric-selection.png",
    },
    {
      step: 3,
      title: "Fabric Cutting",
      description:
        "Precision cutting using advanced machinery ensures minimal waste and perfect pattern alignment. Each piece is cut according to exact specifications.",
      icon: Scissors,
      duration: "1 day",
      machines: ["Automated Cutting Machine", "Laser Cutter", "Pattern Marker"],
      image: "/fabric-cutting-machine.png",
    },
    {
      step: 4,
      title: "Embroidery & Decoration",
      description:
        "Traditional patterns and modern designs are applied using state-of-the-art embroidery machines and hand-finishing techniques.",
      icon: Sparkles,
      duration: "2-4 days",
      machines: ["Computer Embroidery Machine", "Sequin Machine", "Heat Press"],
      image: "/embroidery-machine.png",
    },
    {
      step: 5,
      title: "Sewing & Assembly",
      description:
        "Skilled artisans use industrial sewing machines to assemble garments with precision, ensuring durability and perfect fit.",
      icon: Settings,
      duration: "3-5 days",
      machines: ["Industrial Sewing Machine", "Overlock Machine", "Buttonhole Machine"],
      image: "/industrial-sewing-machine.png",
    },
    {
      step: 6,
      title: "Quality Control",
      description:
        "Every garment undergoes rigorous quality inspection to ensure it meets our high standards before proceeding to finishing.",
      icon: Eye,
      duration: "1 day",
      machines: ["Quality Inspection Station", "Measurement Tools", "Defect Detection System"],
      image: "/quality-control-station.png",
    },
    {
      step: 7,
      title: "Finishing & Pressing",
      description:
        "Final touches including pressing, steaming, and detail work to ensure each garment looks perfect and ready for delivery.",
      icon: Zap,
      duration: "1 day",
      machines: ["Steam Press", "Industrial Iron", "Garment Steamer"],
      image: "/garment-pressing.png",
    },
    {
      step: 8,
      title: "Final Inspection",
      description:
        "A comprehensive final check ensures every detail meets our quality standards and customer expectations.",
      icon: CheckCircle,
      duration: "0.5 days",
      machines: ["Final Inspection Table", "Lighting System", "Measurement Tools"],
      image: "/final-inspection.png",
    },
    {
      step: 9,
      title: "Packaging",
      description:
        "Careful packaging using eco-friendly materials protects garments during transport while maintaining our brand presentation.",
      icon: Package,
      duration: "0.5 days",
      machines: ["Packaging Station", "Label Printer", "Sealing Machine"],
      image: "/packaging-station.png",
    },
    {
      step: 10,
      title: "Shipping & Delivery",
      description:
        "Efficient logistics ensure timely delivery to customers worldwide while maintaining garment quality throughout transport.",
      icon: Truck,
      duration: "1-7 days",
      machines: ["Inventory System", "Shipping Labels", "Tracking System"],
      image: "/shipping-delivery.png",
    },
  ]

  const machineryCategories = [
    {
      category: "Design & Planning",
      machines: [
        {
          name: "CAD Design Workstation",
          description: "Advanced computer-aided design system for creating precise patterns and designs",
          image: "/cad-workstation.png",
          specifications: "High-resolution display, specialized software, digital input devices",
        },
        {
          name: "Pattern Plotting Machine",
          description: "Large-format plotter for creating accurate paper patterns from digital designs",
          image: "/pattern-plotter.png",
          specifications: "Up to 60-inch width, precision plotting, multiple media support",
        },
      ],
    },
    {
      category: "Cutting & Preparation",
      machines: [
        {
          name: "Automated Cutting System",
          description: "Computer-controlled cutting machine for precise fabric cutting with minimal waste",
          image: "/automated-cutting.png",
          specifications: "Multi-layer cutting, vacuum table, automatic blade changing",
        },
        {
          name: "Laser Cutting Machine",
          description: "High-precision laser cutter for intricate patterns and delicate fabrics",
          image: "/laser-cutter.png",
          specifications: "CO2 laser, programmable cutting paths, fume extraction system",
        },
      ],
    },
    {
      category: "Sewing & Assembly",
      machines: [
        {
          name: "Industrial Sewing Machine",
          description: "Heavy-duty sewing machine for high-volume production with consistent quality",
          image: "/industrial-sewing.png",
          specifications: "High-speed operation, automatic thread cutting, programmable stitching",
        },
        {
          name: "Computer Embroidery Machine",
          description: "Multi-head embroidery system for complex traditional and modern patterns",
          image: "/embroidery-system.png",
          specifications: "12-head system, 1000+ built-in designs, automatic color changing",
        },
      ],
    },
    {
      category: "Finishing & Quality",
      machines: [
        {
          name: "Steam Pressing Station",
          description: "Professional pressing equipment for perfect garment finishing",
          image: "/steam-press.png",
          specifications: "Adjustable temperature, steam injection, ergonomic design",
        },
        {
          name: "Quality Inspection System",
          description: "Advanced inspection station with specialized lighting and measurement tools",
          image: "/inspection-system.png",
          specifications: "LED lighting, measurement tools, defect tracking software",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Production Process</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the meticulous 10-step process that transforms raw materials into exceptional African fashion
            pieces
          </p>
        </div>
      </section>

      {/* Production Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Step-by-Step Production Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              From initial design concept to final delivery, every step is carefully orchestrated for excellence
            </p>
          </div>

          <div className="space-y-12">
            {productionSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Number */}
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-foreground">{step.title}</h3>
                    <Badge variant="outline" className="mt-1">
                      Duration: {step.duration}
                    </Badge>
                  </div>
                </div>

                {/* Step Content */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <step.icon className="h-8 w-8 text-accent mt-1" />
                      <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Equipment Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.machines.map((machine, idx) => (
                          <Badge key={idx} variant="secondary">
                            {machine}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Separator */}
                {index < productionSteps.length - 1 && <Separator className="mt-12" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery Showcase */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Advanced Machinery</h2>
            <p className="text-lg text-muted-foreground">
              State-of-the-art equipment ensuring precision, efficiency, and quality in every garment
            </p>
          </div>

          <div className="space-y-12">
            {machineryCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.machines.map((machine, machineIndex) => (
                    <Card key={machineIndex} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <img
                          src={machine.image || "/placeholder.svg"}
                          alt={machine.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="font-serif">{machine.name}</CardTitle>
                        <CardDescription>{machine.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-muted/50 p-3 rounded-md">
                          <p className="text-sm font-medium text-foreground mb-1">Specifications:</p>
                          <p className="text-sm text-muted-foreground">{machine.specifications}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Commitment to Excellence</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every step in our production process is designed to deliver the highest quality African fashion while
            preserving traditional craftsmanship and embracing modern innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Visit Our Workshop
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Learn About Quality Standards
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">New Kigali Designers</h3>
            <p className="text-background/80 mb-6">Crafting the future of African fashion, one thread at a time.</p>
            <div className="flex justify-center space-x-6">
              <Button
                variant="outline"
                className="text-background border-background hover:bg-background hover:text-foreground bg-transparent"
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                className="text-background border-background hover:bg-background hover:text-foreground bg-transparent"
              >
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
