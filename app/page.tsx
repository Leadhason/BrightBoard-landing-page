import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import TrustedBy from '@/components/TrustedBy'
import Benefits from '@/components/Benefits'
import VideoPreview from '@/components/VideoPreview'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import Features from'@/components/Features' 

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Benefits />
      <Features />
      <VideoPreview />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </main>
  )
}
