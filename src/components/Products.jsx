import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  console.log("Product ID", id);
  return <h1>Products</h1>;
};

export default Products;
