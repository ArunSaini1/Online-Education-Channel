import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Layout/Header/Header'
import Courses from './components/Courses/Courses'
import Footer from './components/Layout/Header/Footer/Footer'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import ForgetPassword from './components/Auth/ForgetPassword'
import ResetPassword from './components/Auth/ResetPassword'
import Contact from './components/Contact/Contact'
import Request from './components/Request/Request'
import About from './components/About/About'
import Subscribe from './components/Subscribe/Subscribe'
import NotFound from './components/Layout/Header/NotFound/NotFound'
import PaymentSuccess from '../src/components/Subscribe/PaymentSuccess'
import PaymentFail from '../src/components/Subscribe/PaymentFail'
import CoursePage from './components/CoursePage/CoursePage'
import Profile from './components/Profile/Profile'
import ChangePassword from './components/Profile/ChangePassword'
import UpdateProfile from './components/Profile/UpdateProfile'
import Dashboard from './components/Admin/DashBoard/Dashboard'
import CreateCourse from './components/Admin/CreateCourse/CreateCourse'
import AdminCourses from './components/Admin/CreateCourse/AdminCourses'
import Users from './components/Admin/CreateCourse/Users'
import DashBoard from './components/Admin/DashBoard/Dashboard'

export default function App() {
  function app(){
    window.addEventListener('contextmenu',e=>{
      e.preventDefault();
    });
  }
  return (
    <>
            <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/request' element={<Request/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/changepassword' element={<ChangePassword/>} />
        <Route path='/updateprofile' element={<UpdateProfile/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/course/:id' element={<CoursePage/>} />
        <Route path='/forgetpassword' element={<ForgetPassword/>} />
        <Route path='/resetpassword/:token' element={<ResetPassword/>} />
        <Route path='/subscribe' element={<Subscribe/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
        <Route path='/paymentfail' element={<PaymentFail/>} />
        {/* // Admin Routes */}
        <Route path='/admin/dashboard' element={<DashBoard/>} />
        <Route path='/admin/createcourse' element={<CreateCourse/>} />
        <Route path='/admin/courses' element={<AdminCourses/>} />
        <Route path='/admin/users' element={<Users/>} />
      </Routes>
      <Footer/>
    </>
  )
}
