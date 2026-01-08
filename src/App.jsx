import ElectricBorder from "./components/card"

function App() {


  return (
    <div>
      <h1>Hello, World!</h1>
   <ElectricBorder
  color="#00ffff"
  speed={1}
  chaos={0.1}
  borderRadius={16}
>
  <div>
    <p style={{ margin: '6px 0 0', width: "10vw", opacity: 0.8 }}>
      A glowing, animated border wrapper.
    </p>
  </div>
</ElectricBorder>
    </div>
  )
}

export default App
