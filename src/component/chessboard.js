import React from 'react';
import './chessboard.css';
const Chessboard=()=>{
    const initialBoard=[
        ['♖','♘','♗','♕','♔','♗','♘','♖'],
        ['♙','♙','♙','♙','♙','♙','♙','♙'],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['♟','♟','♟','♟','♟','♟','♟','♟'],
        ['♜','♞','♝','♛','♚','♝','♞','♜'],
    ];
    return(<table class="chessboard"><tbody>
        {initialBoard.map((row,rowIndex)=>(
            <tr key={rowIndex}>
                {row.map((piece,collIndex)=>{
                    const isBlack=(rowIndex+collIndex)%2===1;
                    return(
                        <td key={collIndex}className={isBlack?'black':'white'}>
                            {piece}
                        </td>
                    );
                })}
            </tr>
        ))}
        </tbody>
        </table>);
};
  export default Chessboard;      
        
        
