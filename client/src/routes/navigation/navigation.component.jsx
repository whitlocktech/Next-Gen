import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import './navigation.styles.scss'
import Footer from '../../components/footer/footer.components.jsx'


const Navigation = () => { 
    return (
        <Fragment>
            <div className="navbar" >
                <div className='nav-link'>
                    <Link to='/' className="nav-link">Home</Link>
                </div>
                <h1 className='navbarTitle'><Link to='/'>Next-Gen Gaming</Link></h1>
                <div className="nav-link">
                    <Link to='/map' className="nav-link">Map</Link>
                </div>
                <div className='nav-link'>
                    <Link to='/login' className="nav-link">Login</Link>
                </div>
            </div>
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default Navigation