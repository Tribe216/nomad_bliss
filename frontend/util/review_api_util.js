export const fetchReview = (reviewId) => {
  return $.ajax({
  type: "GET",
  url: `api/reviews/${reviewId}`
  });
};

export const newReview = (reviewData) => {
  return $.ajax({
  type: "POST",
  url: "api/reviews",
  data: reviewData
  });
};

export const updateReview = (reviewId, reviewData) => {
  return $.ajax({
  type: "PATCH",
  url: `api/reviews/${reviewId}`,
  data: reviewData
  });
};


export const deleteReview = (reviewId) => {
  return $.ajax({
  type: "DELETE",
  url: `api/reviews/${reviewId}`
  });
};
