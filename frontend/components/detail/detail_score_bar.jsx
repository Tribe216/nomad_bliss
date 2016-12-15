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
        <span className='detail-bar-colored'
          style={{
            width: this.barData[baseScore].width + '%',
            backgroundColor: this.barData[baseScore].color,
            color: this.barData[baseScore].color
          }}>
        </span>
      </span>
    );

  }
}

export default DetailScoreBar;
