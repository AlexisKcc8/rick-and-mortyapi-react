import "./App.css";
import { ContainerCards } from "./Components/ContainerCards";
import { NabvarMenu } from "./Components/NabvarMenu";
import { useRequetsApi } from "./Hooks/useRequetsApi";
import { Loader } from "./Components/Loader";
function App() {
  
  const { data, error, loading, nextPage, prevPage, currentPage} = useRequetsApi();
  // if (!data) return null;

  return (
    <div className="App">
      <h1>Rick and Morty - API</h1>
      {data && <NabvarMenu nextPage={nextPage} prevPage={prevPage} currentPage={currentPage}/>}
      {loading && <Loader />}
      {data && <ContainerCards data={data.results} />}
      {data && <NabvarMenu nextPage={nextPage} prevPage={prevPage} currentPage={currentPage}/>}
    </div>
  );
}

export default App;
