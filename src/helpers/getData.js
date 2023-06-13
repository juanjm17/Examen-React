// const url = "https://fakestoreapi.com/products";


const getProducts = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(response.status + " " + response.statusText);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getProducts;
