import React from 'react';

class Results extends React.Component {

  constructor(props) {
    super(props);

    this.barData = {
      0: {
        width: 10,
        color: 'red'
      },

      1: {
        width: 10,
        color: 'red'
      },

      2: {
        width: 20,
        color: 'red'
      },

      3: {
        width: 30,
        color: 'red'
      },

      4: {
        width: 40,
        color: 'red'
      },

      5: {
        width: 50,
        color: 'orange'
      },

      6: {
        width: 60,
        color: 'orange'
      },

      7: {
        width: 70,
        color: 'orange'
      },

      8: {
        width: 80,
        color: 'green'
      },

      9: {
        width: 90,
        color: 'green'
      },

      10: {
        width: 100,
        color: 'green'
      }
    }
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

  render() {


    return (
      <article className='results-box'>
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
