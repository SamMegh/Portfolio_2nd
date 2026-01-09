import BlogSection from "./components/blogSection";
import BottomBar from "./components/bottomBar"
import SplashCursor from "./components/cursor"
import UpperSection from "./components/upperSection"

function App() {
  return (
    <div className="h-screen flex flex-col">
      <UpperSection />
      <BlogSection/>
      <BottomBar className="mt-auto" />
    </div>
  );
}

export default App;
