import "./FeaturedInfo.css";
import { Link } from "react-router-dom";

export default function FeaturedInfo() {
    return (
        <> 
            <div className="featured">
                <button className="btn"> 
                    <Link className="btnLink" to="/Users">
                        <h1 >72</h1>  
                        <h2 >Projects</h2>
                        <i class="fas fa-book" ></i>
                    </Link>
                </button>
                <button className="btn">
                    <Link className="btnLink" to="/Users">
                        <h1 >20</h1>  
                        <h2 >Users</h2>
                        <i class="fas fa-user" ></i>
                    </Link>
                </button>
            </div>        
        </>
    )
}
