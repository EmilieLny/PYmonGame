import React from "react";

export default class Backbutton extends React.Component {
    // goToMenu(){
    //     console.log("went back to menu")
    // }

    render() {
        return (
        <a className="backButton" href="/games" >
            <i class="fas fa-arrow-left"></i>
            Go Back
        </a>
        )
    }
}