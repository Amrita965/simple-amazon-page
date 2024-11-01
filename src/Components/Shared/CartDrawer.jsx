import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartProvider";
import CartDrawerProduct from "./CartDrawerProduct";

const CartDrawer = ({ toggleCartSidebar, subTotal }) => {
  const { cartProducts } = useContext(CartContext);

  return (
    <div className="drawer drawer-end relative z-[500000]">
      <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          onClick={toggleCartSidebar}
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-base-200 text-base-content min-h-full w-48 p-0 relative">
          <div className="card">
            <div className="card-body">
              <h2 className="text-lg font-semibold text-center">Sub Total</h2>
              <p className="text-center font-semibold text-[#b12704] text-base">
                ${subTotal}
              </p>
              <div className="card-actions justify-center">
                <button className="border border-gray-700 hover:bg-slate-100 rounded-badge px-3 py-1 text-xs w-full">
                  Go to Cart
                </button>
              </div>
            </div>
          </div>

          {cartProducts.map((cartProduct) => (
            <CartDrawerProduct key={cartProduct.id} cartProduct={cartProduct} />
          ))}

          <button
            onClick={toggleCartSidebar}
            className="border-none absolute top-3 left-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
