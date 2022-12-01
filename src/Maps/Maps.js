import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
export default class Maps extends Component {
  
  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-3">ISC TESCHA</h1>
        <GoogleMaps
          apiKey={"AIzaSyDuUU3rMstof6lPbyhK-Jy9Lxvuj9e7tU8"}
          style={{ height: "500px", width: "1100px"}}
          zoom={12}
          center={{
            lat: 19.23245296014268,
            lng: -98.84145319844305
          }}
          markers={[
          { lat: 19.23245296014268, lng: -98.84145319844305 },
          { lat: 19.234033241733, lng: -98.84032130630452 },
          { lat: 19.234823376825542, lng: -98.84078801064601 }
          ]}
        />
        <p className="text-center mb-3"> Consumo de Api's </p>
      </div>
    );
  }
}
