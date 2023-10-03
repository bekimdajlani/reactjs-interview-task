import { render, fireEvent ,screen } from "@testing-library/react";

import App from './App';


describe('<App />', () => {

  it('renders without crashing', () => {
    render(<App />);
  });
  
    it('shows <AddNote /> when creating a new note', async () => {
       render(<App />);
      
      
      const addNoteButton = screen.getByText('Create Note'); 
      fireEvent.click(addNoteButton);
      
      
      expect(screen.findByTestId("createNoteClick")).toBeTruthy();
    });


//     it('shows <EditNote /> when the div is clicked', () => {
//       render(<App />);
//       const createCategoryButton = screen.getByText('Create Category');
//       fireEvent.click(createCategoryButton);
//       const category = screen.getByPlaceholderText('Enter category name...');
//       fireEvent.change(category,{target:{value:'category'}});
//       const categoryButton = screen.getByText('Add Category');
//       fireEvent.click(categoryButton);
//       const clickCategory = screen.getByTestId('singleCategory');
//       fireEvent.click(clickCategory);
//       const input = screen.getByPlaceholderText('Add a title...');
//       fireEvent.change(input, { target: { value: 'Some user note' } });
//       const secondInput = screen.getByPlaceholderText('Write your note here...');
//       fireEvent.change(secondInput, { target: { value: 'Some user note' } });
  
//       const addButton = screen.getByText('Add Note');
//       fireEvent.click(addButton);
      
//       const noteDiv = screen.getByTestId('note-div');
      
//       fireEvent.click(noteDiv);
//       const editNoteComponent = screen.getByTestId('editnote-component');
//       expect(editNoteComponent).toBeInTheDocument();
//   });

});