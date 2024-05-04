import './header stule.css'
import logo from '../../images/logo.png';


export default () => {
    return (
        <header>
        <img src={logo} alt='logo react'></img>
        <nav> 
          <h1>VisVel</h1> 
          <h2>Login</h2>
        </nav>
        
      </header>
    )
}

