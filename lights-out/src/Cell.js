import React, {Component} from 'react'
import "./Cell.css"


/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

/**
 * I added 2 extra props to the class:
 * xCord - the X coordinate of the cell
 * yCord - the Y coordinate of the cell
 * 
 * These were added so that I can run the function flipCellsAroundMe 
 *       with the appropriate args
 */

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    // call up to the board to flip cells around this cell
    let {xCord, yCord} = this.props;
    this.props.flipCellsAroundMe(`${xCord}-${yCord}`);
  }

  render() {
    let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");

    return (
        <td className={classes} onClick={this.handleClick} />
    )
  }
}


export default Cell;