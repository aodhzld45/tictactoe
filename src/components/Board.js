import Square from './Square'
import "./Board.css"
const Board = ({squares, onClick}) => {
  
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         squares : Array(9).fill(null) // fill 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채움. 
    //     }
    // }; 

    
    const renderSquare = (i) => {
        return <Square value={squares[i]}
         onClick={() => onClick(i)} />
    }
 
  
    return (
      <div>
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

