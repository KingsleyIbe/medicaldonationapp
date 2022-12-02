import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="text-center p-10 bg-[#5c0e0e] text-[#fff]">
    <h2>Designed and Developed by Team Gold</h2>
    <Link to="/policy" className="underline"> Terms of Service and Privacy Policy</Link>
  </footer>
);

export default Footer;
