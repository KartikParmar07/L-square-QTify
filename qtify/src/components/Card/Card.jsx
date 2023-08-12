import React from "react";
import style from "./Card.module.css"


const Card = (props) => {
  return (
    <>
      <div className={style.card}>
        <div className={style.holder}>
            <img className={style.cargImg} src={props.img} alt={props.name} />
            <div>
            <span className={style.follows}>100 FOLLOWS</span>
            </div>
        </div>
        <p>{props.name}</p>
      </div>
    </>
  );
};

export default Card;
