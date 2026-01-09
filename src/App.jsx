import BlogSection from "./components/blogSection";
import BottomBar from "./components/bottomBar"
import SplashCursor from "./components/cursor"
import UpperSection from "./components/upperSection"

function App() {
  return (
    <div className="h-screen flex flex-col">
      <section className="h-[10%]">
      <UpperSection />
      </section>
      <section className="h-[80%] overflow-hidden">

      <BlogSection/>
      </section>
      <section className="h-[10%] overflow-hidden">
      <BottomBar className="mt-auto" />
      </section>
    </div>
  );
}

export default App;
