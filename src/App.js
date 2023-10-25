import './App.css';
import React, { useState } from 'react'
import Board from './components/Board';
// import Square from './components/Square';
function App() {

// Getter : 가져올 값 squares / Setter : 셋팅할 값 setSquares
// const [Getter, Setter] = useState(Array(9).fill(null));

// Props / State 
// 1. Props : 상위 부모 Component가 자식 Component 에게 전달하는 데이터
// 2. State : Component가 독립적으로 갖는 상태
// const [squares, setSquares] = useState(Array(9).fill(null));
// const [XisNext, setXisNext] = useState(true);

const [history, setHistory] = useState([{ squares : Array(9).fill(null) }])
const [XisNext, setXisNext] = useState(true);

/*  
  현재 몇 번째 스텝인지
  알 수 있는 State 생성하기
  이전으로 되돌아갔을 때 step을 기억하는 State
*/
const [stepNumber, setStepNumber] = useState(0);

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

  const current = history[stepNumber]; 
  const winner = calculateWinner(current.squares);


  // 승부를 결정하는걸 계산하는 함수
  // X, O 한줄(빙고)로 같으면 되기에, lines 배열에 경우의 수를 나열
  // for문 에서 만약 한줄로 같은 줄이 나오면 한 줄로 나열된 X 혹은 O를 return
  /*
      ex ['x','x','x',
          'null','x','null',
          'null','null','null']
    */
  // 승자를 표시해주는 함수

  let status;
  if (winner) {
    status = 'Winner:'+ winner;
  } else {
    status = `Next Player ${XisNext? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    /*
    처음에는 stepNumber가 0이기에
    history.slice(0,1) 이 된다
    */
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length - 1]; // 현재의 Current 값
    const newSquares = newCurrent.squares.slice();
    
    // 승자가 결정 났을 경우 게임 진행 Stop 추가
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = XisNext? 'X' : 'O';
    setHistory([...newHistory, { squares : newSquares }]);
    setXisNext(prev =>!prev);

    setStepNumber(newHistory.length);
  }

    // Jump to 함수
    // stepNumber를 업데이트하기 위해 jumpTO 함수 정의

    const jumpTo = (step) => {
      setStepNumber(step);
      // stepNumber가 짝수 일때마다 xisNext를 true로 설정
      setXisNext((step % 2) === 0);
      
     }

  /* 
       map() 함수를 이용해서
      history 배열에 있는 것들을
      하나씩 나열해주기
  */
  const moves = history.map((step, move) => {
    const desc = move ? 
    'Go to move #' + move : 
    'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  });



  return (
    <div className="game">
      <div className='game-board'>
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />

      </div>

      <div className='game-info'>
      <div className='status'>{status}</div>
      <ol>{moves}</ol>
      </div>

    </div>
  );
}

export default App;
