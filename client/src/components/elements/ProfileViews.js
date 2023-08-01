import React from "react";
import Axios from "axios";

function ProfileViews(){
    const [count, setCount] = React.useState([{userCount: "Error with backend"}]);
    React.useEffect(() => {
        Axios.get("http://localhost:3001/getCount")
            .then((response) => {
                setCount(response.data);
                console.log(count[0].userCount);
            })
            .catch((err) => {console.log(err);});
    }, []);

    return  <h1>{ count[0].userCount } </h1>;
};

export default ProfileViews;