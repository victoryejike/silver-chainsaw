import Image from "next/image";
import React from "react";
import { services } from "../lib/data";

const Service = () => {
  return (
    <div>
      <p className="font-semibold text-sm text-primary py-2 px-3 bg-[#D2DCEF] w-34 rounded-lg text-center mx-auto">
        Service Offering
      </p>
      <p className="text-center font-bold text-4xl lg:text-[40px] pt-4">
        Mission Statement
      </p>
      <p className="text-base lg:text-lg pt-4 text-center lg:w-[720px] mx-auto">
        Our mission is to provide high-quality products and expert services
        tailored to meet the unique needs of our clients across various
        industries.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 pt-[130px] px-3 lg:px-[80px]">
        <div className="col-span-1 bg-[#EEF2F9] rounded-2xl py-[18.3px] px-3 lg:px-6 mb-3 lg:mb-0">
          <p className="font-bold text-[20px] pb-2.5">Service Offering</p>
          <>
            {services.map((item: { id: number; name: string }) => (
              <div
                key={item.id}
                className={`flex items-center ${
                  item.id === services.length ? "mb-0" : "mb-2.5"
                }`}
              >
                <div className="w-5 h-5 bg-[#D2DCEF] flex justify-center items-center rounded-sm mr-2.5">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <p className="text-base text-[#595E63] ">{item.name}</p>
              </div>
            ))}
          </>
        </div>
        <div className="col-span-1 object-cover flex justify-center">
          <Image src="/service.png" alt="service" height={554} width={700} />
        </div>
      </div>
    </div>
  );
};

export default Service;
