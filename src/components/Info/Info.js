import React from 'react';
import "./Info.css";

function Info() {
    return (
        <div info="true" className="info">
            <table>
                <thead>
                    <tr>
                        <th>Player1</th>
                        <th>Player2</th>
                        <th>Tie</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>5</td>
                        <td>7</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Info;