import React from 'react';

const digits = {
    '0': [
        0, 0, 1, 1, 1, 1, 0, 0, 0,
        0, 1, 1, 0, 0, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 0, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 1, 1, 0,
        1, 0, 0, 0, 0, 1, 1, 1, 0,
        1, 0, 0, 0, 1, 1, 0, 1, 0,
        1, 0, 0, 1, 1, 0, 0, 1, 0,
        1, 0, 0, 1, 0, 0, 0, 1, 0,
        1, 0, 1, 0, 0, 0, 0, 1, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 0,
        1, 1, 0, 0, 0, 0, 1, 1, 0,
        0, 1, 1, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 0, 0, 0
    ], '1': [
        0, 0, 0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0, 0, 0,
        0, 1, 1, 0, 1, 0, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 1, 1, 0, 0, 0, 0,
        1, 1, 1, 1, 1, 1, 1, 1, 0
    ], '2': [
        0, 0, 0, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 1, 1, 0,
        0, 1, 1, 0, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 1, 1, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 0
    ], '3': [
        0, 0, 0, 1, 1, 1, 0, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 1, 1, 0, 0, 0, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 1, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 0, 0, 0, 1, 1, 0,
        0, 0, 1, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 1, 1, 1, 0, 0, 0
    ], '4': [
        0, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0, 1, 0,
        1, 1, 0, 0, 0, 0, 0, 1, 0,
        1, 1, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 1, 0
    ], '5': [
        1, 1, 1, 1, 1, 1, 1, 1, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 1, 0,
        1, 0, 0, 0, 0, 0, 0, 1, 0,
        1, 0, 0, 0, 0, 0, 0, 1, 0,
        1, 1, 0, 0, 0, 0, 1, 1, 0,
        0, 1, 1, 0, 0, 0, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 0, 0, 0
    ], '6': [
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 1, 1, 1, 0, 0, 0,
        1, 1, 1, 1, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 1, 1, 0,
        1, 1, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 0, 0, 0, 1, 1, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 0, 1, 1, 1, 0, 0, 0
    ], '7': [
        1, 1, 1, 1, 1, 1, 1, 1, 0,
        1, 1, 1, 0, 0, 0, 1, 1, 0,
        1, 1, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0
    ], '8': [
        0, 0, 0, 1, 1, 1, 0, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 1, 1, 0, 0, 0, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 0, 0, 0, 1, 1, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 0, 1, 1, 1, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 1, 0, 0,
        0, 1, 1, 0, 0, 0, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 0, 0, 0, 1, 1, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 0, 1, 1, 1, 0, 0, 0
    ], '9': [
        0, 0, 0, 1, 1, 1, 0, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 1, 1, 0, 0, 0, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 0, 0, 0, 0, 1, 0,
        0, 0, 1, 0, 0, 0, 1, 1, 0,
        0, 0, 0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0, 0, 0
    ], 'h': [
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 0,
        1, 1, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 1, 0, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 1, 0, 0
    ], 'm': [
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 1, 0, 0, 1, 1, 0,
        1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1,
        1, 1, 0, 0, 0, 1, 0, 0, 1,
        1, 1, 0, 0, 0, 1, 0, 0, 1,
        1, 1, 0, 0, 0, 1, 0, 0, 1,
        1, 1, 0, 0, 0, 1, 0, 0, 1,
        1, 1, 0, 0, 0, 1, 0, 0, 1,
        1, 1, 0, 0, 0, 1, 0, 0, 1,
        1, 1, 0, 0, 0, 1, 0, 0, 1
    ], 's': [
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0, 0, 0,
        1, 1, 0, 0, 0, 1, 1, 0, 0,
        1, 0, 0, 0, 0, 0, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 1, 0, 0, 0,
        1, 0, 0, 0, 0, 1, 1, 0, 0,
        1, 0, 0, 0, 0, 0, 1, 0, 0,
        1, 1, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 0, 0, 0
    ], ' ': []
};

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Segment(props) {

    const style = {
        backgroundColor: props.active ? props.color : 'transparent'
    };

    return (<div className="segment" style={style} />);
}

class Digit extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.data !== this.props.data;
    }

    render() {
        const segments = this.props.data.map((active) => {
            return {
                active: active,
                color: randomColor(),
            };
        })

        return (
            <div className="digit">
                {segments.map((segment, index) => <Segment key={index} {...segment} />)}
            </div>
        );
    }
}

export default class ColorfulDigitCountdown extends React.Component {

    state = {
        secondsRemaining: 0
    }

    componentDidMount() {
        console.log(this.props.date);
        let seconds = Math.floor((this.props.date - new Date()) / 1000);
        console.log(seconds);

        if (seconds < 0) {
            seconds = 0;
        }
        console.log(seconds);

        this.setState({
            secondsRemaining: seconds
        });
        console.log(this.state.secondsRemaining);

        this.updateTime = this.updateTime.bind(this);

        this.interval = setInterval(this.updateTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        delete (this.interval);
    }

    updateTime() {
        let seconds = this.state.secondsRemaining - 1;

        if (seconds < 0) {
            seconds = 0;
        }

        this.setState({
            secondsRemaining: seconds
        });
    }

    render() {
        let remainder = this.state.secondsRemaining;

        const h = Math.floor(remainder / 60 / 60);
        remainder = remainder - h * 3600;
        const m = Math.floor(remainder / 60);
        remainder = remainder - m * 60;
        const s = remainder;

        const display = `${h}h ${("0" + m).slice(-2)}m ${("0" + s).slice(-2)}s`.split('');

        return (
            <div className="clock">
                {display.map((digit, index) => <Digit key={index} data={digits[digit]} />)}
            </div>
        );
    }
};