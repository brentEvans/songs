import React from 'react';
import { connect } from 'react-redux';
import { file } from '@babel/types';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song</div>;
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title} <br></br>
                Duration: {song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = state => {
    // reach into state object and pull out only the property that we care about, return it as an object
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);


// create components as normal
// select some very specific components that need to receive some information or need to make changes to our state
// if we need to make changes to our state or receive info, we import the connect helper
// at the bottom of the file, we define a mapStateToProps function
//     pass that function as the first argument to connect
//     use the component that we care about as a second function call next to the connect call 