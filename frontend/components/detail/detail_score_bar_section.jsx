import React from 'react';
import DetailScoreBar from './detail_score_bar';
import { metricLongNames } from '../../util/helpers';

class DetailScoreBarSection extends React.Component {
  constructor(props) {
    super(props);
    this.metricLongNames = metricLongNames;
  }

  componentDidMount() {
    $(window.setTimeout( () => $('.detail-bar-colored').css({"width":"100%"}), 1))
  }

  costToScore(costOfLiving) {
    return Math.ceil((3500 - costOfLiving) / 320);
  }

  render() {
    const scores = this.props.scores;

    const bars = [];
    let bar = null;
    let longName = null;

    Object.keys(scores).forEach( (key, index) => {

      longName = this.metricLongNames[key];

      if (key === 'cost_of_living') {
        bar = <DetailScoreBar score={this.costToScore(scores[key])} />;
      } else {
        bar = <DetailScoreBar score={scores[key]} />;
      }

      bars.push(
        <div className='detail-chart-element'>
          <span className='detail-chart-label'>{ longName }</span>
            { bar }
        </div>
      );
    });

    return (
      <section className='detail-chart'>
        { bars }
      </section>
    );
  }
}

export default DetailScoreBarSection;
