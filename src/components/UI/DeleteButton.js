import classes from './buttonStyles.module.css';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteButton = (props) => {


    return (
        <button className={classes.deleteButton} onClick={props.onClick}>
            <span>{props.name}</span>
            <span><DeleteIcon /></span>
        </button>
    )

}

export default DeleteButton;