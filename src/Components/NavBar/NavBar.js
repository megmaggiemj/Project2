// import bootstrap from "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, Routes, Navigate } from "react-router-dom";
function NavBar() {
    return (


<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <Link className="navbar-brand" href="#" to="/">Home</Link>


    <Link className="navbar-brand" href="#" to='/MeetTheBelchers'>Meet the Belchers</Link>
    <Link className="navbar-brand" href="#" to='/about'>About</Link>

        {/* <Link className="nav-link active" href="#" to='/btcrsi/:value'>RSI</Link>
        <a className="nav-link active" aria-current="page" href="#">MACD</a>
        <a className="nav-link active" aria-current="page" href="#">Bitcoin</a> */}
  <div className="navbar-nav"> 
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  </div>

 </div>
</div>
 </nav>
  );
}
  export default NavBar
  
          {/* <Link to='/'>
          <h2>Bob's Burgers</h2>
        </Link>
        <Link to='/MeetTheBelchers'>
          Meet the Belchers
        </Link>
        <Link to='/about'>
          About
        </Link> */}