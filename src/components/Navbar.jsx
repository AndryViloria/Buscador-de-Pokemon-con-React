import { NavLink } from "react-router-dom";

const Navbar = () => {
    const setActive = ({ isActive }) => isActive ? 'active' : undefined

    return (
        <header>
            <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"></img>

            <nav>
                <NavLink to="/" className={setActive} end>Home</NavLink>
                <NavLink to="/pokemones" className={setActive}>Pokemones</NavLink>
            </nav>
        </header>
    )
}

export default Navbar