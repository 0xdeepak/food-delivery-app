import {useState} from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import TabOptions from "../../components/common/TabOptions";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/diningOut";
import NightLife from "../../components/nightLife";

const getScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery />;
        case "Dining":
            return <DiningOut />;
        case "NightLife":
            return <NightLife />;
        default:
            return <div>Delivery</div>
    }
}


export default function HomePage(){
    const [activeTab, setActiveTab] = useState("Delivery"); 

    return (
        <div>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {
                getScreen(activeTab)
            }

            <Footer />
        </div>
    )
}