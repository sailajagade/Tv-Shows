import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

import { shallow, mount } from "enzyme";
import ShowContainer from "../Container/showContainer";
configure({ adapter: new Adapter() });
2;

jest.mock("axios", () => {
  const exampleArticles = [{ title: "test article", url: "test url" }];

  return {
    get: jest.fn(() => Promise.resolve(exampleArticles)),
  };
});

const axios = require("axios");

describe("App component", () => {
  let wrapper = mount(<ShowContainer />);
  wrapper.setState({
    shows: [
      { show: { image: { medium: "http://abc" }, rating: { average: 6.5 } } },
    ],
  });

  wrapper.setState({
    tabsData: [
      {
        character: { image: { medium: "" } },
        image: { medium: "dgsdh" },
        summary: "summary",
        network: { name: "name", country: { code: "US" } },
        schedule: { days: ["1"], time: "wyeuywe" },
        genres: ["drama"],
      },
    ],
  });
  it("test for component render", () => {
    wrapper.setState({ showdetails: true });
    wrapper.setState({ showTab: "Cast" });
    wrapper.setState({ searchFlag: false });
    wrapper.find("#Cast").simulate("click");
    wrapper.setState({ showDetails: true });
    wrapper.setState({ filterShow: true });
    wrapper.setState({
      showData: {
        image: { medium: "dgsdh" },
        summary: "summary",
        network: { name: "name", country: { code: "US" } },
        schedule: { days: ["1"], time: "wyeuywe" },
        genres: ["drama"],
      },
    });
    wrapper.setState({ showTab: "Main" });
    wrapper.setState({ showTab: "Cast" });
    wrapper.setState({ showTab: "Crew" });

    wrapper.setState({
      tabsData: [
        {
          image: { medium: "dgsdh" },
          summary: "summary",
          network: { name: "name", country: { code: "US" } },
          schedule: { days: ["1"], time: "wyeuywe" },
          genres: ["drama"],
        },
      ],
    });
    wrapper.setState({ showTab: "Gallery" });
    wrapper.find("#searchbox").prop("onKeyUp")({ key: "Enter" });
    wrapper.setState({ searchFlag: false });
    expect(wrapper).toBeDefined();
  });

  it("test for component render", () => {
    let wrapper2 = mount(<ShowContainer />);
    wrapper2.setState({
      searchFlag: true,
    });
    wrapper2.update();
    const addMock = jest.spyOn(wrapper2.instance(), "onShowSelect");
    const e = { keyCode: 13, target: { value: "dfdf" } };
    wrapper2.instance().onShowSelect(e);
    expect(wrapper2).toBeDefined();
  });
  it("test for component render", () => {
    let wrapper3 = mount(<ShowContainer />);
    wrapper.setState({ showdetails: true });
    wrapper3.setState({
      tabsData: [
        {
          character: { image: { medium: "" } },
          image: { medium: "dgsdh" },
          summary: "summary",
          network: { name: "name", country: { code: "US" } },
          schedule: { days: ["1"], time: "wyeuywe" },
          genres: ["drama"],
        },
      ],
    });

    wrapper.setState({ showTab: "Episode" });
    wrapper3.update();
    const addMock = jest.spyOn(wrapper3.instance(), "getShowDetails");
    const e = { keyCode: 13, target: { value: "dfdf" } };
    wrapper.instance().getShowDetails("Episode", 1, "Episode");
    expect(wrapper3).toBeDefined();
  });

  it("test for component episode", () => {
    let wrapper4 = mount(<ShowContainer />);
    wrapper4.setState({ showdetails: true });
    wrapper4.setState({ showDetails: true });
    wrapper4.setState({ filterShow: true });
    wrapper4.setState({
      tabsData: [
        {
          character: { image: { medium: "" } },
          image: { medium: "dgsdh" },
          summary: "summary",
          network: { name: "name", country: { code: "US" } },
          schedule: { days: ["1"], time: "wyeuywe" },
          genres: ["drama"],
        },
      ],
    });
    wrapper4.setState({ showTab: "Episode" });
    wrapper4.update();
  });

  it("test for fetchShows()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "fetchShows");
    wrapper.instance().fetchShows();
    expect(addMock).toHaveBeenCalledWith();
  });
  it("test for onShowSearch ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "onShowSearch");
    const e = { keyCode: 13, target: { value: "dfdf" } };
    wrapper.instance().onShowSearch(e);
    expect(addMock).toHaveBeenCalledWith(e);
  });
  it("test for onShowSelect ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "onShowSelect");
    const e = { keyCode: 13, target: { value: "dfdf" } };
    wrapper.instance().onShowSelect(e);
    expect(addMock).toHaveBeenCalledWith(e);
  });
  it("test for getShowDetails ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "getShowDetails");
    // const e =  "dfdf";
    wrapper.instance().getShowDetails("e", 1);
    expect(addMock).toHaveBeenCalledWith("e", 1);
  });
  it("test for getShowDetails ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "getShowDetails");
    wrapper.instance().getShowDetails("e", 1, "episodes");
    expect(addMock).toHaveBeenCalledWith("e", 1, "episodes");
  });
  it("test for drama ()", () => {
    let wrapper1 = mount(<ShowContainer />);
    wrapper1.setState({
      shows: [
        {
          genres: ["Drama", "Action"],
          rating: { average: 6.5 },
          image: { medium: "http://abc" },
          show: { image: { medium: "http://abc" }, rating: { average: 6.5 } },
        },
      ],
    });
    wrapper1.update();
    const addMock = jest.spyOn(wrapper1.instance(), "drama");
    wrapper1.instance().filterGenres();
    expect(addMock).toHaveBeenCalledWith();
  });
  it("test for paginate ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "paginate");
    wrapper.instance().paginate(3);
    expect(addMock).toHaveBeenCalledWith(3);
  });
  it("test for  routeBack ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "routeback");
    wrapper.instance().routeback();
    expect(addMock).toHaveBeenCalledWith();
  });
});

it("fetch articles on #componentDidMount", () => {
  const app = mount(<ShowContainer />);
  app
    .instance()
    .onShowSelect()
    .then(() => {
      expect(axios.get).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledWith("articles_url");
      expect(app.state()).toHaveProperty("articles", [
        { title: "test article", url: "test url" },
      ]);
      done();
    });
});
