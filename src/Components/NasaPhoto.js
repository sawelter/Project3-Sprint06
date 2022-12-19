function NasaPhoto (props) {
    return(
        <div class="nasa-photo-wrapper">
            <h1>{props.title}</h1>
            <h3>by {props.copyright} on {props.date}</h3>
            <img src={props.hdurl} />
            <p>{props.explanation}</p>
        </div>
    )
}

export default NasaPhoto;