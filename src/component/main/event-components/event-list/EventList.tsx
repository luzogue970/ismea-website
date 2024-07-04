import React, { Component } from 'react';
import Event from '../event/Event';
import './EventList.css';

interface EventInterface {
    id: number;
    title: string;
    date: string;
    localisation: string;
    image: string;
}

interface EventListState {
    events: EventInterface[];
}

class EventList extends Component<{}, EventListState> {
    state: EventListState = {
        events: []
    };

    componentDidMount() {
        this.setState({
            events: [
                { id: 1, title: "évènement 1", date: "2024-07-15" , localisation: "5 rue des chataigners", image: "https://imgs.search.brave.com/mYuKqM8YeN3Xo0rk0ioz3wRsMz8tw2c9O8pUk5uohlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw"},
                { id: 2, title: "évènement 2", date: "2024-08-20", localisation: "test de d'adresse", image: "https://imgs.search.brave.com/mYuKqM8YeN3Xo0rk0ioz3wRsMz8tw2c9O8pUk5uohlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw" },
                { id: 3, title: "évènement 3", date: "2024-09-10", localisation: "12 rue avignon", image: "https://imgs.search.brave.com/mYuKqM8YeN3Xo0rk0ioz3wRsMz8tw2c9O8pUk5uohlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw" },
                { id: 4, title: "évènement 4", date: "2024-08-20", localisation: "test de d'adresse", image: "https://imgs.search.brave.com/mYuKqM8YeN3Xo0rk0ioz3wRsMz8tw2c9O8pUk5uohlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw" },
                { id: 5, title: "évènement 5", date: "2024-08-20", localisation: "test de d'adresse", image: "https://imgs.search.brave.com/mYuKqM8YeN3Xo0rk0ioz3wRsMz8tw2c9O8pUk5uohlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw" },
                { id: 6, title: "évènement 6", date: "2024-08-20", localisation: "test de d'adresse", image: "https://imgs.search.brave.com/mYuKqM8YeN3Xo0rk0ioz3wRsMz8tw2c9O8pUk5uohlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw" },
                { id: 6, title: "évènement 7", date: "2024-08-20", localisation: "test de d'adresse", image: "https://imgs.search.brave.com/mYuKqM8YeN3Xo0rk0ioz3wRsMz8tw2c9O8pUk5uohlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw" },
                { id: 6, title: "évènement 8", date: "2024-08-20", localisation: "test de d'adresse", image: "https://imgs.search.brave.com/mYuKqM8YeN3Xo0rk0ioz3wRsMz8tw2c9O8pUk5uohlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw" },
                { id: 6, title: "évènement 9", date: "2024-08-20", localisation: "test de d'adresse", image: "https://imgs.search.brave.com/mYuKqM8YeN3Xo0rk0ioz3wRsMz8tw2c9O8pUk5uohlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw" },
                { id: 6, title: "évènement 10", date: "2024-08-20", localisation: "test de d'adresse", image: "https://imgs.search.brave.com/mYuKqM8YeN3Xo0rk0ioz3wRsMz8tw2c9O8pUk5uohlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw" },

            ]
        });
    }

    render() {
        const { events } = this.state;
        return (
            <div className="event-list-container">
                <p>Nos évènements</p>
                <ul className="event-list">
                    {events.map((event) => (
                        <Event key={event.id} event={event} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default EventList;
