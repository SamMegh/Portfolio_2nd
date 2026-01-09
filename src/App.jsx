import BlogSection from "./components/blogSection";
import BottomBar from "./components/bottomBar";
import SplashCursor from "./components/cursor";
import MiddleSection from "./components/middleSection";
import RightSection from "./components/rightSection";
import UpperSection from "./components/upperSection";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <section className="h-[10%]">
        <UpperSection />
      </section>
      <section className="flex-1 h-[80%] flex w-full">
  <BlogSection className="w-3/12 shrink-0  " />
  <MiddleSection className="w-6/12 shrink-0 " />
  <RightSection className="w-3/12 shrink-0 " />
</section>

      <section className="h-[10%] overflow-hidden">
        <BottomBar className="mt-auto" />
      </section>
    </div>
  );
}

export default App;
