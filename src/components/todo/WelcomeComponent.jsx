import {useParams,Link } from 'react-router-dom'

export default function WelcomeComponent(){
    const {username} = useParams() // 객체를 직접 받는 대신 객체의 값을 받음
    // console.log(params.username)
    console.log(username)
    return(

        <div className='welcomeComponent'>
            <h1>Welcome {username}</h1>
            <div className="Welcome">
                Manage Your todos - <Link to='/todos'>Go here</Link>
            </div>
        </div>
    )
}