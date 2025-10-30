import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check for success parameter from Formspree redirect
    if (router.query.success === 'true') {
      setSubmitted(true);
    }
    if (router.query.error === 'true') {
      setError(true);
    }
  }, [router.query]);

  const resetForm = () => {
    setSubmitted(false);
    setError(false);
    router.push('/contact', undefined, { shallow: true });
  };

  return (
    <>
      <Head>
        <title>Contact - CortexM AI | Digital Products Marketplace</title>
        <meta
          name="description"
          content="Get in touch with CortexM AI for support, partnerships, or general inquiries."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <Container className="py-16 animate-fade-in">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl dark:text-white">
              Contact Us
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 animate-slide-up hover:shadow-xl transition-shadow duration-300">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">✅ Message sent successfully!</h3>
                <p className="text-gray-600 dark:text-gray-300">We'll get back to you soon.</p>
                <button 
                  onClick={resetForm}
                  className="mt-4 text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                {error && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-600 dark:text-red-400 text-center">
                      ⚠️ Something went wrong. Please try again later.
                    </p>
                  </div>
                )}
                <form 
                  action="https://formspree.io/f/mwpwnndb"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_redirect" value={`${typeof window !== 'undefined' ? window.location.origin : ''}/contact?success=true`} />
                  <input type="hidden" name="_error" value={`${typeof window !== 'undefined' ? window.location.origin : ''}/contact?error=true`} />
                  <input type="hidden" name="_subject" value="New message from CortexM AI contact form" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">hello@cortexmai.com</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Response Time</h3>
              <p className="text-gray-600 dark:text-gray-300">Within 24 hours</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Support</h3>
              <p className="text-gray-600 dark:text-gray-300">24/7 availability</p>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}