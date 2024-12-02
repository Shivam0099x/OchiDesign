import { motion } from "framer-motion";

function Marque() {
  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"], 
      transition: {
        x: {
          repeat: Infinity,
          ease: "linear",
          duration: 10, 
        },
      },
    },
  };

  return (
    <div data-scroll
    data-scroll-section
    data-scroll-speed="0.3" className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="overflow-hidden border-y-[1px] border-zinc-200">
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
        
          <h1 className="mx-10 text-[15vw] font-semibold leading-none uppercase font-sans-serif">
            We are OCHI
          </h1>
          <h1 className="mx-10 text-[15vw] font-semibold leading-none uppercase font-sans-serif">
            We are OCHI
          </h1>
          <h1 className="mx-10 text-[15vw] font-semibold leading-none uppercase font-sans-serif">
            We are OCHI
          </h1>
          <h1 className="mx-10 text-[15vw] font-semibold leading-none uppercase font-sans-serif">
            We are OCHI
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Marque;
