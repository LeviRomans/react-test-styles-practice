//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const morningStyle = "red";
const afternoonStyle = "green";
const nightStyle = "blue";
var dynamicGreet = "";
var dynamicStyle = { color: "" };

const now = new Date().getHours();

if (now >= 0 && now <= 12) {
  console.log("Good Morning");
  dynamicStyle.color = morningStyle;
  dynamicGreet = "Morning";
} else if (now > 12 && now <= 18) {
  console.log("Good Afternoon");
  dynamicStyle.color = afternoonStyle;
  dynamicGreet = "Afternoon";
} else if (now > 18 && now < 24) {
  console.log("Good Evening");
  dynamicStyle.color = nightStyle;
  dynamicGreet = "Evening";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={dynamicStyle}>
      {" "}
      Good {dynamicGreet}{" "}
    </h1>
  </div>,
  document.getElementById("root")
);
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css

//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
