import React, { useState } from 'react';
import './App.css';
import './index.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import 'bulma/css/bulma.min.css';

function Page() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('A');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <ContactForm />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Page;
