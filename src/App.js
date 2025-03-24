import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react"
import './App.css';


function App() {
  const location = useLocation()

  const [showHeaderFooter, setShowHeaderFooter] = useState(false)

  useEffect(() => {
    if (location.pathname === '/') {
      setShowHeaderFooter(false)
    } else {
      setShowHeaderFooter(true)
    }
  }, [location])

  return (
    <>
      {showHeaderFooter && <Header />}
      <Outlet />
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default App;

