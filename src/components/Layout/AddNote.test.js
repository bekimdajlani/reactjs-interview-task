import { render, screen, fireEvent } from "@testing-library/react";
import {React} from "react";
import  CategoryProvider  from "../../store/CategoryProvider"; 
import AddNote from "./AddNote";
import App from "../../App";

describe("AddNote Component", () => {
  it("renders correctly", () => {
    render(<AddNote />);

    expect(screen.getByPlaceholderText("Add a title...")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Write your note here...")).toBeInTheDocument();
    expect(screen.getByText("Add Note")).toBeInTheDocument();
  });
  render(<App/>)
  const createCategoryButton = screen.getByText('Create Category');
       fireEvent.click(createCategoryButton);
       const category = screen.getByPlaceholderText('Enter category name...');
       fireEvent.change(category,{target:{value:'category'}});
       const categoryButton = screen.getByText('Add Category');
  fireEvent.click(categoryButton);

  it("handles input changes", () => {
    render(<AddNote />);

    const titleInput = screen.getByPlaceholderText("Add a title...");
    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    expect(titleInput.value).toBe("Test Title");

    const textAreaInput = screen.getByPlaceholderText("Write your note here...");
    fireEvent.change(textAreaInput, { target: { value: "Test Content" } });
    expect(textAreaInput.value).toBe("Test Content");
  });

  it("handles form submission", () => {
    const addnote = jest.fn();
    render(
      <CategoryProvider value={{ addnote }}>
        <AddNote />
      </CategoryProvider>
    );

    const titleInput = screen.getByPlaceholderText("Add a title...");
    fireEvent.change(titleInput, { target: { value: "Test Title" } });

    const textAreaInput = screen.getByPlaceholderText("Write your note here...");
    fireEvent.change(textAreaInput, { target: { value: "Test Content" } });

    const form = screen.getByTestId("forminput");
    fireEvent.submit(form);

    expect(addnote).toHaveBeenCalled();
    expect(titleInput.value).toBe(""); 
    expect(textAreaInput.value).toBe(""); 
  });
});
