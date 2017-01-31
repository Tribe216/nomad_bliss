import React from 'react';
import { barData } from '../../util/helpers.js';

class ResultsScoreBar extends React.Component {
  constructor(props) {
    super(props);
    this.barData = barData;
  }

  render() {
    const baseScore = Math.ceil(this.props.score);

    return   (
      <span className='results-bar-bg'>
        <span className='results-bar-colored-enclosure'
          style={{
            width: this.barData[baseScore].width + '%'
          }} >
          <span className='results-bar-colored'
            style={{
              backgroundColor: this.barData[baseScore].color,
              color: this.barData[baseScore].color
            }} >
          </span>
        </span>
      </span>
    );

  }
}

export default ResultsScoreBar;
