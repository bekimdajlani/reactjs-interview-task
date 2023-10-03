import React, { useContext } from 'react';
import CategoryContext from '../../store/category-context';
import Category from './Category';

const Categories = (props) => {
    const categoryCtx = useContext(CategoryContext);

    const addCategoryHandler = (category) => {
        categoryCtx.addcategory(category);
    };

    const removeCategoryHandler = (id) => {
        categoryCtx.removecategory(id);
    };



    const categories = categoryCtx.categories.map(category => (
        <Category
            key={category.id}
            id={category.id}
            name={category.name}
            notes={category.notes}
            onAddCategory={addCategoryHandler}
            onRemoveCategory={removeCategoryHandler}
        />
    ));

    return (
        <>
            {categories}
        </>
    )
}


export default Categories;