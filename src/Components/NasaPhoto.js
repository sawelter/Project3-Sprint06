function NasaPhoto (props) {
    return(
        <div className="nasa-photo-wrapper">
            <h1>{props.photo.title}</h1>
            <h3>by {props.photo.copyright} on {props.photo.date}</h3>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;