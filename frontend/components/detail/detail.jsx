import React from 'react';

import DetailHeader from './detail_header';
import DetailAggregate from './detail_aggregate';
import ReviewAggregateContainer from '../review/review_aggregate_container.jsx';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.turnOnReviewMode = this.props.turnOnReviewMode.bind(this);
    this.turnOffReviewMode = this.props.turnOffReviewMode.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
    this.buttonText = this.buttonText.bind(this);
    this.getMainComponent = this.getMainComponent.bind(this);
  }

  componentWillMount() {
    this.turnOffReviewMode();
  }

  toggleMode() {
     if (this.props.reviewMode) {
       this.turnOffReviewMode();
     } else {
       this.turnOnReviewMode();
     }
  }

  buttonText() {
    if (this.props.reviewMode) {
      return "Community Scores";
    } else {
      return "My Scores";
    }
  }

  getMainComponent() {
    if (this.props.reviewMode) {
      return (<ReviewAggregateContainer />);
    } else {
      return (<DetailAggregate cityDetails={this.props.cityDetails}/>);
    }
  }

  render() {
    return (
      <section className='detail-modal'>
        <DetailHeader
          cityName={this.props.cityDetails.city_name}
          regionName={this.props.cityDetails.region_name}
          imageUrl={this.props.cityDetails.image_url}
        />
        { this.getMainComponent() }
        <button className='detail-review-button' onClick={this.toggleMode}>{this.buttonText()}</button>
      </section>
    );

  }
}

export default Detail;
