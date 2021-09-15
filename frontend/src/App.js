import './App.css';
import { useState } from "react";

function App() {
    const [ text, setText ] = useState( 'Paragraph' )

    return (
        <div>
            <h1>Users API with Axios</h1>
            <h3>"npm install axios"</h3>
            <p>{ text }</p>

            <button onClick={ () => {
                setText( 'New Text' )
            } }>New Text
            </button>

        </div>
    );
}

export default App;
