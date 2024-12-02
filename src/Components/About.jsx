

const About = () => {
  return (
    <div className="w-full py-16 text-black rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68]">
      <h1 className="mx-16 text-[3.9vw] leading-[4vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to{" "}
        <span className="underline">
          {" "}
          raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
          peo­ple.
        </span>
      </h1>
      <div className="w-full mt-20 border-t-[1px] flex justify-between border-[#a1b562] ">
        <div className="w-[50vw] p-5 mx-10">What you can expect:</div>
        <div className="w-[50vw] flex justify-between">
          <div className="w-[50%] p-5">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="my-10">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="flex flex-col w-[50%] justify-center p-10">
            <a className="mx-20 mt-5 underline cursor-pointer font-semibold">
              Instagram
            </a>
            <a className="mx-20 my-2 underline cursor-pointer font-semibold">
              Facebook
            </a>
            <a className="mx-20 my-2 underline cursor-pointer font-semibold">
              LinkedIn
            </a>
            <a className="mx-20 my-2 underline cursor-pointer font-semibold">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-5 pt-10 border-t-[1px] flex justify-between border-[#a1b562] ">
        <div className="w-1/2 mx-10 ">
          <h1 className="text-7xl">Our Approach:</h1>
          <button className="px-9 py-5 bg-zinc-900 text-white rounded-full mt-8 mx-16 flex items-center justify-center ">Read More 
            <div className="w-3 h-3 mx-3 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="w-1/2 h-[59vh] mx-5 overflow-hidden rounded-3xl my-2 ">
          <img className="object-cover" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A developer sitting with his laptop" />
        </div>
      </div>
    </div>
  );
};

export default About;
