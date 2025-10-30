import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap animate-fade-in">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 animate-slide-up">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Premium Digital Products for Modern Businesses
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Discover automation scripts, AI workflows, and marketing tools designed to accelerate your growth. 
              Built by experts, trusted by thousands of businesses worldwide.
            </p>

            <div className="flex flex-col items-start space-x-3 space-y-3 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/products"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Browse Products
              </a>
              <a
                href="/about"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-indigo-500 transition-colors duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="hidden lg:block animate-bounce-slow">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
