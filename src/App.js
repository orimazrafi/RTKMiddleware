import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fecthBooks } from "./features/Books/Books"
import { fetchAPI } from "./features/Authors/Authors"
function App() {
  const { loader, books } = useSelector(state => state?.Books)
  const dispatch = useDispatch()
  const handleBooks = () => {
    dispatch(fecthBooks(1000))
  }

  return (
    <div>
      {loader && 'loading'}
      {JSON.stringify(books, null, 20)}
      <button onClick={handleBooks}>fetch books</button>
      <button onClick={() => dispatch(fetchAPI({ trottel: true, time: 10 }))}>fetch Comments</button>
    </div>
  );
}

export default App;
