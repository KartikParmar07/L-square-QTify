import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

function App() {
  let obj = {
    imgurl:
      "https://s3-alpha-sig.figma.com/img/0ff9/9cf1/f1ec6d6e5f55a783f39005756c3e5d9e?Expires=1692576000&Signature=SUiMLRu-tnfCDX71ORPdNLRvQF0NoN4veYj4kYWtzt-Z5HCkH3yjs9j57HB8b88gEdd2nmuLf~j1FnGEFupWJsyIfAlkfL5CrrOICY5--GKVd1p3iH1bugsp9gGh-IKQCK5fNUEwVOmHHLNdAC2mp4A1YBhZn5ZdegmYrvWKUuoa~0yPWwjl4RVDiIRMPCH6qTMBsMlEc8pT795pgKQTvivOR-8GMK8VqZIH8DFItjkqx--n4nt6aDZoWSStZS0Qki9OtOWylJ1IdDq2NkeWAhUZkxSbKoyI~0N~8t61ORod8JFXuOOk~ZE4zumR2PnGe8DuzX55zLZvLpw8-VTdhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    followers: 100,
    name: "New Bollywood",
  };

  return (
    <>
      <Navbar />
      <Hero
        line1="100 Thousand Songs, ad-free"
        line2="Over thousands podcast episodes"
      />
      <Card img={obj.imgurl} name={obj.name}/>
    </>
  );
}

export default App;
