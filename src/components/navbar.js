import { Link } from "react-router-dom";

const Navbar = (props) => {

  const reloadHome = () => {
    // window.location.reload();
  }

  return (
    <header>
      <div className="nav-container flex items-center justify-center h-12 w-full bg-yellow-500 px-2">
        <div className="nav-elements w-full flex items-center justify-start">
          <Link className="flex items-center justify-center" to={"/"} onClick={reloadHome}>
            <img className="w-14 px-2 py-1" src="./rocket.png"></img>
            <h3 className="text-2xl">RocketX</h3>
          </Link>
        </div>
        <Link to={"/register"}><button className="w-20 h-9 bg-red-800 hover:bg-red-700 mx-1 rounded-md text-gray-50 flex justify-center items-center">Register</button></Link>
        <Link to={"/login"}><button className="w-20 h-9 bg-red-800 hover:bg-red-700 mx-1 rounded-md text-gray-50 flex justify-center items-center">Login</button></Link>
      </div>
    </header>
  );
}

export default Navbar;