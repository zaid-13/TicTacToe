import React, { useEffect, useState } from 'react';
import "./Board.css";

function Board({ winner, setWinner }) {

    const winningConditions = {
        across: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
        down: [[1, 4, 7], [2, 5, 8], [3, 6, 9]],
        diagonal: [[1, 5, 9], [3, 5, 7]]
    };

    let player1 = true;
    let p1 = [];
    let p2 = [];
    let p1p2 = [];

    const cells = new Array(9).fill("-").map((_, i) => i + 1);

    const handleValue = (e) => {
        if (winner) return;
        if (e.target.classList.contains("x") || e.target.classList.contains("zero")) return;
        if (player1) {
            p1.push(e.target.id);
            e.target.classList.add("x");
        } else {
            p2.push(e.target.id);
            e.target.classList.add("zero");
        }
        checkWinner(player1 ? p1 : p2);
        p1p2 = p1.concat(p2);
        player1 = !player1;
        console.log({ p1, p2, p1p2 });
    }

    useEffect(() => {
        if (winner === "it's a draw!") return;
        if (winner) {
            winner.array.forEach((el) => {
                const cell = document.getElementById(el);
                cell.classList.add("win");
            })
        }
    }, [winner])

    const checkWinner = (arr) => {
        if (arr.length >= 5) setWinner("it's a draw!");

        for (let x in winningConditions) {
            for (let i = 0; i < winningConditions[x].length; i++) {
                const test = [];
                for (let j = 0; j < arr.length; j++) {
                    if (winningConditions[x][i].indexOf(parseInt(arr[j])) !== -1) {
                        test.push(true);
                    }
                    if (test.length >= 3) {
                        setWinner({
                            winner: player1 ? "player1" : "player2",
                            conditions: x,
                            index: i,
                            array: winningConditions[x][i]
                        })
                    }
                }
            }
        }
    }

    const handleRestart = () => {
        cells.forEach((el) => {
            const element = document.getElementById(el);
            element.classList.remove("x");
            element.classList.remove("zero");
            element.classList.remove("win");
        })
        console.log({ p1, p2 });
        p1 = [];
        p2 = [];
        setWinner("");
    }

    return (
        <div board="true" className="board">
            <div className="board-grid">
                {
                    cells.map(cell => {
                        return (
                            <div key={cell} id={cell} className="cell" onClick={(e) => handleValue(e)}></div>
                        )
                    })
                }
            </div>
            <button className="restart-button" onClick={handleRestart}>restart</button>
        </div>
    )
}

export default Board;