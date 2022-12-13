import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faPhone, faUsers, faUser, faHeart } from '@fortawesome/free-solid-svg-icons'
import '../../pages/home/home.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Store } from '../../Store';

const Header = () => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem("userInfo");

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, wish } = state;

    const signouthandler = () => {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("cartItems");
        alert("You have successfully logged out!");
        navigate("/login");
    }

    return (
        <div className='header-row'>
            <div className="header-top">
                <span><FontAwesomeIcon icon={faPhone} />+66/0000000</span>
                <span><FontAwesomeIcon icon={faEnvelope} />oaksk6820@gmail.com</span>
            </div>
            <div className="header-menu">
                <div className="header-logo">
                    <Link to="/"><h2 className="header-logo-title">Local Deals</h2></Link>
                </div>
                <div className="header-nav">
                    <NavLink to="/" activeclassname="active">Home</NavLink>
                    <NavLink to="/shop" activeclassname="active">Shop</NavLink>
                    <NavLink to="/sellers" activeclassname="active">Sellers</NavLink>
                </div>
                <div className="header-action">
                    {userInfo && (
                        <>
                            <Link to="/account"><FontAwesomeIcon icon={faUser} /></Link>
                            <Link to="/follow"><FontAwesomeIcon icon={faUsers} />{wish.wishItems.length ? (<span className='header-cart-badge'>{wish.wishItems.length}</span>) : (<span className='header-cart-badge'>0</span>)}</Link>
                            <Link to="/wishList"><FontAwesomeIcon icon={faHeart} /></Link>
                        </>

                    )}
                    {
                        userInfo ? (<span className='logout' onClick={signouthandler}><FontAwesomeIcon icon={faLock} />Logout</span>) : (<Link to="/login"><FontAwesomeIcon icon={faLock} />Login</Link>)
                    }
                </div>
            </div>
        </div >
    )
}

export default Header
