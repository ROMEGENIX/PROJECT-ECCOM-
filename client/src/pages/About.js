import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            We are passionate about providing high-quality products and exceptional customer service. Our team is dedicated to curating a selection of items that meet our customers' needs and exceed their expectations. We believe that online shopping should be easy and stress-free, so we have designed our site to be user-friendly and intuitive. We are committed to building long-lasting relationships with our customers, and we strive to create an experience that is both enjoyable and reliable. Thank you for choosing [Insert your e-commerce site name], and we look forward to serving you!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
