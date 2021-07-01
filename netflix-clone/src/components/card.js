import {useState} from 'react';

const Card = ({movie}) => {
    const [isShown, setIsShown] = useState(null);
    return (
        <div className="card"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >

        {!isShown && (<video className="video">
            <source src={movie.thumbnail} type="video/mp4"/>
        </video>)}
        {isShown && (
        <>
        <video className="video" autoPlay={true} loop>
            <source src={movie.thumbnail} type="video/mp4"/>
        </video>
        <div className="info-box">
            <p>{movie.title} ({movie.year})</p>
        </div>
        </>
        )}

        </div>
    )
}

export default Card;