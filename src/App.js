
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
          <Nav />
          <Banner />

    <Row 
    title="Movies For You"
    fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow={true}
    />
    <Row title= "Trending New Collection" fetchUrl={requests.fetchTrending}/>
    <Row title= "Top Rating Movies" fetchUrl={requests.fetchTopRated}/>
    <Row title= "Collection Of Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title= "Collection Of Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title= "Collection Of Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title= "Collection Of Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title= "Collection Of Documentary Movies" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
