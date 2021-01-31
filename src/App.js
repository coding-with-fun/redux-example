import { Fragment } from "react";
import Cake from "./containers/Cake";
import IceCream from "./containers/IceCream";

function App() {
    return (
        <Fragment>
            <Cake />
            <IceCream />
        </Fragment>
    );
}

export default App;
