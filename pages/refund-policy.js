import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy - CortexM AI | Digital Products Marketplace</title>
        <meta
          name="description"
          content="Refund Policy for CortexM AI digital products marketplace."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl dark:text-white">
              Refund Policy
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
              Last updated: October 30, 2025
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">1. Refund Eligibility</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  We offer refunds for digital products under specific circumstances outlined in this policy. 
                  Refund requests must be submitted within 30 days of purchase.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">2. Conditions for Refunds</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Refunds are available if the product does not function as described or contains significant defects.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">3. Non-Refundable Items</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                  Certain items are not eligible for refunds, including customized products, products that have been fully utilized, 
                  or products purchased more than 30 days ago.
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-4">
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Digital products downloaded and fully utilized</li>
                    <li>Customized or personalized products</li>
                    <li>Products purchased more than 30 days ago</li>
                    <li>Products used in violation of our terms</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">4. Refund Process</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
                  <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Contact our support team with your purchase details</li>
                    <li>Provide a detailed explanation of the issue</li>
                    <li>Allow up to 5 business days for review</li>
                    <li>Receive refund confirmation or alternative solution</li>
                  </ol>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">5. Processing Time</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
                  qui ratione voluptatem sequi nesciunt. Approved refunds will be processed within 7-10 business days. 
                  The refund will be credited to the original payment method used for the purchase.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">6. Partial Refunds</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                  In some cases, partial refunds may be offered based on usage or specific circumstances.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">7. Contact for Refunds</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To request a refund or ask questions about our refund policy, please contact us:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mt-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Email:</strong> hello@cortexmai.com<br />
                    <strong>Support Portal:</strong> Available 24/7<br />
                    <strong>Response Time:</strong> Within 24 hours
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}