const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0">

          {/* Social Media Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a
                href="https://www.instagram.com/english_my_adventure"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <p className="mb-2"><strong>Phone:</strong> +62 853-5389-0080</p>
            <p className="mb-2"><strong>Email:</strong> syifa3596@gmail.com</p>
            <p><strong>Address:</strong> Jl. Badak Putih, Pelabuhanratu, Indonesia</p>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-[350px]">
            <h3 className="font-semibold text-lg mb-4">Our Location</h3>
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps?q=-6.984295470143709,106.55307213534006&z=17&output=embed"
                width="100%"
                height="200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 text-sm text-center text-gray-400">
          <p>&copy; 2025 EMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
