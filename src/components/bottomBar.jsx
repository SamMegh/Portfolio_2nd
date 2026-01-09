import { useEffect, useState } from "react";

function BottomBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex justify-between p-5">
      {/* Time & Date */}
      <div className="text-[10px] space-y-1">
        <div className="flex gap-10">
          <span>Time</span>
          <span className="font-bold">{time.toLocaleTimeString()}</span>
        </div>
        <div className="flex gap-10">
          <span>Date</span>
          <span className="font-bold">{time.toDateString()}</span>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-5 tracking-[4px]">
          <li><a href="/">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Let’s Talk</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default BottomBar;
