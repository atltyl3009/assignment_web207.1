import React from 'react'
import {Link} from "react-router-dom"
const NavAdmin = () => {
    return (
        <>
           <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-info "
            >
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/admincate'}>
                      <span data-feather="file" />
                      Danh mục
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/admin'}>
                      <span data-feather="file" />
                      Sản phẩm
                    </Link>
                  </li>
             
                
                 
              
                
            
                </ul>
           
              </div>
            </nav>
            
        </>
    )
}

export default NavAdmin
