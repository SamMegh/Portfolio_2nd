function MiddleSection({ className }) {
  return (
<div className={`${className} h-full flex items-center justify-start `}>
      
      {/* Text */}
      <div className="flex flex-col items-center font-bold leading-[0.85] text-[clamp(4rem,15.5vw,16rem)]">
        <h1>S</h1>
        <h1>A</h1>
        <h1>M</h1>
      </div>

      {/* Image */}
      <section className="ml-2 relative ">
        <div className="w-[75%] rounded-full overflow-hidden border-r-4 border-b-6 border-cyan-300 ">
        <img
          className=" w-full aspect-square object-cover"
          src="./Profile Photo.jpg"
          alt="profile"
        />
        
      </div>
      <div className="absolute rotate-28 text-cyan-300 font-bold tracking-[4px] -bottom-4 text-6xl">
            Megh
        </div>
      </section>
      

    </div>
  );
}
export default MiddleSection;