import React,{Component} from 'react';
import TextFieldArray from '../components/TextFieldArray';
import {setValue} from "../modules/actions/UtilActions";
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';


class WeatherReport extends Component {

    constructor(props){
        super(props);
        console.log(props.city);
        this.state = {
            list: [],
            center: "",
            changeTemp : []
        }


        let tempList = [] ;// listofTemp !=undefined || listofTemp !== "" ? listofTemp : [{weather:"",dt_txt:"2018-02-14",temp:""}];
        this.state.list = props.list == "" ? tempList : props.list;

        this.getCoordinate = this.getCoordinate.bind(this);
        this.getTemp = this.getTemp.bind(this);
        console.log("List:" + this.state.list);
    }


    getCoordinate () {
       /* Promise.resolve(this.props.getCoOrdinate()).then(() => {
            console.log("Center :");
            this.setState({cityCenter:this.props.weather.coordinate});
            console.log("Center :" + this.state.cityCenter.lat);
        })
       */
    }

    getTemp (changeTmp,index) {

        Promise.resolve(this.props.setValue(changeTmp,index)).then(() => {



        })


    }
    render(){

        return(<div  className={this.props.className}>
            <span>Weather Report</span>
            <table>
                <th>City</th>

                <tr>
                    <td>
                        <a  onClick={this.getCoordinate}>{this.props.city}</a>

                    </td>
                    <td>
                        <table>
                            <tbody>
                            <tr>
                                <th>Date</th>
                                <th>Temperature</th>
                                <th>Change</th>
                            </tr>
                            {this.props.list == undefined || this.props.list == "" ? this.state.list.map((data,i) => <TableRow setTemp={this.getTemp} key={i} listIndex={i}  data={data}/>) : this.props.list.map((data,i) => <TableRow setTemp={this.getTemp} key={i} listIndex={i} data={data} />)}
                            </tbody>
                        </table>

                    </td>

                </tr>
            </table>

        </div>);

    }
}

class TableRow extends React.Component {

    constructor(props){
        super(props)
        console.log("Index: " + props.listIndex);
        console.log("data: " + props.data.dt_txt);
        this.handleOnchange = this.handleOnchange.bind(this);
        this.validateText = this.validateText.bind(this);
        this.state = {

            changeTemp: []
        }
    }



    handleOnchange(name,value,index) {
       if(value)
        this.state.changeTemp[index] = value; //this.setState({changeTemp:value});
       this.props.setTemp(value,index);
         console.log("values " + value);
    }

    validateText(value) {
        console.log(value);
        var regex = '[+-]?[^0-9]{0,15}$';
        regex = new RegExp(regex);
        if (regex.test(value)) {
            return true;
        }
        return false;

    }

    render() {
        return (

            <tr>
                <td>{this.props.data.dt_txt}</td>
                <td className="align-right">{this.props.data.main.temp}</td>
                <td>
                    <TextFieldArray  arrayIndex={this.props.listIndex} name="changeTemp"  changeName={this.handleOnchange} className="smalltextbox"  validate={this.validateText}/>

                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {setterMethods : state.setterMethods}
}

const mapDispatchToProps = (disptch) => {

    return bindActionCreators({setValue},disptch)
}

export default connect(mapStateToProps,mapDispatchToProps)(WeatherReport);