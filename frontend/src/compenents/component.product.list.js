import { useEffect, useState } from "react";
import { deleteProductByID, getAllProducts } from "../services/product.services";
import { Link } from "react-router-dom";

export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await getAllProducts();
    setProducts(res.data);
  }

  async function deleteProduct(id) {
    const res = await deleteProductByID(id);
    fetchProducts();
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Link to={"/products/new"} className="btn btn-ajouter btn-block">
            <i className="fas fa-plus"></i> Nouveau produit
          </Link>

          <div className="table-responsive mt-4">
            <table className="table">
              <thead className="grey lighten-2">
                <tr>
                  <th scope="col" className="text-center">#</th>
                  <th scope="col" className="text-center">Name</th>
                  <th scope="col" className="text-center">Price</th>
                  <th scope="col" className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((elem, index) => (
                  <tr key={index}>
                    <th scope="row" className="text-center">{index + 1}</th>
                    <td className="text-center">{elem.name}</td>
                    <td className="text-center">{elem.price}</td>
                    <td className="text-center">
                      <button className="btn btn-supprimer" onClick={() => deleteProduct(elem._id)}>
                        <i className="fas fa-trash icon-rouge"></i>
                      </button>
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
