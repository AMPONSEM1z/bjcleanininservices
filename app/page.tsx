import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import PromoBanner from "@/components/promo-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <PromoBanner />
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
