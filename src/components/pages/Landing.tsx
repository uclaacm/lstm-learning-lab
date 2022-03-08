import { Link } from 'react-router-dom';

import './../../styles/Landing.scss';

import lstm_img from './../../assets/lstm.png';

function Landing(): JSX.Element {
  return (
    <div className="landing-wrapper">
      <div className="landing-title" >LSTM Learning Lab</div>
      <img src={lstm_img} className="landing-lstm" />
      <div className="landing-text">Long short term memory (LSTM) algorithms are a complex pile of math (and spaghetti).
      However, they have many extremely useful real-
      world applications, and are a useful tool for machine learning students.
      This learning lab provides a more intuitive and accessibile route to learning about these models.</div>
      <Link to="/exploding-gradient" className="landing-button">
        Lets Go!
      </Link>
    </div>
  );
}

export default Landing;
