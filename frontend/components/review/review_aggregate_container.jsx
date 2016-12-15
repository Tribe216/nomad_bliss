import { connect } from 'react-redux';
import ReviewAggregate from './review_aggregate';
import {
  getCityReviews,
  submitNewReview,
  submitUpdatedReview} from '../../actions/review_actions';

const mapStateToProps = (state) => {
  return {
    cityId: state.city_detail.id,
    cityReviews: state.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityReviews: (cityId) => dispatch(getCityReviews(cityId)),
    submitNewReview: (reviewData) => dispatch(submitNewReview(reviewData)),
    submitUpdatedReview: (reviewData) => dispatch(submitUpdatedReview(reviewData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewAggregate);
