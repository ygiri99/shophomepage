import { UserContext, useContext } from '../Context/Context';
import { NavLink } from 'react-router-dom';
import { BsCartFill } from 'react-icons/bs';
import '../Style/header.css';

const Header = () => {

    const { state } = useContext(UserContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid px-5 mx-5">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 ms-lg-4">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle show" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">All Products</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Popular Items</a></li>
                                    <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className='d-flex '>
                            <NavLink to="/cart"><button className="btn btn-outline-dark  me-1" type="button"><BsCartFill />  Cart <span className="badge bg-dark text-white ms-2 rounded-pill">{state.cartQuantity}</span></button></NavLink>
                        </form>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Header;
