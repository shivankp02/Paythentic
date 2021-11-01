import "./FeaturedInfo.css";
import { Link } from "react-router-dom";

export default function FeaturedInfo() {
    return (
        <>
            <div className="featured">
                <button className="btn"> 
                    <Link className="btnLink" to="/Project">
                        <i class="fas fa-book"> Projects : 72</i>
                    </Link>
                </button>
                <button className="btn">
                    <Link className="btnLink" to="/Users">
                        <i class="fas fa-user" > User :20</i>
                    </Link>
                </button>
            </div>        
        </>
    )
}
