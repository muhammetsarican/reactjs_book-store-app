import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App flex flex-col justify-start items-center bg-[#eee] min-h-dvh w-[60%] p-5">
      <h1 className='font-nunito font-semibold text-5xl text-[#444] my-3'>Book Store App</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
