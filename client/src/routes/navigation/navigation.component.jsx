import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import './navigation.styles.scss'


const Navigation = () => { 
    return (
        <Fragment>
            <div className="navbar" >
                <div className='home'>
                    <span class="material-symbols-outlined"><Link to='/'>Home</Link></span>
                </div>
                <h1 className='navbarTitle'><Link to='/'>Next-Gen Gaming</Link></h1>
                <div className='login'>
                    <span class="material-symbols-outlined"><Link to='/login'>Login</Link></span>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation