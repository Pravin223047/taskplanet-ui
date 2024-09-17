import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 mt-8 w-full">
      <div className="container mx-auto px-4 md:px-8 flex flex-col xl:flex-row gap-4 justify-between items-start xl:items-center">
        {/* Leads Section */}
        <div className="mb-6 xl:mb-0 max-w-md">
          <h2 className="text-2xl font-bold mb-2 text-teal-400">
            Interested in Joining Us?
          </h2>
          <p className="text-gray-300 mb-4">
            We are always open to discussing new tasks, creative ideas, or
            opportunities to be part of your vision. Get in touch with us to see
            how we can help you achieve your goals.
          </p>
          <a
            href="mailto:contact@example.com"
            className="text-teal-300 hover:text-teal-100 transition duration-200"
          >
            hr@triplewsols.com
          </a>
        </div>

        {/* Social Media Section */}
        <div className="text-left">
          <p className="text-lg font-semibold mb-4 text-teal-400">Follow Us</p>
          <div className="flex flex-wrap justify-start gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-teal-400 transition duration-200"
              aria-label="Facebook"
            >
              <FaFacebook size={28} className="mr-2 text-blue-600" />
              <span className="hidden md:inline">Facebook</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-teal-400 transition duration-200"
              aria-label="Twitter"
            >
              <FaTwitter size={28} className="mr-2 text-blue-400" />
              <span className="hidden md:inline">Twitter</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-teal-400 transition duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} className="mr-2 text-blue-700" />
              <span className="hidden md:inline">LinkedIn</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-teal-400 transition duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={28} className="mr-2 text-pink-600" />
              <span className="hidden md:inline">Instagram</span>
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-teal-400 transition duration-200"
              aria-label="Telegram"
            >
              <FaTelegram size={28} className="mr-2 text-blue-400" />
              <span className="hidden md:inline">Telegram</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-teal-400 transition duration-200"
              aria-label="YouTube"
            >
              <FaYoutube size={28} className="mr-2 text-red-600" />
              <span className="hidden md:inline">YouTube</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-4 mt-8">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Task Planet UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
