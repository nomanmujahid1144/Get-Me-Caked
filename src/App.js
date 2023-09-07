import React ,{ useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HeroSection } from "./components/major-components/HeroSection";
import { SignIn } from "./components/major-components/SignIn"
import { SignUp } from "./components/major-components/SignUp"
import { Agevalidation } from "./components/major-components/AgeConformation"
import { ResetPassword } from "./components/major-components/ResetPassword"
import { ConformPassword } from "./components/major-components/Conform_Password"
import { AllProducts } from "./components/major-components/AllProducts"
import { SingleProduct } from "./components/major-components/SingleProduct"
import { Checkout } from "./components/major-components/Checkout"
import { Account } from "./components/major-components/Account"
import { Blogs } from "./components/major-components/Blogs"
import { OrderDetail } from "./components/major-components/OrderDetail"
import { AboutUs } from "./components/major-components/AboutUs";
import { FAQPage } from "./components/major-components/Faq";
import { ContactUS } from "./components/major-components/ContactUs";
import { Delivery } from "./components/major-components/Delivery";
import Layout from "./components/layout/Layout";
//--------------Noty CSS----------------------
import "./assets/sass/app.scss";
import "./components/fontawesomeIcons"
import { BlogDetails } from "./components/minor-components/BlogDetails";
import { Notifications } from "./components/major-components/Notification";
import AgeVerification from "./components/minor-components/AgeVerification";

export function App() {

  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = (age) => {
    // Perform the age verification logic here
    if (age === true) {
      setIsVerified(true);
    } else {
      alert('You must be at least 20 years old to use this application.');
    }
  };

  return (
    <div>
      {<AgeVerification onVerify={handleVerification} />}
      <Layout>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/brand/:brandName" element={<SingleProduct />} />
          <Route path="/order/:orderid" element={<OrderDetail />} />
          <Route path="/age-verification" element={<Agevalidation />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/accounts" element={<Account />} />
          <Route path="/confirm-password/:token" element={<ConformPassword />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact-us" element={<ContactUS />} />
        </Routes>
      </Layout>
    </div>
  );

}
