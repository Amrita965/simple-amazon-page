const CartDrawer = ({ toggleCartSidebar }) => {
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
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 relative">
          <button
            onClick={toggleCartSidebar}
            className="btn btn-circle absolute top-3 left-3"
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
        </ul>
      </div>
    </div>
  );
};

export default CartDrawer;
