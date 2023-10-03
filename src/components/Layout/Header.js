
import classes from './header.module.css';
import ClearIcon from '@mui/icons-material/Clear';

const Header = () => {
    return (
        <div className={classes.headerBar}>
            <h3 className={classes.headerText}>Your Notes</h3>
            <ClearIcon className={classes.clearIcon} />
        </div>
    )
}

export default Header;