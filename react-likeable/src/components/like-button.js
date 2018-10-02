import React from 'react';
import './like-button.css';

export default class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: true,
    };
  }

  render(){
    const iconClass = this.state.isLiked ? 'icon liked' : 'icon';
    return (
      <div>
        <h1>Liking a button in react</h1>
        <button className={iconClass}>❤ {this.props.nbLikes}</button>
      </div>
    )
  }
}