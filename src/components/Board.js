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

    // Getter : 가져올 값 squares / Setter : 셋팅할 값 setSquares
    // const [Getter, Setter] = useState(Array(9).fill(null));
 
    // Props / State 
    // 1. Props : 상위 부모 Component가 자식 Component 에게 전달하는 데이터
    // 2. State : Component가 독립적으로 갖는 상태
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [XisNext, setXisNext] = useState(true);


    // 승부를 결정하는걸 계산하는 함수
    // X, O 한줄(빙고)로 같으면 되기에, lines 배열에 경우의 수를 나열
    // for문 에서 만약 한줄로 같은 줄이 나오면 한 줄로 나열된 X 혹은 O를 return
    /*
        ex ['x','x','x',
            'null','x','null',
            'null','null','null']
     */

    const calculateWinner = (squares) => {
      const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  // 승자를 표시해주는 함수
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner:'+ winner;
    } else {
      status = `Next Player ${XisNext? 'X' : 'O'}`;
    }

    // const [number, setNumber] = useState(0);

    const handleClick = (i) => {
      const newSquares = squares.slice();
      newSquares[i] = XisNext ? 'X' : 'O';
      setSquares(newSquares);
      // setXisNext(!XisNext);
      setXisNext(prev => !prev);

      // setNumber(number + 1 );
      // setNumber(number + 1 );
      // setNumber(prv => prv + 1)
      // setNumber(prv => prv + 1)

      // console.log('number : ' + number);

    }

    const renderSquare = (i) => {
        return <Square value={squares[i]}
         onClick={() => handleClick(i) } />
    }
 
  
    return (
      <div>
        <div className='status'>{status}</div>
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

