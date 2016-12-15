import React from 'react';
import Review from './review';

class ReviewAggregate extends React.Component {
  constructor(props) {
    super(props);

    this.reviewEls = this.reviewEls.bind(this);
  }

  componentWillMount() {
    this.props.getCityReviews(this.props.cityId);
  }

  reviewEls(reviews) {

    if (JSON.stringify(reviews) === "{}") {
       return (<div></div>);
    }
    const boxes = [];

    reviews.forEach( (review, idx) => {
      boxes.push(<Review key={idx} review={review} />);
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
