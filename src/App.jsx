
import UserSignin from './pages/user/UserSignin.jsx'
import UserSignup from './pages/user/UserSignup.jsx'
import UserHomePage from './pages/user/UserHomePage.jsx'
import UserPurchases from './pages/user/UserPurchase.jsx'
// ...existing code...

import AdminSignin from './pages/admin/AdminSignin.jsx'
import AdminSignup from './pages/admin/AdminSignup.jsx'
import AdminHomePage from './pages/admin/AdminHomePage.jsx'
import AdminCreateCourse from './pages/admin/AdminCreateCourse.jsx'
import AdminEditCourse from './pages/admin/AdminEditCourse.jsx'

// ...rest of the code remains the same


import StartPage from  './pages/StartPage.jsx'

import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/admin/signup" element={<AdminSignup />} />
            <Route path="/admin/signin" element={<AdminSignin />} />
            <Route path="/admin/Home" element={<AdminHomePage />} />
            <Route path="/admin/create-course" element={<AdminCreateCourse />} />
            <Route path="/admin/edit-course/:id" element={<AdminEditCourse />} />

            <Route path="/user/Signup" element={<UserSignup/>} />
            <Route path="/user/Signin" element={<UserSignin/>} />
            <Route path="/user/home" element={<UserHomePage />} />
            <Route path="/user/purchases" element={<UserPurchases />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

