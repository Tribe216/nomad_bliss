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
          className={'review-score-part remove-review'} key={0}
          onClick = { this.handleClickRemove }
        >X</button>
      );
    } else {
      scoreParts.push(
        <button
          className={'review-score-part remove-review'} key={0}
        >' '</button>
      );
    }



    for (let i=1; i <=10; i++){
      if (existing) {
        let divStyle = {};
        if (this.props.review.score === i ) {
          divStyle = {
            fontWeight: 'bold'
          };
        } else {
          divStyle = {
            color: 'gray'
          };
        }

        scoreParts.push(
          <button
            className={'review-score-part part' + i} key={i}
            onClick = { this.handleClickUpdate.bind(this, i) }
            style={divStyle}
          >
          { i }
        </button>);
      } else {
        scoreParts.push(
          <button
            className={'review-score-part part' + i} key={i}
            onClick = { this.handleClickNew.bind(this, i) }
          >
          { i }
        </button>);
      }


    }
    return (<span className='review-bar-bg'>{scoreParts}</span>);
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
