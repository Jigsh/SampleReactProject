import React,{Component} from 'react';
import {getWeather} from '../modules/actions/weatheraction';
import {submitWeather} from "../modules/actions/weatheraction";
import {getCoOrdinate} from '../modules/actions/weatheraction';
import {getValue} from '../modules/actions/UtilActions'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import WeatherReport from './WeatherReport';
import MapContainer from './MapContainer';
import ComboBox from '../components/Combobox';

import GoogleMapReact from 'google-map-react';

class Weather extends Component {

    constructor(props){

        super(props);
        this.state = {
            weatherObj : {
                city : "",
                list : [{
                    date: "",
                    expectedTemp : "",
                    actualTemp : ""
                }],

            }
        }

        this.showWeather = this.showWeather.bind(this);
        this.approveTemp = this.approveTemp.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
    }

    handleOnchange(name,value) {
        if(name === "city"){
           this.state.city=value;

        }
    }
    showWeather () {

        Promise.resolve(this.props.getWeather(this.state.city)).then((response) => {
            if(this.props.weather.weather){
                console.log("response" + this.props.weather.weather.cod);
                conosle.log("coordinate" + this.props.weather.weather.city.coord);
            }
        })
    }

    approveTemp () {

        //this.state.weatherObj.list[0].actualTemp = state.weather.actualTemp;
        var i=0;
        var weatherObj = {
            city: "",
            list: []
        }
        weatherObj.city = this.props.weather.weather.city.name;
        var weatherByDateTime =
            {
                date: "",
                expectedTemp: "",
                actualTemp: ""
            }
        //var changeTemp = this.state.changeTemp;



        var actualTemp = this.props.getterMethods.setterMethods
        _.each(this.props.weather.weather.list,function(weathertemp){
            var weatherByDateTime =
                {
                    date: "",
                    expectedTemp: "",
                    actualTemp: ""
                }
            weatherByDateTime.date = weathertemp.dt_txt;
            weatherByDateTime.expectedTemp = weathertemp.main.temp;
            weatherByDateTime.actualTemp = actualTemp;
            weatherObj.list.push(weatherByDateTime);
            i = i+1
        })

        this.state.weatherObj = weatherObj;

        Promise.resolve(this.props.submitWeather(this.state.weatherObj)).then((response) =>{

            console.log("Weather Response :" + response);
        })

    }


    render() {

        const options = [
            { value: 'Mumbai', label: 'Mumbai' },
            { value: 'Pune', label: 'Pune' },
            { value: 'London', label: 'London' },
          ];
        const center = {
            lat:19.0760,
            leg:72.8777
      }

        const style = {
           width:'50%',
            hieght:'50%'
        }
        return(<div>
                <div>
                    <span> Login Successfully</span>
                </div>
                <div >
                        <ComboBox name="city" className="midiumtextbox" validate={this.validateText}  changeName={this.handleOnchange} options={options}/>

                    </div>
                <br/>
                <div>
                    <button onClick={ () => this.showWeather()}>Show Weather</button>

                </div>
                <div>
                    <table>
                        <td><WeatherReport  className="" city={this.props.weather.weather !=undefined ? this.props.weather.weather.city.name : ''} list={this.props.weather.weather !=undefined ? this.props.weather.weather.list : '' }/></td>
                        <td><MapContainer   style={style} cityCenter={this.props.weather.weather !=undefined && this.props.weather.weather != ''? this.props.weather.weather.city.coord : '' }/></td>

                    </table>

                </div>
                <div>
                    <button
                        id="btn_app"
                        type="button"
                        className="midiumtextbox"
                        onClick={() => this.approveTemp()}
                    >Approve</button>

                </div>
            </div>

        );

    };

}

const mapStateToProps = (state) => {
    if(state.weather.weather)
    console.log("Weather :" + state.weather.weather.cod);
    return {
        getterMethods : state.getterMethods,
        weather:state.weather
    }
}


function mapDispatchToProps (dispatch)  {
    return  bindActionCreators({getWeather,getCoOrdinate,submitWeather,getValue},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Weather);

