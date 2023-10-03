import { useReducer } from "react";
import CategoryContext from "./category-context";


const defaultCategories = {
    categories: [],
    categoryId: 0
}

const ADD_CATEGORY = 'ADD_CATEGORY';
const ADD_NOTE = 'ADD_NOTE';
const REMOVE_NOTE = 'REMOVE_NOTE';
const CLEAR_CATEGORIES = 'CLEAR_CATEGORIES';
const GET_CATEGORY_ID = 'GET_CATEGORY_ID';
const CLICK_NOTE = 'CLICK_NOTE';
const GET_NOTE_ID = 'GET_NOTE_ID';
const EDIT_NOTE = 'EDIT_NOTE';

const categoryReducer = (state, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.category]
            };
        case ADD_NOTE:
            const categoryIndex = state.categories.findIndex(category => category.id === state.categoryId);
            const addNote = state.categories[categoryIndex].notes.concat(action.note);
            const updateNotes = state.categories.map((category, index) => index === categoryIndex ? {
                ...category,
                notes: addNote
            }
                :
                category
            )
            return {
                ...state,
                categories: updateNotes

            };
        case REMOVE_NOTE:
            const deleteNoteCategoryIndex = state.categories.findIndex(category => category.id === state.categoryId)
            // const deletedNoteIndex = state.categories[deleteNoteCategoryIndex].notes.findIndex(note => note.id === action.id);
            const updatedNotes = state.categories[deleteNoteCategoryIndex].notes.filter(note => note.id !== action.id);
            const updatedCategory = state.categories.map((category, index) =>
                index === deleteNoteCategoryIndex ?
                    {
                        ...category,
                        notes: updatedNotes
                    }
                    : category
            )
            return {
                ...state,
                categories: updatedCategory
            }
        case GET_CATEGORY_ID:
            return {
                ...state,
                categoryId: action.id
            }
        case CLEAR_CATEGORIES:
            return {
                defaultCategories
            }
        case CLICK_NOTE:
            return {
                ...state,
                clickhandle: action.click
            }
        case GET_NOTE_ID:
            return {
                ...state,
                noteid: action.id
            }
        case EDIT_NOTE:
            const selectedCategoryIndex = state.categories.findIndex(category => category.id === state.categoryId);
            const editedNote = state.categories[selectedCategoryIndex].notes.map(note => note.id === action.note.id ?
                {
                    ...note,
                    id: action.note.id,
                    title: action.note.title,
                    content: action.note.content
                }
                : note
            )
            const updateCategory = state.categories.map((category, index) =>
                index === selectedCategoryIndex ?
                    {
                        ...category,
                        notes: editedNote
                    }
                    : category
            )
            return {
                ...state,
                categories: updateCategory

            }

        default:
            console.log('WRONG SWITCH HANDLING');
    };
};
const CategoryProvider = (props) => {
    const [categoryState, dispatchCategoryACtion] = useReducer(categoryReducer, defaultCategories);

    const addNewCategoryHandler = (category) => {
        dispatchCategoryACtion({ type: ADD_CATEGORY, category })
    };

    const addNewNoteHandler = (note) => {
        dispatchCategoryACtion({ type: ADD_NOTE, note });
    };

    const removeNoteHandler = (id) => {
        dispatchCategoryACtion({ type: REMOVE_NOTE, id })
    };

    const clearCategoriesHandler = () => {
        dispatchCategoryACtion({ type: CLEAR_CATEGORIES })
    };

    const getCategoryIdHandler = (id) => {
        dispatchCategoryACtion({ type: GET_CATEGORY_ID, id: id });
    };

    const clickHandle = (click) => {
        dispatchCategoryACtion({ type: CLICK_NOTE, click: click })
    };

    const getNoteIdHandler = (id) => {
        dispatchCategoryACtion({ type: GET_NOTE_ID, id: id });
    };

    const editNoteHandler = (note) => {
        dispatchCategoryACtion({ type: EDIT_NOTE, note: note });
    };


    const categoryContex = {
        categories: categoryState.categories,
        categoryId: categoryState.categoryId,
        addcategory: addNewCategoryHandler,
        addnote: addNewNoteHandler,
        removenote: removeNoteHandler,
        clearcategory: clearCategoriesHandler,
        getcategoryid: getCategoryIdHandler,
        clickedhandle: clickHandle,
        getnoteid: getNoteIdHandler,
        editnote: editNoteHandler
    }

    return (
        <CategoryContext.Provider value={categoryContex}>
            {props.children}
        </CategoryContext.Provider>
    )

}

export default CategoryProvider;