import classes from '../Layout/addNote.module.css';

const EmptyButtons = () => {

    return (
        <div className={classes.noteContainer}>
            <header className={classes.noteHeader}>
                <div className={classes.leftItems}>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div className={classes.rightItems}>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </header>
        </div>
    )

}

export default EmptyButtons;