import { Link } from 'react-router-dom';

function Landing(): JSX.Element {
  return (
    <div className="landing-wrapper">
      <img />
      <div className="landing-text">Lorem impsum dolor sit amet</div>
      <Link to="/exploding-gradient" className="link-button">
        Lets Go!
      </Link>
    </div>
  );
}

export default Landing;
