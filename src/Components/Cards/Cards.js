import React from 'react';
import circleImg from '../../images/circles.png';
import './style.css';

class Cards extends React.Component {
  render() {
    const { title, description, img, leftColor, rightColor } = this.props;
    return (
      <div
        className="card mx-auto Fitness-Card"
        style={{
          backgroundImage: `url(${circleImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`,
        }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img className="float-right" src={img} alt="" />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
