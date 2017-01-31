import React from 'react';
import { barData, metricLongNames } from '../../util/helpers.js';

class ReviewScoreBar extends React.Component {
  constructor(props) {
    super(props);
    this.barData = barData;
    this.metricLongNames = metricLongNames;
    this.scoreBar = this.scoreBar.bind(this);

    this.handleClickRemove = this.handleClickRemove.bind(this);
    this.handleClickUpdate = this.handleClickUpdate.bind(this);
    this.handleClickNew = this.handleClickNew.bind(this);
  }

  handleClickRemove() {
    this.props.removeReview(this.props.review.review_id);
  }

  handleClickUpdate(score) {
    let reviewData = {review: {score: score} };
    this.props.editReview(this.props.review.review_id, reviewData);
  }

  handleClickNew(score) {

    const newHash = {
      review: {
        city_id: this.props.cityId,
        metric_name: this.props.metricName,
        score: score
      }
    };
    this.props.newReview(newHash);
  }

  scoreBar(existing) {
    let scoreParts = [];

    if (existing) {
      scoreParts.push(
        <button
          className={'review-score-part review-remove-relevant'} key={0}
          onClick = { this.handleClickRemove }
        >X</button>
      );
    } else {
      scoreParts.push(
        <button
          className={'review-score-part review-remove-inactive'} key={0}
        >X</button>
      );
    }



    for (let i=1; i <=10; i++){
      if (existing) {
        let onClass = "";
        if ( i <= this.props.review.score) {
          if (this.props.review.score <= 4) {
            onClass = "part-of-score-bar-red";
          } else if (this.props.review.score === 5 || this.props.review.score === 6) {
            onClass = "part-of-score-bar-orange";
          } else {
            onClass = "part-of-score-bar-green";
          }
        }    

      scoreParts.push(
          <button
            className={'review-score-part review-has-review part' + i + ' ' + onClass} key={i}
            onClick = { this.handleClickUpdate.bind(this, i) }
          >
          { i }
        </button>);
      } else {
        scoreParts.push(
          <button
            className={'review-score-part review-no-review part' + i} key={i}
            onClick = { this.handleClickNew.bind(this, i) }
          >
          { i }
        </button>);
      }


    }
    return (<div className='review-chart-part-wrapper'>{scoreParts}</div>);
  }

  render() {
    const longName = this.metricLongNames[this.props.metricName];

    return   (

      <div className='review-chart-element'>
        <span className='review-chart-label'>{ longName }</span>
          { this.scoreBar((this.props.review !== undefined)) }
      </div>
    );

  }
}

export default ReviewScoreBar;
