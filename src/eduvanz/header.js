import React from 'react';
import {NavLink} from 'react-router-dom';


class Header extends React.Component {
    constructor(props)
    {
        super(props);
    }



    render() {
        return (
            <div className="header">
                <div className="navMenu">
                    <ul>
                        <li>
                            <NavLink to={"/home"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin"}> Admin</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/report"}> Report</NavLink>
                        </li>

                    </ul>
                </div>
            </div>

        )
    }
}


export default Header;