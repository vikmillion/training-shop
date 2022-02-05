import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
      <header>
        <Link to="/">Main</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/Women">Women</Link>
        <Link to="/Men">Men</Link>
        
        </header>
        
            <Outlet />
            <footer>2022</footer>

    </>);
} 
export {Layout}