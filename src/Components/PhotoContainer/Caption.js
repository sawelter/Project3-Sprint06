

const Caption = props => {
    // Takes in the Photo object from the API as a props
    const { photoInfo } = props;
    // Returns a string that has 
        // photo.title
        // photo.explanation
        // photo.date
        // photo.copyright

    return(
        <div>
            <h3>{photoInfo.title}</h3>
            <h4>by {photoInfo.copyright} on {photoInfo.date}</h4>
            <p>{photoInfo.explanation}</p>
        </div>
    )
}

export default Caption;