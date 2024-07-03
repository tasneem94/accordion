import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div className="container">
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </div>
  );
}

export default App;
