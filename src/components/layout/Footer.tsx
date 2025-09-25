import logo from "@/assets/images/logo.png"

const Footer = () => {
      return (
            <footer className="bg-gray-700 text-white">
                  {/* Container */}
                  <div className="container mx-auto px-6 py-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                              {/* Brand Section */}
                              <div className=" flex items-center gap-2">
                                    <img className=" w-14" src={logo} alt="" />
                                    <div className="">
                                          <h2 className="text-2xl font-bold">Swift Ship</h2>
                                          <p className=" text-sm text-blue-100">
                                                Fast, reliable & secure parcel delivery across the globe.
                                          </p>
                                    </div>
                              </div>

                              {/* Quick Links */}
                              <div>
                                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                                    <ul className="space-y-2">
                                          <li>
                                                <a href="/" className="hover:text-yellow-300 transition">
                                                      Home
                                                </a>
                                          </li>
                                          <li>
                                                <a href="/about" className="hover:text-yellow-300 transition">
                                                      About Us
                                                </a>
                                          </li>

                                          <li>
                                                <a href="/contact" className="hover:text-yellow-300 transition">
                                                      Contact
                                                </a>
                                          </li>
                                    </ul>
                              </div>

                              {/* Contact Info */}
                              <div>
                                    <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
                                    <p className="text-sm text-blue-100">support@swiftship.com</p>
                                    <p className="text-sm text-blue-100">+91 0000000000</p>
                                    {/* <p className="text-sm text-blue-100"></p> */}
                              </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-secondary/20 mt-8 pt-6 text-center text-sm text-blue-100">
                              © {new Date().getFullYear()} <span className="font-semibold">Swift Ship</span> — All rights reserved.
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;
