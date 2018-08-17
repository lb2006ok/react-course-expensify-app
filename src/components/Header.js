import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
    <header>
        <h1>Expense</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>DashBorad</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help Expense</NavLink>
    </header>
)

export default Header;