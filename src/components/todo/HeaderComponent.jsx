import {Link } from 'react-router-dom'
//컨텍스트 추가 -> 인증하기 위해
//import{useContext} from 'react'
//import {AuthContext} from './security/AuthContext'
// 아래는 훅을 사용한 방법법
import { useAuth } from './security/AuthContext'

export default function HeaderComponent(){

    // 임포트한 AuthContext 참조 -> 직접 참조하는 방법
    // const authContext = useContext(AuthContext)

    //표준적으로 아래와 같이 훅을 사용
    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    function logout(){
        authContext.setAuthenticated(false)
    }

    //console.log(authContext)

    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                   <h3 className="navbar-brand ms-2 fs-2 fw-bold text-black" >TO-DO APP</h3>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {isAuthenticated &&<Link className="nav-link" to="/welcome/in28minutes">Home</Link>}             
                            </li>
                            <li className="nav-item fs-5">
                                {isAuthenticated &&<Link className="nav-link" to="/todos">Todos</Link>}
                                
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                            {!isAuthenticated &&<Link className="nav-link" to="/login">Login</Link>}
                        </li>
                        <li className="nav-item fs-5">
                            {isAuthenticated &&<Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}