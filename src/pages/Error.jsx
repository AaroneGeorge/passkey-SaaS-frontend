import React from "react";
import errorGif from "../assets/bg.gif";
import styles from "../style";
import { Navbar } from "../components";

const ErrorPage = () => {
  return (
    <div>
      <div
        className={`${styles.paddingX} ${styles.flexCenter}`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <section className="bg-white py-10">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 text-center">
              <div
                className="bg-cover bg-center h-96"
                style={{ backgroundImage: `url(${errorGif})` }}
              >
                <h1 className="text-6xl text-center">404</h1>
              </div>
              <div className="mt-8">
                <h3 className="text-4xl">Looks Like You're Lost</h3>
                <p className="mt-4">
                  The page you are looking for is not available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
