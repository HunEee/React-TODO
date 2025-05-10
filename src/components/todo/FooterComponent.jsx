import{useContext} from 'react'
import { AuthContext } from "./security/AuthContext"

export default function FooterComponent(){

  const authContext = useContext(AuthContext)

  //console.log(`Footer component - ${authContext.number}`)
  

  return(
      <footer className="Footer">
        <div className="container">
              Your Footer
        </div>
      </footer>
  )
}