import React, { useContext} from "react";
import CreateNoteButton from "../UI/CreateNoteButton";
import CategoryContext from "../../store/category-context";
import classes from './notes.module.css';

const Note = (props) => {

  const categoryCtx = useContext(CategoryContext);
  const categories = categoryCtx.categories;
  const notes = categories.find(category => category.id === categoryCtx.categoryId);

  const handleClick = (e) => {
    e.stopPropagation();
    const noteId = e.currentTarget.id;
    categoryCtx.getnoteid(noteId);
    props.onClick(noteId);
  };

  const clickHandler = () => {
    props.getClickHandler(true);
  };


  const showNotes = notes ?
    (
      notes.notes.map(note => (
        <div 
        data-testid="note-div" 
        key={note.id} id={note.id} 
        onClick={handleClick} 
        className={classes.notecontainer}>
          <h3 className={classes.noteTitle}>{note.title}</h3>
          <p className={classes.content}>{note.content}</p>
        </div>
      ))
    )
    : <p>NO NOTES YET</p>

  return (
    <>
      <div className={classes.note}>
        <CreateNoteButton onClick={clickHandler} />
        {showNotes}
      </div>
    </>
  )
}

export default Note;