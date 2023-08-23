import React from "react";
import {Tooltip} from '@mui/material'
import style from "./Card.module.css";


const Card = ({data,type}) => {
  
  console.log(data.songs);

  const getCard = (type) => {
    switch(type){
      case "album":{
        // const {image, follows, title, songs} = data;
        return (
          <>
            <Tooltip title={`${data.songs.length} songs`} placement="top" arrow>
            <div className={style.card}>
              <div className={style.holder}>
                  <img className={style.cardImg} src={data.image} alt={data.title} />
                  <div>
                  <span className={style.follows}>${data.follows}FOLLOWS</span>
                  </div>
              </div>
              <p>{data.title}</p>
            </div>
          </Tooltip>
          </>
        );
      }
      default:
        return <></>;
    }
  }
  return getCard(type);
};

export default Card;
