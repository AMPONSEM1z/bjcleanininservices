export const metadata = {
  title: "BJ Cleaning Services | Professional Cleaning in Accra",
  description:
    "Affordable and reliable cleaning services for homes and offices in Accra. Book BJ Cleaning Services today and enjoy a spotless space.",
};

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import PromoBanner from "@/components/promo-banner";
import Head from "next/head";

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
  );
}
