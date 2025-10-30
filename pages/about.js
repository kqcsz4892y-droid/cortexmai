import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";

export default function About() {
  return (
    <>
      <Head>
        <title>About - CortexM AI | Digital Products Marketplace</title>
        <meta
          name="description"
          content="Learn about CortexM AI's mission to provide premium digital products for businesses and creators."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl dark:text-white">
              About CortexM AI
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
              Empowering businesses with intelligent digital solutions
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                CortexM AI builds automation tools, workflows, and scripts to help businesses automate marketing, 
                data collection, and operations. We specialize in creating intelligent solutions that save time, 
                reduce manual work, and accelerate business growth through the power of automation.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">What We Offer</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Our digital products include smart lead extractors, cybersecurity scanners, invoice organizers, 
                and LinkedIn prospecting tools. Each workflow is built using cutting-edge technologies like n8n, 
                AI APIs, and cloud integrations to deliver maximum efficiency and reliability.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Why Choose CortexM AI</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We focus on practical automation solutions that deliver real business value. Our workflows are 
                battle-tested, well-documented, and designed for easy implementation. Whether you're a marketing 
                agency, cybersecurity team, or business owner, our tools help you work smarter, not harder.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-300">Automation Workflows</div>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">2000+</div>
                  <div className="text-gray-600 dark:text-gray-300">Happy Customers</div>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">24/7</div>
                  <div className="text-gray-600 dark:text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}