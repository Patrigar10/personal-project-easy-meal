const callToApi = () => {
  return fetch("http://localhost:5000/api/recipes").then((response) =>
    response.json()
  );
};

export default callToApi;
