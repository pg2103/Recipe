import Pages from "./pages/Pages"
import Category from "./components/Category"
import { BrowserRouter } from "react-router-dom"
function App() {
  return( 
    <div>
      <h1>Home</h1>
      <BrowserRouter>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
  )
}

export default App
