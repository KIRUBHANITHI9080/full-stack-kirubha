import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul ClassName="navbar">
                <li ClassName="list"><Link to="/" ClassName="link">Parent</Link></li>
                <li ClassName="list"><Link to="/useState" ClassName="link">State</Link></li>
                <li ClassName="list"><Link to="" ClassName="link">Effect</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar