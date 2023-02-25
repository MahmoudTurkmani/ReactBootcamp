import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  static defaultProps = {
    ncols: 3,
    nrows: 3,
    chanceLightStartsOn: 0.5,
  };

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };

    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for(let r = 0; r < this.props.nrows; r++){
      board.push([]);
      for(let c = 0; c < this.props.ncols; c++){
        board[r].push(Math.random() < this.props.chanceLightStartsOn ? true : false);
      }
    }

    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let newBoard = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        newBoard[y][x] = !newBoard[y][x];
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(y+1, x); // Top
    flipCell(y, x+1); // Right
    flipCell(y, x-1); // Left
    flipCell(y-1, x); // Down
    flipCell(y, x);   // Center

    // win when every cell is turned off
    // TODO: determine is the game has been won
    let newHasWon = true;
    for(let r = 0; r < nrows; r++){
      for(let c = 0; c < ncols; c++){
        if(newBoard[r][c] === false){
          newHasWon = false;
          break;
        }
      }
    }

    this.setState({board: newBoard, hasWon: newHasWon});
  }



  /** Render game board or winning message. */

  render() {

    // if the game is won, just show a winning msg & render nothing else

    // TODO
    let winScreen = (
      <div className="Board">
        <h1>You Win!</h1>
      </div>
    );

    // make table board

    // TODO
    let gameScreen = (
      <table className="Board">
        <thead>
          <tr>
            <th colSpan={this.props.ncols}>Lights Out</th>
          </tr>
        </thead>
        <tbody>
        {this.state.board.map((row, index) => {
          return <tr key={index}>
            {row.map((col, ind) => {
              return <Cell 
              key={`${index}${ind}`}
              flipCellsAroundMe={this.flipCellsAround}
              xCord={index}
              yCord={ind}
              isLit={col}
              />
            })}
          </tr>
        })}
        </tbody>
      </table>
    );

    return (
        this.state.hasWon ? winScreen : gameScreen
    );
  }
}


export default Board;
