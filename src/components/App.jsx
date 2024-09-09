import React from "react";
import Header from "./Header";
import ExpandableSection from "./ExpandableSection";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header />
      <ExpandableSection />

      <div className="container">
        <h2>Welcome to the React App!</h2>
        <p>This is the main content of the app.</p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
