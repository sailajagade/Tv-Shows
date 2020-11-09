import React, { Component, Fragment } from "react";
import Shows from "../Components/displayShows";
import Displayshowdetails from "../Components/displayShowDetails";
import { FETCHALLSHOWS, SEARCHRESULTS, SHOWSELECT } from "../Api/url";
import SearchComponent from "../Components/SearchComponent";
import { getData } from "../Api/Api";

class showContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showsObj: {
        Drama: { data: [], currentPage: 1 },
        Action: { data: [], currentPage: 1 },
        Comedy: { data: [], currentPage: 1 },
        Crime: { data: [], currentPage: 1 },
      },
      showdetails: false,
      shows: [],
      showData: [],
      showTab: "",
      tabsData: [],
      currentPosts: [],
      searchFlag: false,
    };
    this.GenreType = ["Drama", "Action", "Comedy", "Crime"];
  }

  componentDidMount = () => {
    this.fetchShows();
    // this.next();
  };

  fetchShows = () => {
    getData(FETCHALLSHOWS)
      .then((res) => {
        this.setState(
          {
            shows: res.data,
            currentPosts: res.data,
            searchFlag: false,
          },
          this.filterGenres
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  filterGenres = () => {
    let newState = Object.assign({}, this.state);
    this.state.shows &&
      this.state.shows.map((show) => {
        let filterGenre =
          show.genres &&
          show.genres.find((genre) => this.GenreType.includes(genre));
        if (
          filterGenre &&
          Math.floor(show && show.rating && show.rating.average) >= 6
        ) {
          newState.showsObj[filterGenre].data.push(show);
          this.setState(newState);
        }
      });
  };

  onShowSearch = async (event) => {
    this.setState({ showdetails: false });
    const { value } = event.target;
    try {
      if (event.keyCode === 13) {
        getData(SEARCHRESULTS + value).then((res) => {
          this.setState({
            shows: res.data,
            currentPosts2: res.data,
            searchFlag: true,
          });
        });
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  onShowSelect = async (event) => {
    console.log(event);
    const { id } = event;
    getData(SHOWSELECT + id)
      .then((res) => {
        this.setState({
          showdetails: true,
          showData: res.data,
          showTab: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getShowDetails = async (e, id, tabName = "") => {
    const url = tabName ? SHOWSELECT + id + "/" + tabName : SHOWSELECT + id;
    getData(url).then((res) => {
      this.setState({
        showTab: e,
        currentPage: 1,
        tabsData: res.data,
      });
    });
  };
  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  routeback = () => {
    this.setState({
      showdetails: false,
      searchFlag: false,
    });
    this.fetchShows();
    if (document.getElementById("searchbox"))
      document.getElementById("searchbox").value = "";
  };

  render() {
    const {
      postsPerPage,
      shows,
      showData,
      tabsData,
      showdetails,
      showTab,
      searchFlag,
      currentPage,
    } = this.state;
    return (
      <Fragment>
        <SearchComponent
          ongenreSelect={this.filterRatingAndgenre}
          onRatingSelect={this.filterRatingAndgenre}
          onShowSearch={this.onShowSearch}
        />
        {showdetails ? (
          <div class="">
            <Displayshowdetails
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              showData={showData}
              getShowDetails={this.getShowDetails}
              showTab={showTab}
              tabsData={tabsData}
              paginate={this.paginate}
              routeback={this.routeback}
            />
          </div>
        ) : (
          <div style={{ backgroundColor: "black" }}>
            {!searchFlag ? (
              Object.keys(this.state.showsObj).map((genre) => (
                <Shows
                  currentPosts={this.state.showsObj[genre]}
                  postsPerPage={this.state.postsPerPage}
                  shows={shows}
                  onShowSelect={this.onShowSelect}
                  searchFlag={searchFlag}
                  genre={genre}
                />
              ))
            ) : (
              <Shows
                currentPosts={this.state.currentPosts2}
                postsPerPage={this.state.postsPerPage}
                shows={shows}
                onShowSelect={this.onShowSelect}
                searchFlag={searchFlag}
                genre=""
              />
            )}
          </div>
        )}
      </Fragment>
    );
  }
}

export default showContainer;
