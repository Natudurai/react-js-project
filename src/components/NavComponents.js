import '../assests/styles/nav.css'
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'

function Login()
{
    return(
        <div style={{
            marginLeft: '50px',
            marginTop: '150px',
            backgroundColor: 'purple ',
            color: 'white',
            padding: '100px',
            width: '450px',
            borderRadius: '10px'
        }}>
            <h2>Sign In</h2>
            <form>
                <label>Username:
                    <input type="text" />
                </label><br></br>
                <br></br>
                <label>Password:
                    <input type="password" />
                </label>
            </form><br></br>
             <button>Sign In</button>
             <br></br>
             <br></br>
             <href>Forgot password?</href>
            
        </div>
    )
}
function Home()
{
    return(
        <div >
<h1 style={{color:'purple'}}>Welcome to E-kart</h1>
<br></br>
<h2 style={{color:'purple'}}>Wonder what your customer really wants? Ask. Don’t tell.</h2>
        </div>
    )
}
function  Register()
{
    return(
        <div style={{
            marginLeft: '100px',
            marginTop: '200px',
            backgroundColor: 'purple',
            color: 'white',
            padding: '50px',
            width: '500px',
            borderRadius: '10px'}}>
             <h3>Sign Up</h3>
            <form>
                <label>FirstName:
                    <input type="text" />
                </label>
                <br></br>
                <br></br>
                <label>Email :
                    <input type="text" />
                </label>
                <br></br>
                <br></br>
                <label>PhoneNo:
                    <input type="text" />
                </label>
            </form><br></br>
            <button>Register</button>
        </div>
    )
}
function Navbar()
{
    return (
        <header>
        <Router>

            <nav>
                <ul>
                    <li ><Link to='/' className='link'>HOME</Link></li>
                    <li ><Link to='/login' className='link'>LOGIN</Link></li>
                    <li ><Link to='/register'className='link'>REGISTER</Link></li>

                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/register' element={<Register/>} />
            </Routes>
        </Router>
        </header>
    )
}
export default Navbar;