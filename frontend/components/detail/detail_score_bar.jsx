import React from 'react';
import { barData } from '../../util/helpers.js';

class DetailScoreBar extends React.Component {
  constructor(props) {
    super(props);
    this.barData = barData;
  }

  render() {
    const baseScore = Math.ceil(this.props.score);

    return   (
      <span className='detail-bar-bg'>
        <span className='detail-bar-colored-enclosure'
          style={{
            width: this.barData[baseScore].width + '%'
          }} >
          <span className='detail-bar-colored'
            style={{
              backgroundColor: this.barData[baseScore].color,
              color: 'white'
            }} > <span className='detail-color-bar-label' >
              { this.barData[baseScore].label }</span>
          </span>
        </span>
      </span>
    );

  }
}

export default DetailScoreBar;
