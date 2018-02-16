import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props){
        super(props)
        console.log("City Center :" +  this.props.cityCenter.lat);
        this.state = {

            center : {
                lat : 55.7522,
                lng : 37.6156
            }
        }
        this.getCoordinate = this.getCoordinate.bind(this);
    }
    componentWillUpdate(){

        console.log("Component will Update : " + this.props.cityCenter.lat);


    }
    getCoordinate() {

        this.setState({center:{lat:18.5204,lng:73.8567}})

        console.log("CoOrdinate" + this.state.center.lat);
       // this.props.setLatLng();

    }
    render() {

        return (
            <Map style= {this.props.style}  initialCenter={this.props.cityCenter!= '' ? this.props.cityCenter : this.state.center  } google={this.props.google} zoom={8}>

                <Marker onClick={this.getCoordinate}
                        name={'Current location'} />


            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBQOZGOzZJ4ErS6sHbhoJzQqD4tlkiasXk")
})(MapContainer)