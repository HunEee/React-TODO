// import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate,useParams,Link } from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import TodoComponent from './TodoComponent'
import AuthProvider,{useAuth} from './security/AuthContext'
//import FooterComponent from './FooterComponent'
import './TodoApp.css'

// 인증되었을 때만 화면이 보이도록 하는 로직
//  {children}은 다른 컴포넌트를 뜻함
function AuthenticatedRoute({children}){
    const authContext = useAuth()
    if(authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
}

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />

                    <Routes>
                        <Route path='/' element={<LoginComponent />} /> 
                        <Route path='/login' element={<LoginComponent />} />
                        
                        <Route path='/welcome/:username' 
                               element={<AuthenticatedRoute>
                                            <WelcomeComponent />
                                        </AuthenticatedRoute> } />
                        <Route path='/todos' 
                               element={<AuthenticatedRoute>
                                            <ListTodosComponent />
                                        </AuthenticatedRoute>} />
                        <Route path='/todo/:id' 
                               element={<AuthenticatedRoute>
                                            <TodoComponent />
                                        </AuthenticatedRoute>} />                                     
                        <Route path='/logout' 
                               element={<AuthenticatedRoute>
                                            <LogoutComponent />
                                        </AuthenticatedRoute>} />
                    
                        <Route path='*' element={<ErrorComponent />}></Route>             
                    </Routes>

                    {/* <FooterComponent /> */}
                </BrowserRouter>
            </AuthProvider>

            
        </div>
    )
}

