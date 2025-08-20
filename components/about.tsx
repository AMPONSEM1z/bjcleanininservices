import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const features = [
    {
      icon: "👥", // Replaced Users icon with people emoji
      title: "Professional Team",
      description: "Trained and certified cleaning professionals",
    },
    {
      icon: "🏆", // Replaced Award icon with trophy emoji
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee on all services",
    },
    {
      icon: "🕐", // Replaced Clock icon with clock emoji
      title: "24/7 Available",
      description: "Emergency cleaning services available anytime",
    },
    {
      icon: "🛡️", // Replaced Shield icon with shield emoji
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your peace of mind",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black font-serif text-muted-foreground mb-6">
              About B&J Professional Cleaning Services
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With years of experience serving the Accra community, B&J
                Professional Cleaning Services has built a reputation for
                excellence in commercial and specialized cleaning services.
              </p>
              <p>
                We understand that different industries have unique cleaning
                requirements. Whether you're running a restaurant that needs to
                meet health department standards, a hospital requiring
                medical-grade sanitization, or planning an event that needs
                spotless venues, we have the expertise and equipment to deliver
                exceptional results.
              </p>
              <p>
                Our team is trained in the latest cleaning techniques and uses
                eco-friendly products whenever possible. We're committed to
                providing reliable, professional service that exceeds your
                expectations every time.
              </p>
              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                <p className="font-semibold text-accent">
                  🎉 Special Promotion: Get 20% OFF your first cleaning service!
                </p>
              </div>
            </div>
          </div>

          {/* Image and Features */}
          <div>
            <div className="mb-8">
              <img
                src="/team.jpg"
                alt="B&J Professional Cleaning Team"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                return (
                  <Card key={index} className="text-center p-4">
                    <CardContent className="p-0">
                      <div className="mx-auto mb-3 p-2 bg-accent/10 rounded-full w-fit">
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <h3 className="font-semibold text-card-foreground text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
