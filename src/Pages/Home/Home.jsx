import "./Home.css";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";


export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
 