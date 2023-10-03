import classes from './addNote.module.css';
import SaveButton from '../UI/SaveButton'
import EmptyButtons from '../UI/EmptyButtons';
import { useContext, useEffect, useState } from 'react';
import CategoryContext from '../../store/category-context';
import DeleteButton from '../UI/DeleteButton';

const EditNote = (props) => {

    const clickedNote = +props.clickedNote;
    const categoryCtx = useContext(CategoryContext);
    const categories = categoryCtx.categories;
    const selectedCategory = categories?.find(category => category.id === categoryCtx.categoryId);
    const currentNote = selectedCategory?.notes?.find(note => note.id === clickedNote);
    const [title, setTitle] = useState(currentNote?.title);
    const [textValue, setTextValue] = useState(currentNote?.content);

    useEffect(() => {
        setTitle(currentNote?.title);
        setTextValue(currentNote?.content);

    }, [currentNote])

    const titleInputHandler = (e) => {
        const noteTitle = e.target.value
        setTitle(noteTitle);
    };
    const textInputHandler = (e) => {
        const noteContent = e.target.value;
        setTextValue(noteContent);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const editedNote = {
            id: clickedNote,
            title: title,
            content: textValue
        }
        categoryCtx.editnote(editedNote);
    }

    const deleteNoteHandler = (e) => {
        e.preventDefault();
        categoryCtx.removenote(clickedNote);
        props.onClick(true);
    }


    return (
        <div className={classes.noteContainer} data-testid='EditComponent' >
            <header className={classes.noteHeader}>
                <EmptyButtons />
            </header>
            <form className={classes.inputField} >
                <input
                    value={title}
                    className={classes.inputTitle}
                    onChange={titleInputHandler}
                />
                <textarea htmlFor='notes'
                    value={textValue}
                    className={classes.writeTextArea}
                    onChange={textInputHandler}
                ></textarea>
                <div className={classes.saveAndDeleteButton}>
                    <DeleteButton onClick={deleteNoteHandler} name={'Delete Note'} />
                    <SaveButton onClick={onSubmitHandler} name={'Save Changes'} />
                </div>
            </form>
        </div>
    )

}

export default EditNote;