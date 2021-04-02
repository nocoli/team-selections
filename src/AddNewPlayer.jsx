import * as React from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

class AddNewPlayer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            players: props.players,
        };
    };

    render() {
        return (
            <div>
                <TextField id="standard-basic" 
                           label="Standard" 
                           value={this.state.newPlayer}
                           onChange={this.queryChanged}
                           />

                <Button variant="contained" color="primary" onClick={this.addPlayer}>
                    Add Player
                </Button>
                <br/>
                <h3>Current Player List</h3>
                <ul>{this.state.players.map(player => <li>{player}</li>)}</ul>
            </div>
        );
    }

    addPlayer = () => {
        this.setState(prevState => ({
            players: [...prevState.players, this.state.newPlayer],
            newPlayer: ''
        }));
    }

    queryChanged = (event) => {
        this.setState({newPlayer: event.target.value});
    };
}

export default withRouter(AddNewPlayer)