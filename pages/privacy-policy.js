import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - CortexM AI | Digital Products Marketplace</title>
        <meta
          name="description"
          content="Privacy Policy for CortexM AI digital products marketplace."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl dark:text-white">
              Privacy Policy
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
              Last updated: October 30, 2025
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">3. Information Sharing</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
                  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                  consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">4. Data Security</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
                  quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">5. Your Rights</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                  quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia 
                  deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">6. Cookies and Tracking</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio 
                  cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">7. Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
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