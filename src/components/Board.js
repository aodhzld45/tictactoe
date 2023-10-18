import React, { Component } from 'react'
import Square from './Square'
import "./Board.css"
export default class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares : Array(9).fill(null), // fill 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채움. 
        }
    };
    renderSquare(i) {
        return <Square value={this.state.squares[i]} />
    }
 
  render() {
    return (
      <div>
        <div className='status'>Next Player: X,O</div>
        <div className='board-row'>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>
        <div className='board-row'>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
        </div>
        <div className='board-row'>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
