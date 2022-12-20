import styled from 'styled-components'

const StyledPhotoContent = styled.div`

    .nasa-photo {
        display: flex;
        flex-direction: row;
    
        img {
            width: 47%;
        }

        .nasa-photo-text {
            width: 47%;
        }
    }

    .nasa-photo-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;  
    }

    .nasa-photo-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
    }

    .nasa-photo-wrapper p {
        width: 60%;
    }

    img {
        width: 60%;
        margin: 2%;
    }

    h1 {
        margin: 2%;
        font-size: 2rem;
    }

    h3 {
        font-size:  1.2rem;
    }

    p {
        text-align:left;
        margin: 2%;
        line-height: 1.3;
    }
`;


function NasaPhoto(props) {
    return (
        <StyledPhotoContent className="nasa-photo-wrapper">
            <h1>{props.photo.title}</h1>
            <h3>by {props.photo.copyright} on {props.photo.date}</h3>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
        </StyledPhotoContent>
    )
}

export default NasaPhoto;