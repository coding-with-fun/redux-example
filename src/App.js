import { Fragment } from "react";
import Cake from "./containers/Cake";
import IceCream from "./containers/IceCream";
import UserList from "./containers/UserList";

function App() {
    return (
        <Fragment>
            <UserList />
            <Cake />
            <IceCream />
        </Fragment>
    );
}

export default App;
