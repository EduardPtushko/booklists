import React, { useState } from "react";
import Button from "../components/UI/Button";

const App = (): JSX.Element => {
    const [state, setState] = useState();

    return (
        <div>
            App
            <Button text="Submit" />
        </div>
    );
};

export default App;
