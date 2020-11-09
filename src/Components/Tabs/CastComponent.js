import React from "react";
import "../../Css/Shows.css";

const CastComponent = (props) => {
  const { tabsData } = props;
  return (
    <div class="row">
      {tabsData &&
        tabsData.map((post) => (
          <div class="card-deck col-lg-3 mt-5">
            <div class="card ">
              <img
                src={
                  post &&
                  post.character &&
                  post.character.image &&
                  post.character.image.medium
                }
              />
              <div class="card-footer fontStyle">
                <b>{post && post.character && post.character.name}</b>:{" "}
                {post.person && post.person.name}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CastComponent;
