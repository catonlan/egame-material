import React from 'react';
import NotFound from '../assets/image/404.jpg';

class Guess extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="notFound">
        {/* <img alt=""
          src={NotFound}
          style={{display: 'block', width: '100%', }}
        /> */}
      </div>
    );
  }
}


export default Guess;
