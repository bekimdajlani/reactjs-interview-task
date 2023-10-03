import classes from './buttonStyles.module.css';
import DoneIcon from '@mui/icons-material/Done';

const SaveButton = (props) => {


    return (
        <button className={classes.saveButton} onClick={props.onClick}>
            <span>{props.name}</span>
            <span><DoneIcon /></span>
        </button>
    )

}

export default SaveButton;