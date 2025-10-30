import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Container from "../components/container";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

export default function Home() {
  return (
    <>
      <Head>
        <title>CortexM AI — Premium AI Workflows & Automation Scripts</title>
        <meta
          name="description"
          content="Discover powerful automation workflows, scripts, and AI tools for digital creators, agencies, and businesses — by CortexM AI."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      
      {/* New minimalist section */}
      <Container className="py-20 animate-fade-in">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl xl:text-5xl dark:text-white mb-6 animate-slide-up">
            Automate Smarter with CortexM AI
          </h2>
          <p className="text-xl leading-relaxed text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            CortexM AI helps marketers, creators, and agencies automate their daily work using powerful AI workflows and scripts. 
            Explore ready-to-use automations and grow your business faster.
          </p>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="/products"
              className="inline-block px-10 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Browse Products
            </a>
          </div>
        </div>
      </Container>

      <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <SectionTitle
          pretitle="Our Digital Products"
          title="Why Choose CortexM AI">
          We provide premium digital products including automation scripts, AI workflows, 
          and marketing tools designed to help businesses grow faster and work smarter.
        </SectionTitle>
      </div>
      
      <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <Benefits data={benefitOne} />
      </div>
      
      <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <Benefits imgPos="right" data={benefitTwo} />
      </div>
      
      <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          Get answers to common questions about our digital products, licensing, 
          support, and how to get the most value from your purchase.
        </SectionTitle>
      </div>
      
      <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
        <Faq />
      </div>
      
      <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <Cta />
      </div>
      <Footer />
      <PopupWidget />
    </>
  );
}
