function UpperSection() {
  return (
    <div className="w-full ">
        <section className="w-full flex justify-between ">
        {/* contact and three heading */}
      <div className="w-[80%] p-5 flex">
        {/* contact section */}
        <section className="w-1/2">
          <div>
            <p className="text-[10px] select-none">
              Contact Me : <span className="font-bold select-all">90535-XXXXX</span>
            </p>
          </div>
        </section>
        {/* three heading of me */}
        <section className="w-1/2 ">
          <div>
            <ul className="flex gap-10 list-disc justify-start">
              <li>Web-Dev</li>
              <li className="text-[#5ce1e6]">Web-Dev</li>
              <li>Web-Dev</li>
            </ul>
          </div>
        </section>
      </div>
      <div>
        {/* logo section */}
        <div className=" w-20 mr-5 relative">
          <div className=" font-bold w-[90%] h-20 pb-3 rounded-b-xl absolute bg-[#5ce1e6] flex flex-col justify-end items-center ">
            <img className="rounded-full w-12" src="/logo.jpg" alt="Logo" />
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default UpperSection;
