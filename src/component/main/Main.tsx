import React, {Component} from 'react';
import "./Main.css"
import EventList from "./event-components/event-list/EventList";
class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="presentation">
                    <p>Institut des Sciences Mathematiques et Économiques Appliquées</p>
                </div>
                <EventList />
            </div>
        );
    }
}

export default Main;