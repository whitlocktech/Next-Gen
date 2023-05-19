import './navbar.styles.css'

const Navbar = () => { 
        return (
            <div className="navbar" >
                <div className='home'>
                    <span class="material-symbols-outlined"><a href="/">home</a></span>
                </div>
                <h1 className='navbarTitle'>Next-Gen Gaming</h1>
                <div className='login'>
                    <span class="material-symbols-outlined"><a href="/">login</a></span>
                </div>
            </div>
        )
    }

export default Navbar