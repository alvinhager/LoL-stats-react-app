import "./App.css";
import teemoCoverPicture from "@assets/teemo.jpg";
import classes from "@/app.module.scss";
import { Centered } from "@components/Centered";
import { TextField } from "@components/CustomTextfield";
import { useState } from "react";
import Spacer from "@components/Spacer/Spacer";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#1C1C1F",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Centered>
        <img src={teemoCoverPicture} className={classes.teemoCoverImage} />
        <Spacer size={16} axis="vertical" />
        <div className={classes.searchbarContainer}>
          <TextField
            value={searchValue}
            className={classes.championSearchTextfield}
            onChange={(value) => {
              setSearchValue(value);
            }}
          />
        </div>
      </Centered>
    </div>
  );
}

export default App;
