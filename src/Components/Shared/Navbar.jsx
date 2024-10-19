import { Link } from "react-router-dom";
import amazonBrandLogo from "../../assets/logo/amazon-brand-logo.png";
import CartDrawer from "./CartDrawer";
import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartProvider";

const Navbar = () => {
  const { cartProducts } = useContext(CartContext);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);

  const toggleCartSidebar = () => {
    setIsCartSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="bg-[#131921] px-5 py-3 flex gap-6 items-center justify-between fixed w-full top-0 left-0 z-[100]">
        <Link className="block" to="/">
          <img className="w-20 h-auto" src={amazonBrandLogo} alt="" />
        </Link>

        <button className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <p className="font-semibold text-sm text-start text-white">
            <small className="font-normal">Deliver to</small>
            <br />
            Bangladesh
          </p>
        </button>

        <label className="input input-bordered flex items-center gap-2 grow h-10">
          <input type="text" className="grow" placeholder="Search Amazon" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <button className="flex items-center gap-1">
          <p className="font-semibold text-sm text-start text-white">
            <small className="font-normal">Hello, sign in</small>
            <br />
            Account & Lists
          </p>
        </button>

        <button className="flex items-center gap-1">
          <p className="font-semibold text-sm text-start text-white">
            <small className="font-normal">Returns</small>
            <br />& Orders
          </p>
        </button>

        <label onClick={toggleCartSidebar} htmlFor="cart-drawer" className="text-white cursor-pointer">
          <div className="flex items-end font-medium text-lg">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <div className="h-6 w-6 absolute -top-1 right-1 bg-[#f08804] rounded-full flex justify-center items-center text-sm">
                {cartProducts.length}
              </div>
            </div>
            cart
          </div>
        </label>
      </nav>
      {isCartSidebarOpen && <CartDrawer toggleCartSidebar={toggleCartSidebar} />}
    </>
  );
};

export default Navbar;
