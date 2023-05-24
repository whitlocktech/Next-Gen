import './card.styles.scss'

const Card = ({post, onClick}) => {
    const { title, author, content, } = post
    return (
        <div className="Card" >
            <h3 className='cardTitle'>{title}</h3>
            <p className='cardSubtitle'>{author}</p>
            <p className='cardText'>{content}</p>
        </div>
    )
}

export default Card