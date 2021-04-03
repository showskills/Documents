// import { Link } from "react-router-dom"
import { Link } from "react-router-dom";
import FlCard from "./components/FlCard";
import NavBar from "./components/NavBar";

const  Home = () => {
    return ( <div className='HomePage'>
        <NavBar/>
        
        <p style={{fontSize:'30px',fontWeight:'bold',color:'grey'}}>Home page</p>
        <FlCard/>
        <FlCard/>
        
    <Link to='/about' style={{fontSize:'30px',fontWeight:'bold',color:'grey'}}>About</Link>
    </div> );
}
 
export default Home;