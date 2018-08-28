import React from 'react';
import './mickeyButton.scss';

class MickeyButton extends React.Component {
  render() {
    return (<div>
      <div>This is part of another module</div>
      <button className="m-button">mickey</button>
    </div>);
  }
}
export default MickeyButton;
