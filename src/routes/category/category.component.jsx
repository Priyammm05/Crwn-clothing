import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../component/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import "./category.styles.scss";

function Category() {
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    

    return (
        <Fragment>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {products &&
                    products.map((productList) => (
                        <ProductCard
                            key={productList.id}
                            product={productList}
                        />
                    ))}
            </div>
        </Fragment>
    );
}

export default Category;
