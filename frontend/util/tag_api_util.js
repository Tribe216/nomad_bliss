export const fetchTags = () => {
  return $.ajax({
    type: "GET",
    url: "api/tags"
  });
};
