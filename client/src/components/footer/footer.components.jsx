import './footer.styles.scss'

const year = new Date().getFullYear()

const Footer = () => { 
    return (
        <div className="footer" >
            <p className='footer'>&copy; {year} Whitlocktech</p>
        </div>
    )

}

export default Footer