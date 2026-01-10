function MiddleSection({ className }) {
  return (
<div className={`${className} h-full flex items-center justify-start `}>
      
      {/* Text */}
      <div className="flex flex-col font-Anton items-center leading-none text-[clamp(4rem,32vh,34vh)]">
        <h1>S</h1>
        <h1>A</h1>
        <h1>M</h1>
      </div>

      {/* Image */}
      <section className="ml-2 relative ">
        <div className="w-full rounded-full overflow-hidden border-r-4 border-b-6 border-cyan-300 ">
        <img
          className=" min-w-full aspect-square object-cover"
          src="./profile.png"
          alt="profile"
        />
        
      </div>
      <div className="absolute rotate-34 text-cyan-300 font-Anton tracking-[6px] -bottom-4 text-6xl">
            Megh
        </div>
      </section>
      

    </div>
  );
}
export default MiddleSection;