"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      console.log(formData);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
    }
  };
  return (
    <section className="pb-8 pt-5 lg:pt-14 px-3 lg:px-11" id="contact">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-x-[134px] bg-[#EEF2F9] rounded-4xl w-full pt-5 lg:pt-21 pb-16">
        <div className=" w-full lg:w-5/12 pl-0 mx-4 lg:pl-[65px] lg:mx-auto">
          <p className="font-semibold text-sm text-primary py-2 px-3 bg-[#D2DCEF] w-34 text-center rounded-lg mx-auto lg:mx-0">
            Contact Us
          </p>
          <p className="text-center lg:text-left font-bold text-[24px] pt-4 text-[#222222]">
            Need SOM services?
          </p>
          <p className="text-sm lg:text-lg pt-2 text-center lg:text-left text-[#595E63] px-4 lg:px-0">
            We specialize in the supply of security and safety equipment,
            security training and design.
          </p>
          <p className="text-sm lg:text-lg pt-4 text-center lg:text-left text-[#595E63] px-4 lg:px-0">
            10 Oke Street Pedro, Gbagada, Lagos, Nigeria.
          </p>
          <p className="text-sm lg:text-lg pt-4 text-center lg:text-left text-[#595E63] px-4 lg:px-0">
            08037791851
          </p>
          <p className="text-sm lg:text-lg pt-4 text-center lg:text-left text-[#595E63] px-4 lg:px-0">
            © 2025 SOM. All rights reserved
          </p>
        </div>
        <div className="w-full lg:w-7/12 px-3 mr-0 lg:mr-12 pt-8 lg:pt-0">
          <form onSubmit={handleSubmit} id="contact">
            <div className="grid grid-cols-2 gap-x-4 w-full">
              <div className="col-span-1">
                <label className="block pb-2 text-[#595E63]">First Name</label>
                <input
                  placeholder="Enter name"
                  type="text"
                  value={formData.firstName}
                  name="firstName"
                  onChange={handleChange}
                  className="bg-white rounded-lg w-full px-4 py-3 placeholder:text-[#D9D9D9]"
                />
              </div>
              <div className="col-span-1">
                <label className="block pb-2 text-[#595E63]">Last Name</label>
                <input
                  placeholder="Enter name"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-white rounded-lg w-full px-4 py-3 placeholder:text-[#D9D9D9]"
                />
              </div>
            </div>
            <div className="w-full py-5">
              <label className="block pb-2 text-[#595E63]">Email</label>
              <input
                placeholder="Enter email address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white rounded-lg w-full px-4 py-3 placeholder:text-[#D9D9D9]"
              />
            </div>
            <div className="">
              <label className="block pb-2 text-[#595E63]">Message</label>
              <textarea
                placeholder="Write a short message"
                value={formData.message}
                onChange={handleChange}
                name="message"
                className="bg-white w-full rounded-lg px-4 py-3 placeholder:text-[#D9D9D9]"
              ></textarea>
            </div>
            <div>
              <button
                disabled={status === "sending"}
                className="py-4 w-full bg-primary rounded-lg mt-7 text-white cursor-pointer"
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>
              {status === "success" && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
