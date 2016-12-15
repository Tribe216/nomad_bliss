import React from 'react';

class ReviewAggregate extends React.Component {
  constructor(props) {
    super(props);

    this.reviewEls = this.reviewEls.bind(this);
  }

  componentWillMount() {
    this.props.getCityReviews(this.props.cityId);
  }

  reviewEls() {
    const boxes = [];

    debugger

    this.props.cityReviews.forEach( (review, idx) => {
      return (<Review key={idx} review={review} />);
    });
  }


  render() {
    const baseScore = Math.ceil(this.props.score);

    return   (
      <section className='review-aggregate'>
        <h1 className='detail-bars-header'>My Scores</h1>
          {JSON.stringify(this.props)}
        </section>
    );
  }


}

export default ReviewAggregate;
