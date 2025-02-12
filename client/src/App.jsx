import Header from "./Header"
import Recept from "./Recept"
import Cart from "./Cart"
import Footer from "./Footer"
import { UserProvider } from "./UserContext";


function App() {
  

  return (
     <UserProvider>
      <>
        <Header />
        <Recept />
        <Cart />
        <Footer />
      </>
    </UserProvider>
      
  )
}

export default App
