import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import PopupForm from "../components/PopUpForm"

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PopupForm/>
      <Header/>
      
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
