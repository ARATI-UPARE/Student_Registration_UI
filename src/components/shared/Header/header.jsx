import { React } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import PeopleIcon from '@material-ui/icons/People';
 
 function Header(props){
    return(
        <div>
          <Navbar expand="lg" variant="dark" bg="danger"style={{ fixed:"top",backgroundColor:"red",display:"flex",height:"90px",width:"3000px"}}>
            <Nav.Link href="/" style={{color:"black",fontSize:"30px"}}>WELCOME TO STUDENT REGISTRATION</Nav.Link>
            <Nav.Link href="/studentdata" style={{color:"black",marginLeft:"1000px",fontSize:"20px"}}> Students</Nav.Link>
            < PeopleIcon  style={{ fontSize:"50" }}/>
          </Navbar>    
        </div>
    );
}
export default Header;
