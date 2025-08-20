export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-black font-serif mb-4">
              B&J Professional Cleaning
            </h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Your trusted partner for professional cleaning services in Accra,
              Ghana. We deliver excellence in every clean.
            </p>
            <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
              <p className="text-accent font-semibold text-sm">
                🎉 20% OFF - Limited Time Offer!
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Restaurant Cleaning</li>
              <li>Building Maintenance</li>
              <li>Hospital Cleaning</li>
              <li>Event Cleaning</li>
              <li>Emergency Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <span className="text-accent">📞</span>
                <div>
                  <p>0206 764 690</p>
                  <p>0247 126 363</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">📍</span>
                <p>Opp. Nana Saah School, Kwabenya - Accra</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">🕒</span>
                <p>24/7 Emergency Services</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 B&J Professional Cleaning Services.By KOJO AMPONSEM All
            rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-1">
            TikTok: bj cleaning services
          </p>
        </div>
      </div>
    </footer>
  );
}
