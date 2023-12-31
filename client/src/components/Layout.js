import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = ({ children, title, description, keywords, author }) => {
  
  const addedStyle = {backgroundColor:"#F9F6EE" ,minHeight: "70vh"}

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={addedStyle}>{children}</main>
      <ToastContainer />
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title:"Ecommerce app - shop Now",
  description:"mern stack project shopper Project",
  keywords:"men ,react,node,mongodb",
  author:"TechMirror"
}


export default Layout;
