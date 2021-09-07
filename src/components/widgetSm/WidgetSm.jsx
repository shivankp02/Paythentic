import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://source.unsplash.com/WLUHO9A_xik/50x50"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser"> 
            <span className="widgetSmUsername">Shivank Pandey</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <Link className="Link" to="/Users">
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://source.unsplash.com/WLUHO9A_xik/50x50"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tanay Patel</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <Link className="Link" to="/Users">
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://source.unsplash.com/WLUHO9A_xik/50x50"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Md. Irfan</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <Link className="Link" to="/Users">
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://source.unsplash.com/WLUHO9A_xik/50x50"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anant Raj</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <Link className="Link" to="/Users">
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://source.unsplash.com/WLUHO9A_xik/50x50"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Shashank Pandey</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <Link className="Link" to="/Users">
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}