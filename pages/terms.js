import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - CortexM AI | Digital Products Marketplace</title>
        <meta
          name="description"
          content="Terms of Service for CortexM AI digital products marketplace."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl dark:text-white">
              Terms of Service
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
              Last updated: October 30, 2025
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  By accessing and using CortexM AI services, you agree to be bound by these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">2. Description of Service</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                  CortexM AI provides digital products and automation tools for businesses and creators.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">3. User Accounts</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                  You are responsible for maintaining the confidentiality of your account credentials.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">4. Payment and Billing</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
                  qui ratione voluptatem sequi nesciunt. All payments are processed securely through our payment providers. 
                  Prices are subject to change with notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">5. Intellectual Property</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                  All digital products remain the intellectual property of CortexM AI.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">6. Prohibited Uses</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
                  nisi ut aliquid ex ea commodi consequatur. You may not use our services for any illegal or unauthorized purpose. 
                  Violation of any terms will result in immediate termination of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                  vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. CortexM AI shall not be liable for any indirect, 
                  incidental, special, or consequential damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">8. Termination</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti. 
                  We reserve the right to terminate or suspend your account at any time for violation of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">9. Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mt-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Email:</strong> hello@cortexmai.com<br />
                    <strong>Address:</strong> 123 AI Street, Tech City, TC 12345
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