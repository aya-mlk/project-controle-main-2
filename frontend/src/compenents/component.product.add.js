import { useState } from "react";
import { addProduct } from "../services/product.services";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function ProductAddForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  function handleForm(event) {
    //pour ne pas actualiser la page quand j'envoie le formulaire
    event.preventDefault();
    const p = { "name": name, "price": price };
    addProduct(p);
    navigate("/products");
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Ajouter un produit</h2>
              <form onSubmit={(e) => handleForm(e)}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Nom :
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="price">
                    Prix :
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="text-center">
                  <input type="submit" className="btn btn-primary" value={"Enregistrer"} />
                  <input type="reset" className="btn btn-secondary ml-2" value={"Annuler"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}