import {useEffect, useState} from 'react'

function Eyeballs() {
    const [rotate,setRotate] = useState(0)

    useEffect(() => {
           window.addEventListener("mousemove",(e)=>{
            let clientX = e.clientX;
            let clientY = e.clientY;

            let deltaX = clientX - window.innerWidth/2;
            let deltaY = clientY - window.innerHeight/2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) ;
            setRotate(angle - 180)
 
           })
    },[]);
  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className="h-full w-full relative bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-200 flex justify-center items-center">
            <div className="w-2/3 relative h-2/3 rounded-full bg-zinc-900 ">
            <span className='z-5 font-semibold text-lg absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>Play</span>
            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-6 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                 
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
            </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-200 flex justify-center items-center">
          <div className="w-2/3 relative flex justify-center items-center h-2/3 rounded-full bg-zinc-900 ">
          <span className='z-5 font-semibold text-lg absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>Play</span>
          <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-6 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyeballs;
