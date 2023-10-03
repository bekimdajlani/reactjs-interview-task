import classes from './addNote.module.css';
import SaveButton from '../UI/SaveButton'
import EmptyButtons from '../UI/EmptyButtons';
import { useContext, useState } from 'react';
import CategoryContext from '../../store/category-context';

const AddNote = (props) => {

    const categoryCtx = useContext(CategoryContext);
    const [title, setTitle] = useState("");
    const [textValue, setTextValue] = useState("");
    const [checkInputLength,setCheckInputLength] = useState();


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
        const newNote = {
            id: Math.random(),
            title: title,
            content: textValue
        };
        if(newNote.title.length === 0 || newNote.content.length === 0){
            setCheckInputLength(true);
        }else{

            categoryCtx.addnote(newNote);
            setTextValue('');
            setTitle('');
            setCheckInputLength(false);
        }
    }

    return (
        <div className={classes.noteContainer}>
            <header className={classes.noteHeader}>
                <EmptyButtons />
            </header>
                {checkInputLength && <p style={{color:"red"}}>Check your fields.Fields must not be empty</p>}
            <form className={classes.inputField} onSubmit={onSubmitHandler} data-testid='forminput'>
                <input
                    htmlFor='title'
                    value={title}
                    placeholder='Add a title...'
                    className={classes.inputTitle}
                    onChange={titleInputHandler}
                />
                <textarea htmlFor='notes'
                    value={textValue}
                    placeholder='Write your note here...'
                    className={classes.writeTextArea}
                    onChange={textInputHandler}
                ></textarea>
                <div className={classes.saveButton}><SaveButton name={'Add Note'} /></div>
            </form>
        </div>
    )

}

export default AddNote;