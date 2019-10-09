import React, { useState } from "react";
import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";

const App = (): JSX.Element => {
    const [state, setState] = useState();

    return (
        <div className="app">
            <h1>Add Book</h1>
            <Button text="Submit" />
            <Input
                label="Author"
                onChange={() => {}}
                value="hello"
                name="author"
            />
        </div>
    );
};

export default App;
