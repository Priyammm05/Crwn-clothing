import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { setCategories } from "../../store/categories/categories.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

function Shop() {
    useEffect(() => {
        const dispatch = useDispatch();

        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments(
                "categories"
            );
            dispatch(setCategories(categoriesArray));
        };

        getCategoriesMap();
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
}

export default Shop;
