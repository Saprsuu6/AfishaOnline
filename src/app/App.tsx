import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AddBlock from './components/add/AddBlock';
import AddPost from './components/addPost/AddPost';
import AfishaList from './components/afishaList/AfishaList';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import RunningLine from './components/runningLine/RunningLine';
import routes from './routes';

function App() {
  return (
    <Router>
      <Header mainContainerClass="container" />
      <RunningLine mainContainerClass="container" />
      <div className="main_content_block">
        <Routes>
          <Route
            path={routes.home}
            element={
              <>
                <AddBlock mainContainerClass="container" />
                <AfishaList mainContainerClass="container" />
                <AddBlock mainContainerClass="container" />
              </>
            }
          />
          <Route path={routes.addPost} element={<AddPost />} />
        </Routes>
      </div>
      <Footer mainContainerClass="container" />
    </Router>
  );
}

export default App;
