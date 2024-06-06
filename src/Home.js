import React from "react";
import Footer from "./components/Footer";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{ minHeight: "75vh" }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Your health, our priority.
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Welcome to Wanbury, your trusted partner in healthcare solutions. Explore our range of pharmaceutical products and services designed to improve lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              {[
                {
                  title: "Quality Assurance",
                  description:
                    "At Wanbury, we adhere to the highest standards of quality assurance to ensure the safety and efficacy of our products.",
                  iconClass: "fas fa-check-circle",
                  bgColor: "bg-red-400",
                },
                {
                  title: "Innovative Solutions",
                  description:
                    "We are committed to delivering innovative healthcare solutions that address the evolving needs of patients and healthcare providers.",
                  iconClass: "fas fa-lightbulb",
                  bgColor: "bg-blue-400",
                },
                {
                  title: "Trusted Partner",
                  description:
                    "With a legacy of excellence, Wanbury is your trusted partner for reliable pharmaceutical products and services.",
                  iconClass: "fas fa-handshake",
                  bgColor: "bg-green-400",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
                >
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div
                        className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${feature.bgColor}`}
                      >
                        <i className={feature.iconClass}></i>
                      </div>
                      <h6 className="text-xl font-semibold">{feature.title}</h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-700">
                  <i className="fas fa-heartbeat text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Your health, our commitment
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  At Wanbury, we are dedicated to improving healthcare outcomes and enhancing patient well-being through our innovative products and services.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Explore our range of pharmaceutical solutions designed to meet the diverse needs of healthcare professionals and patients alike.
                </p>
                <Link to ="/products"      
                  className="font-bold text-gray-800 mt-8"
                >
                  Explore Our Products
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{ height: "95px", top: "-94px" }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Putting patients first
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      "At Wanbury, our mission is to put patients first in everything we do. We strive to provide accessible, high-quality healthcare solutions to improve the lives of individuals and communities worldwide."
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
