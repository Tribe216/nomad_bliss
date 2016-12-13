import React from 'react';
import { barData } from '../../util/helpers';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.barData = barData;

  }

  scoreBar(score) {
    const baseScore = Math.ceil(score);
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

  render() {
    if (!this.props.cityDetails) {
      return (<div></div>);
    }

    return (
      <div>
      <div className='results-chart-row'>
        <span className='results-chart-label'>Overall</span>
          { this.scoreBar(this.props.cityDetails.scores.overall)}
      </div>

      <div className='results-chart-row'>
        <span className='results-chart-label'>Fun</span>
          { this.scoreBar(this.props.cityDetails.scores.fun)}
      </div>

      <div className='results-chart-row'>
        <span className='results-chart-label'>Safety</span>
          { this.scoreBar(this.props.cityDetails.scores.safety)}
      </div>

      <div className='results-chart-row'>
        <span className='results-chart-label'>Internet</span>
          { this.scoreBar(this.props.cityDetails.scores.internet)}
      </div>
        <button onClick={this.props.closeModal}>Close Me </button>
      </div>
    );

  }
}

export default Detail;
