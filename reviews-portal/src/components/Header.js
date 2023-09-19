import { Link, useNavigate } from 'react-router-dom';

function Header () {
  return (
    <div className='bg-light'>
      <div className="container d-flex flex-md-nowrap navbar navbar-expand-lg navbar-light">
        <ul class="navbar-nav mr-4">
          <li class="nav-item px-1">
            <a class="nav-link" href="#0">Books</a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#0">Games</a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#0">Films</a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#0">Comics</a>
          </li>
        </ul>
            <div className="input-group">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        </div>
        <div className='d-flex ml-2 align-items-center'>
          <Link to="/signup" class="btn-sm btn-link">SignUp</Link>
          <Link href='#0' class="btn-sm btn-link">LogIn</Link>
          <img src="./img/user.svg" alt="..." class="img-thumbnail rounded-circle" style={{ width: 42,  height: 42 }}/>
        </div>
      </div>
    </div>
  );
}

export default Header;