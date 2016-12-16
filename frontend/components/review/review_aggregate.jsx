import React from 'react';
import ReviewScoreBar from './review_score_bar';

class ReviewAggregate extends React.Component {
  constructor(props) {
    super(props);

    this.reviewEls = this.reviewEls.bind(this);
  }

  componentWillMount() {
    this.props.getCityReviews(this.props.cityId);
  }

  getReviewForMetric(metricName) {
    return this.props.cityReviews.find( (el) => { return el.metric_name === metricName; });
  }

  reviewEls(reviews) {

    if (JSON.stringify(reviews) === "{}") {
       return (<div></div>);
    }
    const boxes = [];

    this.props.allMetrics.forEach ( (metric, idx)  => {
      boxes.push(
        <ReviewScoreBar
          key={idx}
          metricName={metric}
          cityId={this.props.cityId}
          review={this.getReviewForMetric(metric)}
          newReview={this.props.submitNewReview}
          editReview={this.props.submitUpdatedReview}
          removeReview={this.props.removeReview}
        />);
    });

    reviews.forEach( (review, idx) => {

    });

    return boxes;
  }

  render() {
    const baseScore = Math.ceil(this.props.score);

    return   (
      <section className='review-aggregate'>
        <h1 className='detail-bars-header'>My Scores</h1>
          { this.reviewEls(this.props.cityReviews) }
        </section>
    );
  }


}

export default ReviewAggregate;
