import { Link } from 'react-router-dom';


const Menu = () => (
    <div class="menu">
    <div class="menu-container">
            <Link to="/" ><a class="menu-opt" >Home</a></Link>
            <Link to="/locations" ><a class="menu-opt" >Locations</a></Link>
            <Link to="/offers"><a class="menu-opt" >Offers</a></Link>
            <Link to="/plans"><a class="menu-opt" >Sign Up/In</a></Link>
         
      </div>
    </div>
  );

  export default Menu;