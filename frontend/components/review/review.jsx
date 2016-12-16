import React from 'react';
import { metricLongNames } from '../../util/helpers';
import ReviewScoreBarSection from './review_score_bar_section'

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  costToScore(costOfLiving) {
    return Math.ceil((3500 - costOfLiving) / 320);
  }

  render() {

    return (
      <section className='review-chart'>
        <ReviewScoreBarSection
      </section>
    );
  }
}

export default Review;
