import AddAuthor from "./components/AddAuthor";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App flex flex-col justify-start items-center bg-[#eee] min-h-dvh w-[60%] p-5">
      <h1 className='font-nunito font-semibold text-5xl text-[#444] my-3'>Book Store App</h1>
      <BookList />
      <div className="flex gap-5 fixed bg-white bottom-0 left-0 w-[60%] p-5">
        <AddBook />
        <AddAuthor />
      </div>
    </div>
  );
}

export default App;
