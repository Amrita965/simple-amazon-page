import { useContext } from "react";
import { CartContext } from "../../Contexts/CartProvider";


const Product = ({ product }) => {

  const { addToCart } = useContext(CartContext);

  const { Name, Processor, Graphics_Processor, Storage, RAM, PowerSupply, Wireless_Connectivity, Operating_System, Price, Sold_By, Image } = product;
    return (
      <div className="shadow-sm border rounded-sm">
        <div className="card card-side bg-base-100 w-[70%]">
          <figure className="bg-[#F7F7F7] p-6 max-w-64">
            <img className="w-full" src={Image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="text-lg">{`${Name}, ${Processor}, ${Graphics_Processor}, ${Storage}, ${RAM}, ${PowerSupply}, ${Wireless_Connectivity}, ${Operating_System}`}</h2>

            <div>
              <h2 className="text-2xl">{Price}</h2>
              <p className="text-sm">Sold by {Sold_By}</p>
              <button onClick={() => addToCart(product)} className="btn btn-warning mt-3 rounded-badge py-1 text-sm">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Product;