import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Card from "../Card/Card";
import style from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../BasicTabs/BasicTabs";

const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  const handleTabChange = (event, newIndex) => {
    setSelectedTab(newIndex);
  };

  const filteredSongs =
  selectedTab === 0
    ? data // No filtering for "All" tab
    : data.filter((song) => song.genre.key === ["rock", "pop","jazz","blues"][selectedTab - 1]);

  return (
    <>
      <div className={style.header}>
        <div className={style.heading}><h3>{title}</h3></div>
        <h4 className={style.toogleText} onClick={handleToggle}>
          {type==="songs"?"":carouselToggle ? "Show All" : "Collapse"}
        </h4>
      </div>
      {type === "songs" ? (
          <BasicTabs
          value={selectedTab}
          onChange={handleTabChange}
          genres={["All", "Rock", "Pop","Jazz","Blues"]}
          songsData={data}
        />
        ) : (
          ""
        )}
      {data?.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={style.cardWrapper}>
          {!carouselToggle ? (
            <div className={style.wrapper}>
              {data.map((element) => (
                <Card key={data.id} data={element} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={filteredSongs}
              renderCardComponent={(data) => (
                <Card key={data.id} data={data} type={type} />
              )}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Section;
