import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
    <footer className="footer mt-auto py-1 bg-dark bg-gradient text-white">
        <div className="container text-center">
        <p>&copy; {currentYear} - </p>
        <a href="#top">Inicio</a>
        </div>
    </footer>
    );
};

export default Footer;
