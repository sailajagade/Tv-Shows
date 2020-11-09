import React from "react";
import "../../Css/Shows.css";

const MainComponent = (props) => {
  const { showData } = props;
  return (
    <div>
      <div>
        <div class="col-lg-4">
          <div class="card">
            <img
              id="mainImage"
              src={showData && showData.image && showData.image.medium}
            />
          </div>
        </div>
        <div class="col-lg-4 fontStyle">
          {showData &&
            showData.summary &&
            showData.summary.replace(/<[^>]+>/g, "")}
        </div>

        <div class="col-lg-4 detailsCard">
          <div>
            <h1 class="mt-3 mb-5 font-family">Show Info</h1>
          </div>

          <div class="mb-4">
            <h4>
              <b>Network:</b>
              {showData.network && showData.network.name},
              {showData.network && showData.network.country.code}
            </h4>{" "}
          </div>
          <div class="mb-4">
            {" "}
            <h4>
              <b>Schedule:</b>
              {showData &&
                showData.schedule &&
                showData.schedule.days.map((day) => day)}{" "}
              at {showData.schedule && showData.schedule.time}
            </h4>{" "}
          </div>
          <div class="mb-4">
            {" "}
            <h4>
              <b>Status:</b>
              {showData.status}
            </h4>{" "}
          </div>
          <div class="mb-4">
            <h4>
              <b>Language:</b>
              {showData && showData.language}
            </h4>{" "}
          </div>
          <div class="mb-4">
            {" "}
            <h4>
              <b>Show Type:</b>
              {showData.type}
            </h4>{" "}
          </div>
          <div class="mb-4">
            <h4>
              <b>genres:</b>
              {showData &&
                showData.genres &&
                showData.genres.map((genre) => genre + " " + "|" + " ")}
            </h4>{" "}
          </div>
          <div class="mb-4">
            <h4>
              <b>Official Site:</b>
              {showData.officialSite}
            </h4>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
