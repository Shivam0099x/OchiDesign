import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  
  return (
    <div data-scroll
    data-scroll-section
    data-scroll-speed="-0.3" className="h-screen w-full bg-zinc-900 pt-1">
      <div className="text-structure mt-40 px-20 ">
        {["We Create", "Eye Opening", "Presentataions"].map((items, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit tracking-tight flex items-end">
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76,0,0.24,1]}} className="mr-5 w-[8vw] rounded-md h-[5.7vw] top-[14px] relative bg-center bg-cover bg-[url('https://imgs.search.brave.com/iY_rjFksTsMI2vzvRtIzHHukvbbIsCM-GP1ualJWYLY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly96ZW5w/cm9zcGVjdC1wcm9k/dWN0aW9uLnMzLmFt/YXpvbmF3cy5jb20v/dXBsb2Fkcy9waWN0/dXJlcy82NmU0OGI0/MzVlOTdiNjAwMDEx/YmY0NDEvcGljdHVy/ZQ')]">
                  </motion.div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] leading-[6.5vw] uppercase text-[8vw]">
                  {items}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 w-full mt-28 flex justify-between items-center py-5 px-20">
        {[
          "For Public And Private Companies",
          "From The First Pitch to IPO",
        ].map((items, index) => {
          return (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none"
            >
              {items}
            </p>
          );
        })}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 rounded-full border-[1px] border-zinc-400 font-light text-sm ">
            Start the Project
          </div>
          <div className="w-10 h-10 justify-center items-center flex border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
            <FaArrowUpLong />
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
