import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import DayTrio from '@/components/DayTrio'
import Features from '@/components/Features'
import Faq from '@/components/Faq'
import Visit from '@/components/Visit'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DayTrio />
        <Features />
        <Faq />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
