import React from "react";
import AppR from "./Components/CompBasicos/AppR";
import Maps from "./Maps/Maps";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function Apps() {

    return (
        <><div className="Principal">
            <AppR />
        </div><div>
                <Maps />
            </div></>
    )    
};
export default Apps;

