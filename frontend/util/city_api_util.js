export const fetchCities = (searchFilters) => {
  return $.ajax({
    type: "GET",
    url: "api/cities",
    data: { searchFilters }
  });
};

export const fetchCityDetail = (cityId) => {
  return $.ajax({
    type: "GET",
    url: `api/cities/${cityId}`
  });
};
