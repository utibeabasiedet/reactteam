import React from "react";
import ReallModel from "./realModel";
// import Retry from "./Retry";
// import './Car.css'
import styles from './Car.module.css'; 

const Car = ({ kaki, carModel, carBrand, year }) => {
  return (
    <div className={styles.ella}>
      <div>{kaki}</div>
      <div>{carModel}</div>
      <div>{carBrand}</div>
      <div>{year}</div>
      

      <ReallModel carModel={carModel} />
      {/* <Retry/> */}
    </div>
  );
};

export default Car;
