import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import RecentWork from '../components/RecentWork'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <RecentWork />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default LandingPage;