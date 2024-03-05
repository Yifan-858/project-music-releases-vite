import PropTypes from "prop-types";
import { Fragment } from "react";

export const ArtistName = ({ artists }) =>{
    return (
        <Fragment>
        {artists.map((artist)=>(
            <p key={artist.id}>{artist.name}</p>
        ))}
        </Fragment>
    )
}

ArtistName.propTypes ={
    artists:PropTypes.array.isRequired
}