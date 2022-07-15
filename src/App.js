import React, { useState } from 'react';
import Board from './components/Board/Board';
import Info from './components/Info/Info';

function App() {

    const [winner, setWinner] = useState("");

    return (
        <React.Fragment>
            <Board winner={winner} setWinner={setWinner} />
            <Info winner={winner} setWinner={setWinner} />
        </React.Fragment>
    )
}

export default App;