class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.fiftyFifty)
        if (this.props.fiftyFifty) {
            return (
                <h1>You win!</h1>
            )
        } else {
            return (
                <h1>You lose!</h1>
            )
        }

    };
};

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render() {
        const expression = Math.random() >= .5
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>
                { /* change code below this line */}
                <Results fiftyFifty={expression} />
                { /* change code above this line */}
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
};
