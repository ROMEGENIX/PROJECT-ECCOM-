import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Information We Collect -
            We may collect personal information such as your name, email address, phone number, shipping address, and billing information when you make a purchase on our site. We may also collect information about your browsing behavior, such as the pages you visit, the products you view, and the links you click.</p>
          <p>How We Use Your Information -
            We use your personal information to fulfill your orders, communicate with you about your purchases, and provide customer service. We may also use your information to improve our site, personalize your experience, and send you marketing communications that we believe may be of interest to you.</p>
          <p>Security -
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
          <p>Changes to This Policy -
We may update this Privacy Policy from time to time. If we make significant changes, we will notify you by email or by posting a notice on our website.</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
