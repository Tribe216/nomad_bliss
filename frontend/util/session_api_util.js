export const signup = (formData) => {
  return $.ajax({
    type: "POST",
    url: "api/users",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};

// export const login = (user) => {
//   return $.ajax({
//     type: "POST",
//     url: "api/session",
//     data: user
//   });
// };

export const logout = () => {
  return $.ajax({
  type: "DELETE",
  url: "api/session"
  });
};

export const login = (formData) => {
  return $.ajax({
    type: "POST",
    url: "api/session",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};
