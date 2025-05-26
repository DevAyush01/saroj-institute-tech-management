import { Outlet } from "react-router-dom"
<<<<<<< HEAD
=======
import  Header  from "../components/Header"
>>>>>>> 2e5b361c199a8588131481fc5f17906499c3433a
import Footer from "../components/Footer"
import Header from "../components/Header"

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
