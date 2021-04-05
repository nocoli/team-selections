import * as React from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from '@material-ui/icons/Delete';
import api from './api'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

class ManagePlayers extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            players: []
        };
    };

    componentDidMount() {
        this.listPlayers();
    }

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
                <ul>{!!this.state.players && this.state.players.map((player) => {
                    return <li key={player._id}>
                        {player.name} - <IconButton onClick={() => {this.deletePlayer(player)}}><DeleteIcon/></IconButton>
                    </li>
                    }
                )}</ul>
            </div>
        );
    }

    addPlayer = async () => {
        const payload = {name: this.state.newPlayer}

        await api.insertPlayer(payload).then(res => {
            // window.alert(`Movie inserted successfully`)
            console.log(res)
            this.setState(prevState => ({
                players: [...prevState.players, {name: this.state.newPlayer, _id: res.data.id}],
                newPlayer: ''
            }));
        });

    }

    deletePlayer = async (player) => {
        console.log(`Deleting player ${player}`);
        // const payload = {name: this.state.newPlayer}

        await api.deletePlayerById(player._id)
            .then(res => {
                window.alert(`Player deleted successfully`)
                console.log(res)
                var players = [...this.state.players].filter(x => x._id != player._id)
                this.setState(prevState => ({
                    players: players,
                    newPlayer: ''
                }));
            })
            .catch(err => {
                console.log("Whoops!");
                console.log(err);
            });

    }

    listPlayers = async () => {
        await api.getAllPlayers().then(res => {
            console.log(res.data.data);
            // window.alert(`Got all players successfully: ${res}`)
            this.setState({
                players: res.data.data.sort(p => p.name)
            });
        });
      
      }

    queryChanged = (event) => {
        this.setState({newPlayer: event.target.value});
    };
}

export default withRouter(ManagePlayers)