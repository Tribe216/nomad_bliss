import React from 'react';
import { barData } from '../../util/helpers';

class Results extends React.Component {

  constructor(props) {
    super(props);
    this.barData = barData;
    this.handleClick = this.handleClick.bind(this);
  }

  scoreBar(score) {
    const baseScore = Math.ceil(score);
    return   (
      <span className='results-chart-bar-bg'>
        <span className='results-chart-bar-colored'
          style={{
            width: this.barData[baseScore].width + '%',
            backgroundColor: this.barData[baseScore].color,
            color: this.barData[baseScore].color
          }}>
        </span>
      </span>
    );
  }

  handleClick(e) {
    this.props.updateCityDetail(this.props.result.id).then(
    this.props.openDetail);
  }

  render() {
    if (this.props.fake) {
      return (
        <article className='results-box fake' ></article>
      );
    }
    return (
      <article className='results-box' onClick={this.handleClick}>
          <div className='results-img-box'>
            <img className='results-bg-image' src={window.city_bg} />
          </div>
          <span className='results-header-ranked'>{this.props.rank}</span>
          <span className='results-header'>
            <span className='results-header-city'>{this.props.result.city_name}</span>
            <span className='results-header-region'>{this.props.result.region_name}</span>
          </span>
        <figure className='results-chart'>
          <div className='results-chart-row'>
            <span className='results-chart-label'>Overall</span>
              { this.scoreBar(this.props.result.scores.overall)}
          </div>

          <div className='results-chart-row'>
            <span className='results-chart-label'>Fun</span>
              { this.scoreBar(this.props.result.scores.fun)}
          </div>

          <div className='results-chart-row'>
            <span className='results-chart-label'>Safety</span>
              { this.scoreBar(this.props.result.scores.safety)}
          </div>

          <div className='results-chart-row'>
            <span className='results-chart-label'>Internet</span>
              { this.scoreBar(this.props.result.scores.internet)}
          </div>
        </figure>
      </article>
    );
  }
}


export default Results;
