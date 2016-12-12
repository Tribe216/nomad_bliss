export const fetchCities = (searchFilters) => {
  return $.ajax({
    type: "GET",
    url: "api/cities",
    data: searchFilters
  });
};
