import React, { useState } from 'react'
import Square from './Square'
import "./Board.css"
const Board = () => {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         squares : Array(9).fill(null) // fill 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채움. 
    //     }
    // }; 

    //Getter : 가져올 값 squares / Setter : 셋팅할 값 setSquares
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) => {
      const newSquares = squares.slice();
      newSquares[i] = 'X';
      setSquares(newSquares);
    }

    const renderSquare = (i) => {
        return <Square value={squares[i]}
         onClick={() => handleClick(i) } />
    }
 
  
    return (
      <div>
        <div className='status'>Next Player: X,O</div>
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
      </div>
    )
  }
  export default Board;

