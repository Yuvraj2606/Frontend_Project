import {NavLink} from 'react-router-dom';

export const NavBar = ()=>{
    return(<>
        <NavLink to="/">Home</NavLink>
        {/* <br/> */}
        <NavLink to="/add">Add Note</NavLink>
        {/* <br/> */}
        <NavLink to="/view-all">View Notes</NavLink>
        {/* <br/> */}
        <NavLink to="/arrange">Arrange</NavLink>
        {/* <br/> */}
        <NavLink to="/search">Search</NavLink>
    </>);
}