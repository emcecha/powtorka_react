import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ClockTimeHour extends React.Component {
        render() {
            let hour = this.props.date.getHours().toString();
            return <span>{ hour.length === 1 ? `0${hour}` : hour }</span>
        }
    }

    class ClockTimeMinute extends React.Component {
        render() {
            let minutes = this.props.date.getMinutes().toString();
            return <span>{ minutes.length === 1 ? `0${minutes}` : minutes }</span>
        }
    }

    class ClockTimeSecond extends React.Component {
        render() {
            let seconds = this.props.date.getSeconds().toString();
            return <span>{ seconds.length === 1 ? `0${seconds}` : seconds }</span>
        }
    }

    class ClockTime extends React.Component {
        render() {
            return(
                <h1>
                    <ClockTimeHour date={ this.props.date } />
                    :<ClockTimeMinute date={ this.props.date } />
                    :<ClockTimeSecond date={ this.props.date } />
                </h1>
            );
        }
    }

    class ClockDateYear extends React.Component {
        render() {
            return <span>{ this.props.date.getFullYear() }</span>
        }
    }

    class ClockDateMonth extends React.Component {
        render() {
            let month = (this.props.date.getMonth() + 1).toString();
            return <span>{ month.length === 1 ? `0${month}` : month }</span>
        }
    }

    class ClockDateDay extends React.Component {
        render() {
            let day = this.props.date.getDate().toString();
            return <span>{ day.length === 1 ? `0${day}` : day }</span>
        }
    }

    class ClockDate extends React.Component {
        render() {
            return(
                <h1>
                    <ClockDateYear date={ this.props.date } />
                    -<ClockDateMonth date={ this.props.date } />
                    -<ClockDateDay date={ this.props.date } />
                </h1>
            );
        }
    }

    class Clock extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                date: new Date()
            }
        }

        render() {
            return(
                <div>
                    <ClockTime date={ this.state.date } />
                    <ClockDate date={ this.state.date } />
                </div>
            );
        }

        componentDidMount() {
            this.intervalID = setInterval(() => {
                this.setState({
                    date: new Date()
                });
            }, 1000);
        }

        componentWillUnmount() {
            clearInterval(this.intervalID);
        }
    }

    class App extends React.Component {

        render() {
            return(
                <div>
                    <Clock />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
