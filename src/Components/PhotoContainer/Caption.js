

const Caption = props => {
    // Takes in the Photo object from the API as a prop
    const { photoInfo } = props;

    return(
        <div>
            <h3>{photoInfo.title}</h3>
            <h4>by {photoInfo.copyright} on {photoInfo.date}</h4>
            <p>{photoInfo.explanation}</p>
        </div>
    )
}

export default Caption;