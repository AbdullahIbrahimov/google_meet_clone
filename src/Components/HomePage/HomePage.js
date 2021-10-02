import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import Header from "./../UI/Header/Header";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Premium video meetings. Now free for everyone.</h2>
            <p>We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.</p>
            <div className="action-btn">
              <button className="btn green">
                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                New Meeting
              </button>
              <div className="input-block">
                <div className="input-section">
                  <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                  <input placeholder="Enter a code or link" />
                </div>
                <button className="btn no-bg">Join</button>
              </div>
            </div>
          </div>
          <div className="help-text">
            <a href="">Learn more</a> about Google Meet
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img src="https://lh3.googleusercontent.com/g6WWfSMs3V0w2hhsaoc9myxQXmfO3IcRPwIsSo7nUJkNDHFb2JT4bffBiNH50_seojxYfC3AfBz8xNHd5k7tqXVsjRVvHGfJfAPx-zz8Lk7EQ0cPuA=rwu-v1-w1400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
