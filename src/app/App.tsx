import './App.css';

import AddBlock from './components/add/AddBlock';
import AfishaList from './components/afishaList/AfishaList';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import RunningLine from './components/runningLine/RunningLine';

function App() {
  return (
    <>
      <Header mainContainerClass="container" />
      <RunningLine mainContainerClass="container" />
      <div className="main_content_block">
        <AddBlock mainContainerClass="container" />
        <AfishaList mainContainerClass="container" />
        <AddBlock mainContainerClass="container" />
      </div>
      <Footer mainContainerClass="container" />
    </>
  );
}

export default App;
