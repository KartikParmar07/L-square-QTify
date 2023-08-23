import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Card from "../Card/Card";
import style from "./Section.module.css";
// import Carousel from "../Carousel/Carousel";

const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <>
      <div className={style.header}>
        <h3>{title}</h3>
        <h4 className={style.toogleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse"}
        </h4>
      </div>
      {data?.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={style.cardWrapper}>
          {!carouselToggle ? (
            <div className={style.wrapper}>
              {data.map((element) => (
                <Card data={element} type={type} />
              ))}
            </div>
          ) : (
            // <Carousel data={data} renderCardComponent={(data)=> <Card data={data} type={type}/> }/>
            <></>
          )}
        </div>
      )}
    </>
  );
};

export default Section;
