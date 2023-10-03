import React from 'react';

const CategoryContext = React.createContext({
    categories: [],
    categoryId: 0,
    noteId: 0,
    addcategory: (category) => { },
    addnote: (note) => { },
    editnote: (note) => { },
    removenote: (id) => { },
    clearcategory: () => { },
    getcategoryid: () => { },
    getnoteid: () => { },
    clickedhandle: () => { }
})

export default CategoryContext;