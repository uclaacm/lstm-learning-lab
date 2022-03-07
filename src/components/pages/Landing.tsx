import { Link } from 'react-router-dom';

function Landing(): JSX.Element {
  return(
    <div className="landing_wrapper">
        <img />
        <div className="landing_text">
            Lorem impsum dolor sit amet
        </div>
        <Link to="/exploding-gradient" className="link_button">Lets Go!</Link>
    </div>
  );
}

export default Landing;
