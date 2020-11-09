import React from "react";
import CastComponent from "./Tabs/CastComponent";
import CrewComponent from "./Tabs/CrewComponent";
import EpisodesComponent from "./Tabs/EpisodesComponent";
import GalleryComponent from "./Tabs/GalleryComponent";
import MainComponent from "./Tabs/MainComponent";
import Pagination from "./Pagination";
import "../Css/Shows.css";

function DisplayShowDetails(props) {
  const {
    showData,
    tabsData,
    showTab,
    paginate,
    currentPage,
    postsPerPage=5,
  } = props;
  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let tabData =
    Array.isArray(tabsData) &&
    tabsData.slice(indexOfFirstPost, indexOfLastPost);
  const tabsLabel = {
    Main: "",
    Episode: "episodes",
    Cast: "cast",
    Crew: "crew",
    Gallery: "images",
  };
  return (
    <div>
      <div class="navbar2">
        <div class="row mt-4">
          <div class="col-lg-2">
            <button class="btn" onClick={props.routeback}>
              Home
            </button>
          </div>
          {Object.keys(tabsLabel).map((item) => (
            <div class="col-lg-2">
              <button
                class="btn"
                id={item}
                onClick={() =>
                  props.getShowDetails(item, showData.id, tabsLabel[item])
                }
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div class="mt-5">
        {showTab === "Main" || showTab === "" ? (
          <MainComponent showData={showData} />
        ) : (
          ""
        )}
        {showTab === "Episode" && (
          <EpisodesComponent showData={showData} tabsData={tabData} />
        )}

        {showTab === "Cast" && (
          <CastComponent showData={showData} tabsData={tabData} />
        )}
        {showTab === "Crew" && (
          <CrewComponent showData={showData} tabsData={tabData} />
        )}
        {showTab === "Gallery" && (
          <GalleryComponent showData={showData} tabsData={tabData} />
        )}

        <div class="row container">
          {showTab !== "" ? (
            <Pagination
              postsPerPage={8}
              totalPosts={tabsData && tabsData.length}
              paginate={paginate}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default DisplayShowDetails;
