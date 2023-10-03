import React, { useState, useRef, useContext } from "react";
import classes from './buttonStyles.module.css'
import SaveButton from "./SaveButton";
import DeleteButton from "./DeleteButton";
import CategoryContext from "../../store/category-context";




const AddCategoryModal = (props) => {
    const categoryCtx = useContext(CategoryContext);
    const [checkInputLength, setCheckInputLength] = useState(false);
    const [categoryInput, setCategoryInput] = useState("");
    const modalRef = useRef();

    const clickOutsideHandler = (event) => {
        if (props.isModalOpen && !modalRef.current.contains(event.target)) {
            props.onCloseModal();
        }
    }

    const getInputValue = (event) => {
        setCategoryInput(event.target.value);
    }

    const createCategoryHandler = () => {
        const category = {
            id: Math.random(),
            name: categoryInput,
            notes: []
        }
        categoryCtx.addcategory(category);
    }

    const closeModal = () => {
        props.onCloseModal();
    }

    const onCLickHandler = () => {
        if (categoryInput.length > 0){
            createCategoryHandler();
            props.onCloseModal();
        }else{
            setCheckInputLength(true)
        }
    }


    return (
        <div onClick={clickOutsideHandler}>
            <div className={classes.overlay}>
                <div className={classes.modal} ref={modalRef}>
                {checkInputLength && <p style={{color:"red"}}>Name must not be empty</p>}
                    <input className={classes.inputStyle} placeholder="Enter category name..." value={categoryInput} onChange={getInputValue} />
                    <SaveButton onClick={onCLickHandler} name={'Add Category'} />
                    <DeleteButton onClick={closeModal} name={'Close'} />
                </div>
            </div>
        </div>
    )

}


export default AddCategoryModal;