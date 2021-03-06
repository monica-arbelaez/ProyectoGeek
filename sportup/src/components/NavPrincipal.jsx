import React from 'react'
import { Link } from 'react-router-dom';

export const NavPrincipal = ({navItem , Menu, NavLink, data}) => {
    const items = [...Menu];
    
    return (
        <>
            <nav className="my-2 my-md-0 mr-md-3 float-right navbar-nav">
                <ul>
                    {
                        items.map((intems, y)=>{
                            return (
                                    <li  key= {y+1}  className="mynav" ><Link key= {y+1} to="/" className="p-2 text-dark" >{intems}</Link></li>
                           )
                        })
                    }
                </ul>
            </nav>
        </>
        
        )
}
