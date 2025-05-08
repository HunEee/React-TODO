// import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate,useParams,Link } from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
// import FooterComponent from './FooterComponent'
import './TodoApp.css'

export default function TodoApp(){
    return(
        <div className="TodoApp">

            <BrowserRouter>
                <HeaderComponent />

                <Routes>
                     <Route path='/' element={<LoginComponent />} /> 
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<ListTodosComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />
                   
                    <Route path='*' element={<ErrorComponent />}></Route>             
                </Routes>

                {/* <FooterComponent /> */}
            </BrowserRouter>

            
        </div>
    )
}

