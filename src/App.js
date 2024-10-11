import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from './component/Global/Header/Header';
import Home from './component/Page/Home/Home';
import ListFilm from './component/Page/ListFilm/ListFilm';
import DetailMovie from './component/Page/DetailMovie/DetailMovie';
function App() {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/movie' element={<ListFilm/>}></Route>
        <Route path='/search/:slug' element={<ListFilm/>}></Route>
        <Route path='/detail/:slug' element={<DetailMovie/>}></Route>
      </Routes>
    </div>
  );
}


export default App;
