import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer() {

  return (
    <footer className='container-fluid bg-dark'>
      <main>
        {/* Instagram */}
        <a href="https://www.instagram.com/lakshminarayanan_0/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className='text-white' icon={faInstagram} />
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/nana.ravi.1/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className='text-white' icon={faFacebook} />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/lakshminarayanan-r-8575b8238/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className='text-white' icon={faLinkedin} />
        </a>

     
        {/* GitHub */}
        <a href="https://github.com/lakshminarayanan0/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className='text-white' icon={faGithub} />
        </a>
        
      </main>
      
    </footer>
  );
}

export default Footer;
