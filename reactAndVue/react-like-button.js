'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
  }

  render() {
    const style = this.state.isLiked ? "liked" : "";
    return (
      <div className="react-border">
        <button className={style} onClick={() => this.setState({ isLiked: !this.state.isLiked })}>
          Like ❤
        </button>
      </div>
    );
  }
}
