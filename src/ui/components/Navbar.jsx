import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link className="navbar-brand" to="/">
                Bukin
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink className={(args) => `nav-item nav-link ${args.isActive ? 'active' : ''}`} to="/home">
                        Home
                    </NavLink>

                    <NavLink className={(args) => `nav-item nav-link ${args.isActive ? 'active' : ''}`} to="/crear">
                        Crea una página para tu negocio
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>Nico</span>
                    <button className='nav-item nav-link btn'>
                        Cerrar sesión
                    </button>
                </ul>
            </div>
        </nav>
    )
}