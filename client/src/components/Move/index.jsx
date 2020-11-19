import React from 'react';
import './style.css';

const Move = (props) => {
    return(
        <tbody>
            <tr className="pokemon-move">
                <td><span className="move-type">{props.type}</span></td>
                <td><strong>{props.name}</strong></td>
                <td>Power: {props.power}</td>
            </tr>
        </tbody>
    );
}

export default Move;