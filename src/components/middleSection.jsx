function MiddleSection() {
  return (
    <div className="h-full relative flex justify-center ">
      <div className="relative w-[40%]">
        <div className="absolute flex flex-col -top-12 text-[17vw] items-center font-bold leading-[0.8]">
           <h1>S</h1>
        <h1>A</h1>
        <h1>M</h1> 
        </div>
        
      </div>
      {/* image section */}
      <div className="w-[50%]">
        <img className="rounded-full w-full object-cover"  src="./Profile Photo.jpg" alt="profile" />
      </div>
    </div>
  )
}
export default MiddleSection