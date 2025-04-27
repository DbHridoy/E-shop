import Products from "./components/Products";
// import loadData from './callApi'
import data from './callApi'

 function App() {
  // const data= loadData()
  // console.log(data);
  
  return (
    <>
      <div className="flex flex-wrap items-center  "> 
        {/* fuck */}
        {data.map((product) => {
          return (
            <Products product={product} key={product.unique_id}></Products>
          );
        })}
      </div>
    </>
  );
}

export default App;
