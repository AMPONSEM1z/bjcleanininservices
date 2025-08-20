import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: "🍽️",
      title: "Restaurant Cleaning",
      description:
        "Complete kitchen and dining area sanitization following health department standards.",
      image: "/professional-restaurant-kitchen-cleaning.png",
    },
    {
      icon: "🏢",
      title: "Building Maintenance",
      description:
        "Comprehensive office and commercial building cleaning services.",
      image: "/person-indoor-clean-cleaning.jpg",
    },
    {
      icon: "🏥",
      title: "Hospital Cleaning",
      description:
        "Medical-grade sanitization and disinfection for healthcare facilities.",
      image: "/hospital-cleaning.png",
    },
    {
      icon: "🎉",
      title: "Event Cleaning",
      description:
        "Pre and post-event cleaning services for venues of all sizes.",
      image: "/event-venue-cleaning.png",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black font-serif text-muted-foreground mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide specialized cleaning solutions tailored to your industry
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
