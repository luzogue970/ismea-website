import React, { Component } from 'react';
import "./Event.css";
interface EventProps {
    event: {
        id: number;
        title: string;
        date: string;
        localisation: string;
        image:string;
    };
}

class Event extends Component<EventProps> {
    render() {
        const { event } = this.props;
        return (
            <div className="event-item">
                <img src={event.image} alt={event.image} className={"event-image"}/>
                <h2 className={"event-title"}>{event.title}</h2>
                <p className={"event-localisation"}>lieu : {event.localisation}</p>
                <p className={"event-date"}>Date: {event.date}</p>
            </div>
        );
    }
}

export default Event;
