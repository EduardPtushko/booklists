import React, { useState } from 'react';

const App = (): JSX.Element => {
    const [state, setState] = useState();

    return (
        <div className='app'>
            <h1>Add Book</h1>
        </div>
    );
};

export default App;
