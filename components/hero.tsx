import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/office-cleaning-team.png"
          alt="Professional cleaning services"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-serif text-foreground mb-6 leading-tight">
            B&J Professional
            <span className="block text-accent">Cleaning Services</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for restaurant, building, hospital, and event cleaning in Accra, Ghana.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Professional Team", "Licensed & Insured", "24/7 Available", "Eco-Friendly"].map((feature) => (
              <div key={feature} className="flex items-center gap-2 bg-card px-4 py-2 rounded-full">
                <span className="text-accent text-lg">✓</span>
                <span className="text-card-foreground text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-4"
            >
              Book Now - 20% OFF
              <span className="ml-2">→</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold text-lg px-8 py-4 bg-transparent"
            >
              View Services
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-muted-foreground">
            <p className="text-sm">
              Call us now: <span className="text-accent font-semibold">0206 764 690</span> or{" "}
              <span className="text-accent font-semibold">0247 126 363</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
