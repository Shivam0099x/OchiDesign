/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div className=" w-full h-[50vw] px-[5vw] py-[6.5vw] flex border-t-[1px] border-zinc-600 ">
      <div className="w-1/2 relative h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="uppercase text-[6vw] leading-[6vw] mt-5 tracking-tight">Eye-</h1>
          <h1 className="uppercase text-[6vw] leading-[6vw]">Opening</h1>
        </div>
        <h1 className="text-[2.4vw] absolute bottom-16">Ochi.</h1>
      </div>
      <div className="w-1/2 overflow-hidden">
        <div className="heading">
          <h1 className="uppercase text-[6vw] leading-[6vw] tracking-tight mt-5 ">
            Presentations
          </h1>
        </div>
        <div className="links text-[1.1vw] mt-[2vw] flex flex-col gap-1">
          <a className="inline-block underline " href="#">
            Facebook
          </a>
          <a className="inline-block underline" href="#">
            Instagram
          </a>
          <a className="inline-block underline" href="#">
            Twitter
          </a>
        </div>
        <div className="links2 flex w-full h-full leading-[2.5vw] py-[6vw] text-[1.1vw]">
          <div className="w-1/2 flex flex-col gap-1">
            <a className="inline-block underline" href="">
              202-1965 W 4th Ave Vancouver,
            </a>
            <a className="inline-block underline" href="">
              Canada 30
            </a>
            <a className="inline-block underline" href="">
              Chukarina St Lviv,
            </a>
            <a className="inline-block underline" href="">
              Ukraine
            </a>
          </div>

          <div className="w-1/2 leading-[2.5vw] flex gap-10">
          <div className="flex flex-col gap-1">
          <a className="inline-block underline" href="">
              Home
            </a>
            <a className="inline-block underline" href="">
              Services
            </a>
            <a className="inline-block underline" href="">
              Our Work
            </a>
            <a className="inline-block underline" href="">
              About Us
            </a>
          </div>
          <div className="flex flex-col gap-1">
          <a className="inline-block underline" href="">
              Insights
            </a>
            <a className="inline-block underline" href="">
              Contact Us
            </a>
          </div>
           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;