import React from 'react';
import { Link } from 'react-router-dom';

const menus = [
  {
    id: 'menu01',
    name: 'Home',
    path: '/'
  },
  {
    id: 'menu02',
    name: 'About',
    path: '/about'
  },
  {
    id: 'menu03',
    name: 'User',
    path: '/users'
  },
]

const Navbar = () => {
  return (  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {menus.map(menu => (
              <Link key={menu.id} to={menu.path} tag="a" className="nav-item nav-link">{menu.name}</Link>
            ))}
          </div>
        </div>
      </nav>
  );
}
 
export default Navbar;