function MiddleSection({ className }) {
  return (
<div className={`${className} h-full flex items-center justify-center overflow-hidden`}>
      
      {/* Text */}
      <div className="flex flex-col items-center font-bold leading-[0.85] text-[clamp(6rem,12vw,14rem)]">
        <h1>S</h1>
        <h1>A</h1>
        <h1>M</h1>
      </div>

      {/* Image */}
      <div className="w-1/3 max-w-xs">
        <img
          className="rounded-full w-full aspect-square object-cover"
          src="./Profile Photo.jpg"
          alt="profile"
        />
      </div>

    </div>
  );
}
export default MiddleSection;