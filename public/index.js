import React, { useState } from "react";
import ReactDOM from "react-dom";
import RadioButtonComponent from "../src";

function App() {
    const [state, setState] = useState(false);

    return<>
        <RadioButtonComponent
            state={state}
            setState={setState}
            size="sm"
        />
    </>
}



ReactDOM.render(<App />, document.getElementById("root"));