import { useState } from 'react';
import classes from './buttonStyles.module.css';
import AddIcon from '@mui/icons-material/Add';
import AddCategoryModal from './AddCategoryModal';


const CreateCategoryButton = () => {

    const [openModal, setOpenModal] = useState(false);

    const openModalHandler = () => {
        setOpenModal(true);
    }

    const closeModalHandler = () => {
        setOpenModal(false);
    }


    return (
        <>
            <button className={classes.addCategoryButton} onClick={openModalHandler}>
                <span>Create Category</span>
                <span><AddIcon /></span>
            </button>
            {openModal && <AddCategoryModal isModalOpen={openModal} onCloseModal={closeModalHandler} />}
        </>
    )

}

export default CreateCategoryButton;