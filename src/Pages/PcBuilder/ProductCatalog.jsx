import FilterPanel from "./FilterPanel";
import Products from "./Products";


const ProductCatalog = () => {
    return (
        <section className="flex mt-20">
            <FilterPanel />
            <Products />
        </section>
    );
};

export default ProductCatalog;