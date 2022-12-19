function NasaPhoto (props) {
    return(
        <div className="nasa-photo-wrapper">
            <h1>{props.photo.title}</h1>
            <h3>by {props.photo.copyright} on {props.photo.date}</h3>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
        </div>
    )

    return(
        <div className="nasa-photo">
            <img src={props.photo.hdurl} />
            <div className="nasa-photo-text">
                <h1>{props.photo.title}</h1>
                <h3>by {props.photo.copyright} on {props.photo.date}</h3>
                <p>{props.photo.explanation}</p>
            </div>
        </div>
    )
}

export default NasaPhoto;