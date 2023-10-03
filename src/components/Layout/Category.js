import { useState, useContext, useRef, useEffect } from 'react';

import classes from './category.module.css';
import FolderIcon from '@mui/icons-material/Folder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CategoryContext from '../../store/category-context';


const Category = (props) => {

    const categoryCtx = useContext(CategoryContext);
    const targetButton = useRef(null);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked)
        const clickedId = props.id;
        categoryCtx.getcategoryid(clickedId);
    };

    useEffect(() => {
        function handleOutsideClick(event) {
            if (targetButton.current && !targetButton.current.contains(event.target)) {
                setIsClicked(false);
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);


    return (
        <div id={props.id} ref={targetButton} data-testid='singleCategory'>
            <button onClick={handleClick} className={isClicked ? classes.clickedButton : classes.categoryButton}>
                <span><FolderIcon /></span>
                <span>{props.name}</span>
                <span><PlayArrowIcon className={isClicked ? '' : classes.rotate90} /></span>
            </button>
        </div>
    )

}

export default Category;