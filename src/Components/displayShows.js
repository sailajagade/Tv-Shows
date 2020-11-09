import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scroll-menu";
import "../Css/Shows.css";

const MenuItem = ({ text, onShowSelect }) => {
  return (
    <div>
      <img
        src={text.image && text.image.medium}
        alt={text.name}
        onClick={() => onShowSelect(text)}
      />

      <div class="textcolor"> {text.name}</div>
      <div class="textcolor">
        {" "}
        <i class="fa fa-star" aria-hidden="true"></i>
        {text.rating.average}
      </div>
    </div>
  );
};

export const Menu = (list, onShowSelect, searchFlag) =>
  list.map((el) => {
    return (
      <MenuItem
        text={searchFlag ? el.show : el}
        key={searchFlag ? el.show.id : el.id}
        onShowSelect={onShowSelect}
      />
    );
  });

const Arrow = ({ text, className }) => {
  return (
    <div className={className}>
      <i class={text}></i>
    </div>
  );
};

const ArrowLeft = Arrow({
  text: "fa fa-chevron-circle-left fa-lg",
  className: "arrow-prev",
});
const ArrowRight = Arrow({
  text: "fa fa-chevron-circle-right fa-lg",
  className: "arrow-next",
});

class displayShows extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selected: "item1",
    list: this.props.currentPosts,
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { selected, list } = this.state;
    const { searchFlag, currentPosts, onShowSelect } = this.props;
    const menu = searchFlag
      ? Menu(currentPosts, onShowSelect, searchFlag)
      : Menu(list.data, onShowSelect, searchFlag);

    return (
      <div className="margin">
        <div class="mb-5 pt-5">
          {" "}
          <b>
            <h1 class="margin bg-color"> {this.props.genre} Shows</h1>
          </b>
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
            alignCenter={false}
          />
        </div>
      </div>
    );
  }
}
export default displayShows;
