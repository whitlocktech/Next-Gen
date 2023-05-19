import './card.styles.css'

const Card = () => {
    return (
        <div className="Card" >
            <h3 className='cardTitle'>Card Title</h3>
            <h4 className='cardSubtitle'>Card Subtitle</h4>
            <p className='cardText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <p className='email'><a href='test@whitlocktech.net'>test@whitlocktech.net</a></p>
        </div>
    )
}

export default Card