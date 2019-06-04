import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';


const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
};

export default App;




    // if you only specify a directory (and not a file), webpack automatically gives back the index.js
    // curly braces mean we're only importing a named export (rather than a default)