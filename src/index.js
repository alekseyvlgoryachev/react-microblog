import React, {Component} from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../src/index.css";
import App from "./components/app/";

/*
class WhoAmI extends Component {
    // Устаревшая запись
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         years: 26
    //     }
    //     this.nextYear = this.nextYear.bind(this);
    // }

    state = { // class fields
        years: 26
    }

    // Устаревшая запись
    // nextYear() {
    //     console.log(1);
    //     // this.state.years++;
    //     this.setState(state => ({
    //         years: ++state.years
    //     }));
    // }

    nextYear = () => {
        this.setState(state => ({
            years: ++state.years
        }))
    }

    render() {
        const {name, surname, link} = this.props;
        const {years} = this.state;
        return (
            <>
                <button onClick={this.nextYear}>++</button>
                <h1>My name is {name}, surname - {surname}, years = {years}</h1>
                <a href={link} target="_blank">My profile</a>
            </>
        )
    }
}

const All = () => {
    return (
        <>
            <WhoAmI name="John" surname="Smith" link="https://facebook.com/" />
            <WhoAmI name="Ivan" surname="Smith" link="https://vk.com/" />
            <WhoAmI name="Alex" surname="Shepard" link="https://facebook.com/" />
        </>
    )
}
*/

if (typeof App !== "undefined") {
    ReactDOM.render(<App />, document.getElementById("root"));
}

/*
if (typeof All !== "undefined") {
    ReactDOM.render(<All />, document.getElementById("root"));
}
else if (typeof WhoAmI !== "undefined") {
    ReactDOM.render(<WhoAmI name="John" surname="Smith" link="https://facebook.com/" />, document.getElementById("root"));
}
*/