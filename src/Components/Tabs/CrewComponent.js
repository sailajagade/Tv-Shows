import React from "react";
import "../../Css/Shows.css";

const CrewComponent = (props) => {
  const { tabsData, showTab } = props;
  return (
    <div class="row">
      {tabsData &&
        tabsData.map((post) => (
          <div class="card-deck col-lg-3 mt-5">
            <div class="card ">
              <img
                src={
                  post.person && post.person.image && post.person.image.medium
                }
                alt=""
              />
              <div class="card-footer fontStyle">
                <b>{post && post.type}</b>: {post.person && post.person.name}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CrewComponent;
