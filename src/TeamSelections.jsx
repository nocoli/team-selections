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

class TeamSelections extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            teams: []
        };
    };

    componentDidMount() {
        this.listTeams();
    }

    render() {
        return (
            <div>
                <ul>{!!this.state.teams && this.state.teams.map((team) => {
                    console.log('wut');
                    return <li key={team._id}>
                        {team.competition}
                    </li>
                    }
                )}</ul>
            </div>
        );
    }


    listTeams = async () => {
        await api.getAllTeams().then(res => {
            console.log(res.data.data);
            
            this.setState({
                teams: res.data.data.sort(t => t._id)
            });
        });
      
      }
}

export default withRouter(TeamSelections)