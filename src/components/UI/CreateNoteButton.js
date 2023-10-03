import classes from './buttonStyles.module.css';
import AddIcon from '@mui/icons-material/Add';


const CreateNoteButton = (props) => {
    return (
        <button className={classes.addNoteButton} onClick={props.onClick}>
            <span>Create Note</span>
            <span><AddIcon /></span>
        </button>
    )

}

export default CreateNoteButton;