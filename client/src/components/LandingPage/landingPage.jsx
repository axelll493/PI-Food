import './landingPage.css'
import { Link } from 'react-router-dom';


export default function landingPage () { 
  
  return (
    <div className='imagen'>
            <div className="Container"> 
            <h1 className='title'>CookAPP</h1>
            <Link to="/home">
                    <button className="btn-material">WELCOME!</button>
            </Link>      
        </div>
    </div>
  )
}
