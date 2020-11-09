import React from "react";
import "../../Css/Shows.css";

const EpisodesComponent = (props) => {
  const { tabsData } = props;
  return (
    <div class="row container">
      {tabsData &&
        tabsData.map((post) => (
          <div class="card-deck col-lg-4">
            <div class="card   mt-5">
              <div class="card-body">
                <img src={post && post.image && post.image.medium} />
              </div>
              <div class="card-footer fontStyle">
                <div>
                  <b>Season:</b>
                  {post.season}
                </div>
                <div>
                  <b>Episode:</b>
                  {post.number}
                </div>
                <div>
                  {" "}
                  <b>Name:</b>
                  {post.name}
                </div>
                <div>
                  <b>AirDate:</b>
                  {post.airdate}
                </div>
                <div>
                  <b>Summary</b>:
                  {post.summary && post.summary.replace(/<[^>]+>/g, "")}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EpisodesComponent;
