import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center bg-[#eee] min-h-dvh ">
      <h1 className='font-nunito font-bold text-5xl'>Graphql React App</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
