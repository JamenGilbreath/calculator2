import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MovingBall extends Component {
  constructor() {
    super();
    this.state = {
      x: 0, // Initial X position
      y: 0, // Initial Y position
      speedX: 2, // X-axis speed
      speedY: 2, // Y-axis speed
    };
  }

  componentDidMount() {
    // Start animation loop
    this.moveBall();
  }

  moveBall = () => {
    requestAnimationFrame(() => {
      const { x, y, speedX, speedY } = this.state;
      const ball = this.refs.ball;

      const maxX = window.innerWidth - ball.clientWidth;
      const maxY = window.innerHeight - ball.clientHeight;

      let newX = x + speedX;
      let newY = y + speedY;

      // Reverse direction if the ball hits the edge
      if (newX < 0 || newX > maxX) {
        this.setState({ speedX: -speedX });
        newX = x + speedX;
      }

      if (newY < 0 || newY > maxY) {
        this.setState({ speedY: -speedY });
        newY = y + speedY;
      }

      this.setState({ x: newX, y: newY }, () => {
        this.moveBall();
      });
    });
  };

  render() {
    const { x, y } = this.state;
    const ballStyle = {
      position: 'absolute',
      width: '50px',
      height: '50px',
      backgroundColor: 'blue',
      borderRadius: '50%',
      left: x + 'px',
      top: y + 'px',
    };

  //  return <div ref="ball" style={ballStyle}></div>;//

   
  }
}

ReactDOM.render(<MovingBall />, document.getElementById('root'));



