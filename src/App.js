import { useState } from 'react';
import './App.css';

import Header from './components/Layout/Header';
import CreateCategoryButton from './components/UI/CreateCategoryButton';
import AddNote from './components/Layout/AddNote';
import CategoryProvider from './store/CategoryProvider';
import Categories from './components/Layout/Categories';
import Note from './components/Layout/Note';
import EditNote from './components/Layout/EditNote';


function App() {
  const [clickedNoteId, setClickedNoteId] = useState();
  const [createNoteClick, setCreateNoteClick] = useState(true);
  const [clickedNote,setClickedNote] = useState();

  const noteIdHandle = (id) => {
    setClickedNoteId(id);
    setClickedNote(true);
    setCreateNoteClick(false);
   };

  const getCreateNoteClickHandler = (value) => {
    setCreateNoteClick(value);
    setClickedNote(false);
  };

  return (
    <CategoryProvider>
      <div className='page-orientation'>
        <Header />
        <div className='main-section'>
          <div className='categories-section'>
            <CreateCategoryButton />
            <Categories />
          </div>
          <div className='notes'><Note onClick={noteIdHandle} getClickHandler={getCreateNoteClickHandler} /></div>
          <div className='add-note'>
            {(!createNoteClick && clickedNote) ?
              <EditNote clickedNote={clickedNoteId} onClick={getCreateNoteClickHandler}/>
              :
              (createNoteClick && !clickedNote) ? <AddNote /> : null
            }

          </div>
        </div>
      </div>
    </CategoryProvider>
  );
}

export default App;
