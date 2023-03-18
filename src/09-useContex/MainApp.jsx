import { Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"


export const MainApp = () => {
  return (
    <>
    <h1>MainApp</h1>
    <hr />
    
    <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/login" element={< LoginPage />} />
        <Route path="/about" element={< AboutPage />} />

      </Routes>


    </>
  )
}
