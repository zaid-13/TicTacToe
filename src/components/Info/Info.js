import React, { useEffect, useState } from 'react';
import "./Info.css";

function Info({ winner, setWinner }) {

    console.log("from info component: ", winner)

    const [infoData, setInfoData] = useState({
        player1: 0,
        player2: 0,
        tie: 0
    });


    useEffect(() => {
        let p1 = infoData.player1;
        let p2 = infoData.player2;
        let tie = infoData.tie;

        console.log("p1 and p2", p1, p2)

        console.log("winner is true in info")
        if (winner) {
            if (winner.winner === "player1") {
                p1++;
            } else if (winner.winner === "player2") {
                p2++;
            } else {
                tie++;
            }
        }
        const obj = { ...infoData, player1: p1, player2: p2, tie }
        setInfoData(obj)
    }, [winner]);

    return (
        <div info="true" className="info">
            <table>
                <thead>
                    <tr>
                        <th>Player 1</th>
                        <th>Player 2</th>
                        <th>Tie</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{infoData.player1}</td>
                        <td>{infoData.player2}</td>
                        <td>{infoData.tie}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Info;