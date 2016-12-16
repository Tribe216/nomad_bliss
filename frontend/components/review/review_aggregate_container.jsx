import { connect } from 'react-redux';
import ReviewAggregate from './review_aggregate';
import {
  getCityReviews,
  submitNewReview,
  submitUpdatedReview,
  removeReview} from '../../actions/review_actions';

const mapStateToProps = (state) => {
  return {
    cityId: state.city_detail.id,
    cityReviews: state.reviews,
    allMetrics: Object.keys(state.city_detail.scores)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityReviews: (cityId) => dispatch(getCityReviews(cityId)),
    submitNewReview: (reviewData) => dispatch(submitNewReview(reviewData)),
    submitUpdatedReview: (reviewId, reviewData) => dispatch(submitUpdatedReview(reviewId, reviewData)),
    removeReview: (reviewId) => dispatch(removeReview(reviewId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewAggregate);
