import React, { useState, useEffect } from "react";
import { getRandomInt } from "../functions/functions";
import Moon from "./Moon";
import "./Sky.css";
import Star from "./Star";

function Sky() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const NewStars = stars;
        const countStars = getRandomInt(0 ,100);

        for (let i = 0; i < countStars; i++) {
            const star = {
                left: getRandomInt(0, 100) +"%",
                top: getRandomInt(0, 100) + "%"
            };

            NewStars.push(star);
        }

        setStars([...NewStars]);
    }, []);

  const changeSky = (event) => {
      console.log(event);
      const NewStars 
  }  
}