import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Chat from "../components/Chat"

export default function Layout() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Chat />
      <Footer />
    </>)
}