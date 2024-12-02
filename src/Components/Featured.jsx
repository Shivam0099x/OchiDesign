
import { motion } from "framer-motion";
import { useState } from "react";

const Featured = () => {
  const [isHovering, setisHovering] = useState([false, false, false, false]);
  return (
    <div className="w-full py-[3vw]">
      <div className="w-full px-[5vw] border-b-2 border-zinc-700 pb-[1vw]">
        <h1 className="text-[4vw] tracking-tight">Featured Projects</h1>
      </div>
      <div className="px-[5.3vw] mb-10">
      
        <div className="cards w-full flex gap-10">
          <div className="w-1/2 ">
          <h3 className="text-lg mt-10 mb-3">
               <span className="h-2 w-2 mr-2 rounded-full bg-white inline-block"></span>
               CARDBOARD SPACESHIP
         </h3>
          <div
            onMouseEnter={() => {
              setisHovering([true, false, false, false]);
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false, false]);
            }}
            className="cardcontainer1  w-full h-[36vw] relative  "
          >
            <h1 className="absolute flex left-[70%] top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none tracking-tight overflow-hidden text-[#CDEA68]">
              {"CARDBOARD ".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering[0] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block tracking-tight"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card w-full h-full rounded-lg  overflow-hidden"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1731859412834-45fe7b9e81c2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="card1"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <button className="px-3 py-2 border-[1px] mt-3 border-zinc-300 text-white rounded-3xl mx-2">
                 BRANDED TEMPLATE
        </button>
        <button className="px-3 py-2 border-[1px] mt-3 border-zinc-300 text-white rounded-3xl mx-2">
                 SELF DECK
        </button>
        <button className="px-3 py-2 border-[1px] mt-3 border-zinc-300 text-white rounded-3xl mx-2">
                 SOCIAL MEDIA TEMPLATES
        </button>
          </div>
          </div>
          <div className="w-1/2 h-[36vw]">
          <h3 className="text-lg mt-10 mb-3">
               <span className="h-2 w-2 mr-2 rounded-full bg-white inline-block"></span>
               AH2 & MATT HORN
         </h3>
          <div
            onMouseEnter={() => {
              setisHovering([false, true, false]);
              console.log("span1");
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false]);
            }}
            className="cardcontainer2 w-full h-full relative"
          >
            <h1 className="absolute right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none tracking-tight font-['FoundersGrotesk'] flex text-[#CDEA68] overflow-hidden">
              {"AH2 & MATT HORN".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering[1] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card card w-full h-full rounded-lg overflow-hidden"
            >
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt="card1"
                className="w-full h-full object-cover object-bottom"
              />
            </motion.div>
            <button className="px-3 py-2 border-[1px] mt-3 border-zinc-300 text-white rounded-3xl mx-2">
                 PITCH DECK
        </button>
          </div>
          </div>
          
        </div>
       
      </div>
      <div className="px-[5.3vw] mb-10">
      
        <div className="cards w-full flex gap-10">
          <div className="w-1/2 ">
          <h3 className="text-lg mt-10 mb-3">
               <span className="h-2 w-2 mr-2 rounded-full bg-white inline-block"></span>
               FYDE
         </h3>
          <div
            onMouseEnter={() => {
              setisHovering([true, false, false, false]);
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false, false]);
            }}
            className="cardcontainer1  w-full h-[36vw] relative  "
          >
            <h1 className="absolute flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none tracking-tight overflow-hidden text-[#CDEA68]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering[0] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card w-full h-full rounded-lg  overflow-hidden"
            >
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="card1"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <button className="px-3 py-2 border-[1px] mt-3 border-zinc-300 text-white rounded-3xl mx-2">
                 AUDIT
        </button>
        <button className="px-3 py-2 border-[1px] mt-3 border-zinc-300 text-white rounded-3xl mx-2">
                 COPYWRITING
        </button>
        <button className="px-3 py-2 border-[1px] mt-3 border-zinc-300 text-white rounded-3xl mx-2">
                 SELF DECK
        </button>
        <button className="px-3 py-2 border-[1px] mt-3 border-zinc-300 text-white rounded-3xl mx-2">
                 SLIDE DESIGN
        </button>
          </div>
          </div>
          <div className="w-1/2 h-[36vw]">
          <h3 className="text-lg mt-10 mb-3">
               <span className="h-2 w-2 mr-2 rounded-full bg-white inline-block"></span>
               VISE
         </h3>
          <div
            onMouseEnter={() => {
              setisHovering([false, true, false]);
              console.log("span1");
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false]);
            }}
            className="cardcontainer2 w-full h-full relative"
          >
            <h1 className="absolute right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none tracking-tight font-['FoundersGrotesk'] flex text-[#CDEA68] overflow-hidden">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering[1] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card card w-full h-full rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1670404160620-a3a86428560e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="card1"
                className="w-full h-full object-cover object-bottom"
              />
            </motion.div>
            <button className="px-3 py-2 border-[1px] mt-3 border-zinc-300 text-white rounded-3xl mx-2">
                 AGENCY 
        </button>
            <button className="px-3 py-2 border-[1px] mt-3 border-zinc-300 text-white rounded-3xl mx-2">
                 COMPANY PRESENTATION 
        </button>
          </div>
          </div>
          
        </div>
       
      </div>
      <div className="px-[5.3vw] mb-10">
      
        <div className="cards w-full flex gap-10">
          <div className="w-1/2 ">
          <h3 className="text-lg mt-10 mb-3">
               <span className="h-2 w-2 mr-2 rounded-full bg-white inline-block"></span>
               TRAWA
         </h3>
          <div
            onMouseEnter={() => {
              setisHovering([true, false, false, false]);
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false, false]);
            }}
            className="cardcontainer1  w-full h-[36vw] relative  "
          >
            <h1 className="absolute flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none tracking-tight overflow-hidden text-[#CDEA68]">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering[0] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card w-full h-full rounded-lg  overflow-hidden"
            >
              <img
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt="card1"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <button className="px-3 py-2 border-[1px] mt-3 border-zinc-300 text-white rounded-3xl mx-2">
                 BRAND IDENTITY
        </button>
        <button className="px-3 py-2 border-[1px] mt-3 border-zinc-300 text-white rounded-3xl mx-2">
                 DESIGN RESEARCH
        </button>
        <button className="px-3 py-2 border-[1px] mt-3 border-zinc-300 text-white rounded-3xl mx-2">
                 INVESTOR DECK
        </button>
        
          </div>
          </div>
          <div className="w-1/2 h-[36vw]">
          <h3 className="text-lg mt-10 mb-3">
               <span className="h-2 w-2 mr-2 rounded-full bg-white inline-block"></span>
               PREMIUM BLEND
         </h3>
          <div
            onMouseEnter={() => {
              setisHovering([false, true, false]);
              console.log("span1");
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false]);
            }}
            className="cardcontainer2 w-full h-full relative"
          >
            <h1 className="absolute right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none tracking-tight font-['FoundersGrotesk'] flex text-[#CDEA68] overflow-hidden">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering[1] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card card w-full h-full rounded-lg overflow-hidden"
            >
              <img
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt="card1"
                className="w-full h-full object-cover object-bottom"
              />
            </motion.div>
            <button className="px-3 py-2 border-[1px] mt-3 border-zinc-300 text-white rounded-3xl mx-2">
                 BRANDED TEMPLATE 
        </button>
            
          </div>
          </div>
          
        </div>
       
      </div>
      
    </div>
  );
};

export default Featured;
