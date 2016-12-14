import React from 'react';
import { barData, metricLongNames } from '../../util/helpers';
import DetailHeader from './detail_header';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.barData = barData;
    this.metricLongNames = metricLongNames;
    this.getScoreBars = this.getScoreBars.bind(this);
    this.scoreBar = this.scoreBar.bind(this);
    this.costToScore = this.costToScore.bind(this);
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
          <span className='detail-color-bar-label'>{ this.barData[baseScore].label }</span>
        </span>
      </span>
    );
  }

  costToScore(costOfLiving) {
    return Math.ceil((3500 - costOfLiving) / 320);
  }

  getScoreBars() {
    const scores = this.props.cityDetails.scores;

    const bars = [];
    let val = null;
    let longName = null;

    Object.keys(scores).forEach( (key, index) => {

      longName = this.metricLongNames[key];

      if (key === 'cost_of_living') {
        val = this.scoreBar(this.costToScore(scores[key]));
      } else {
        val = this.scoreBar(scores[key]);
      }

      bars.push(
        <div className='detail-chart-element'>
          <span className='detail-chart-label'>{ longName }</span>
            { val }
        </div>
      );
    });

    return bars;
  }



  render() {

    return (
      <section className='detail-modal'>
        <DetailHeader
          cityName={this.props.cityDetails.city_name}
          regionName={this.props.cityDetails.region_name}
        />
        <section className='detail-chart'>
          {this.getScoreBars()}
        </section>
      </section>
    );

  }
}

export default Detail;
