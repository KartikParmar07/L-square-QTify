import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import Card from "./components/Card/Card";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import { useEffect, useState } from "react";
import Section from "./components/Section/Section";
import style from "./App.module.css"

function App() {

  const[topAlbumData, setTopAlbumData]= useState([]);
  const[newAlbumData, setNewAlbumData]= useState([]);
  const[allSongs, setSongsData]= useState([]);



  const generateAllSongs = async () => {
    try{
      const res = await fetchSongs();
      setSongsData(res)
    }catch(err){
      console.log(err)
    }
  }


  const generateTopAlbumData = async () => {
    try{
      const data = await fetchTopAlbums();
      setTopAlbumData(data)
    }catch(err){
      console.log(err)
    }
  }

  const generateNewAlbumData = async () => {
    try{
      const data = await fetchNewAlbums();
      setNewAlbumData(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    generateTopAlbumData();
    generateNewAlbumData();
    generateAllSongs();
  },[])
  

  return (
    <>
      <Navbar />
      <Hero
        line1="100 Thousand Songs, ad-free"
        line2="Over thousands podcast episodes"
      />
      <div className={style.sectionWrapper}>
      <Section title="Top Albums" data={topAlbumData} type="album"/>
      <Section title="New Albums" data={newAlbumData} type="album"/>
      <Section title="Songs" data={allSongs} type="songs"/>
      </div>
    </>
  );
}

export default App;
