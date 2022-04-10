import { motion } from "framer-motion";
import Hero from "./Hero";
import { Testimonial } from "./Testimonial";
import { TrustedCompanies } from "./TrustedCompanies";
import NewCarousel from "./Carousel";
import Video from "./Video";
import SectionHeading from "./SectionHeading";

const Home = () => {
  return (
    <motion.div
      className="transition-animation-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <section id="home">
        <Hero />
      </section>

      <section id="benefits" className="w-full">
        <SectionHeading title="Educational Benefits" />
        <NewCarousel />
        <Video video="https://www.youtube.com/embed/sAxIspQr3R0" />
      </section>

      <section id="testimonials">
        <SectionHeading title="Testimonials" />
        <Testimonial />
        <TrustedCompanies />
      </section>
    </motion.div>
  );
};

export default Home;
