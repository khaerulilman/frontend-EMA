import Head from "next/head";
import Navbar from "../landing/Navbar";
import HeroSection from "../landing/HeroSection";
import Features from "../landing/Features";
import Footer from "../landing/Footer";
import HowToStart from "../landing/HowToStart";
import TutorProfile from "../landing/TutorProfile";
import PriceCourse from "../landing/PriceCourse";
import ProductPreview from "../landing/ProductPreview";
import DocumentationSection from "../landing/DocumentationSection";
import CertificateSection from "../landing/CertificateSection";
import RoomPreview from "../landing/RoomPreview";
import TestimonialSection from "../landing/TestimonialSection ";
import MotivationSection from "../landing/MotivationSection";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>English My Adventure</title>
        <meta
          name="description"
          content="Learn English with confidence through our interactive courses"
        />
      </Head>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <Features />
      <HowToStart />
      <section id="tutorprofile">
        <TutorProfile />
      </section>
      <section id="pricecourse">
       <PriceCourse /> 
      </section>
      {/* <section id="Product">
        <ProductPreview />
      </section> */}
      <DocumentationSection />

      <section id="certificate">
        <CertificateSection />
      </section>
      <section id="rooms">
        <RoomPreview />
      </section>
      <TestimonialSection />
      <MotivationSection />
      <Footer />
    </div>
  );
};

export default Home;
