import React from "react";
import { footerLinks , assets} from "../assets/assets";
const Footer = () => {
 return (
    <footer className="bg-primary/40 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT — big column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <img src={assets.logo} alt="eFresh" className="w-9 h-9" />
              <h2 className="text-2xl font-bold text-green-700">eFresh</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Your trusted grocery partner delivering the freshest products,
              best deals and seamless shopping experience right to your doorstep.
            </p>
          </div>

          {/* RIGHT — group of the remaining three columns */}
          <div className="lg:col-span-8 flex">
            {/* ml-auto pushes this inner block to the extreme right of the grid cell */}
            <div className="flex gap-12 flex-wrap lg:flex-nowrap ml-auto">
              {footerLinks.map((col, index) => (
                <div key={index} className="min-w-[10rem]">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {col.title}
                  </h3>
                  <ul className="space-y-2">
                    {col.links.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.url}
                          className="text-green-700 hover:text-green-600 transition"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom small strip */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} eFresh — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
