import React from "react";
import styles from "./Device.module.scss";
import { Button } from "../../components";
import classNames from "classnames";
import phonesImage from "../../assets/images/phones.png";

export const Device = () => {
  const device = {
    id: 0,
    name: "Iphone 11 pro",
    price: 1000,
    rating: 1,
    img: "https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  };

  const description = [
    { id: 1, title: "Digital zoom", description: "30x" },
    { id: 2, title: "Color of product", description: "Green" },
    { id: 3, title: "Platform", description: "Android" },
    { id: 4, title: "Width", description: "130.1 mm" },
    { id: 5, title: "Height:", description: " 155.1 mm" },
  ];

  return (
    <div className={styles.device} data-testid="Device">
      <div className={styles.device__wrapper}>
        <div>
          <img src={phonesImage} className={styles.device__image} />
        </div>
        <div className={styles.device__about}>
          <h2 className={styles.device__name}>{device.name}</h2>
          <div className={styles.device__rating}>{device.rating}</div>
        </div>
        <div>
          <div className={styles.device__basket}>
            <h3 className={styles.device__price}>from {device.price}$</h3>
            <Button typeButton="button">Add to basket</Button>
          </div>
        </div>
      </div>
      <div className={styles.device__info}>
        <h1>Features</h1>
        {description.map((info, index) => (
          <div
            key={info.id}
            className={classNames(styles.device__feat, {
              [styles.device__feat_type_light]: index % 2 !== 0,
              [styles.device__feat_type_dark]: index % 2 === 0,
            })}
          >
            {info.title}: {info.description}
          </div>
        ))}
      </div>
    </div>
  );
};
