import React from "react";
import "../Style/list.css";
import nftData from "../Constants/nft.json";

function List() {
  return (
    <div className="flex-f">
      {nftData.map((x, i) => {
        return (
          <div className="flex-list">
            <span style={{ marginLeft: 10 }}>{i}</span>
            <span
              className="image"
              style={{
                background: `url(${x.Logo})`,
                backgroundSize: "cover",
              }}
            ></span>
            <span className="list-name">{x.Name}</span>
            <span>0.08 ETH</span>
            <span>58 ETH</span>
          </div>
        );
      })}
    </div>
  );
}

export default List;
