import React from "react";
import { features, assets} from "../assets/assets";


const BottomBanner = ({ image = assets.bottombanner, items = features }) => {
  const localSvgs = [
    // delivery truck
    <svg key="s1" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h13l4 4v6a1 1 0 0 1-1 1h-1a2 2 0 1 1-4 0H8a2 2 0 1 1-4 0H3V7z" />
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 0 0-2-2H3" />
    </svg>,
    // leaf
    <svg key="s2" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 5-4 9-9 9S3 17 3 12 7 3 12 3" />
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M14 8c2 2 3 4 3 4s-2 1-4 3" />
    </svg>,
    // price tag / coin
    <svg key="s3" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 10l-7-7a2 2 0 0 0-1.414-.586H8a2 2 0 0 0-2 2v3.586A2 2 0 0 0 6.586 9L14 16.414A2 2 0 0 0 15.414 17H18a2 2 0 0 0 2-2v-1.586A2 2 0 0 0 21 10z" />
      <circle cx="9.5" cy="8.5" r="0.5" />
    </svg>,
    // check / trusted
    <svg key="s4" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
    </svg>,
  ];

 return (
    <section className="w-full my-8">
      <div className="relative max-w-7xl mx-auto rounded-lg overflow-hidden">
        
        {/* Banner Image */}
        <img
          src={image}
          alt="banner"
          className="w-full h-[330px] md:h-[370px] object-cover"
        />

        {/* OVERLAY CONTAINER */}
        <div
          className="
            absolute inset-0 flex flex-col items-center
            md:items-end md:justify-center md:pr-20
            pt-4
          "
        >
          {/* content wrapper */}
          <div
            className="
              bg-black/35 backdrop-blur-sm rounded-xl 
              p-4 md:p-6 w-[90%] md:w-[380px]
              text-white
            "
          >
            <div className="flex flex-col gap-4">
              {items.map((it, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 bg-white/15 p-2 rounded-md flex items-center justify-center text-green-400">
                    {localSvgs[idx % localSvgs.length]}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{it.title}</h4>
                    <p className="text-xs text-white/80 mt-0.5">{it.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BottomBanner;
