import * as React from 'react';
import {Link as RouterLink} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

class ListItemLink extends React.Component {

    render() {
        return (
            <li>
                <MenuItem button component={this.link()} onClick={this.props.onClick}>
                    {this.props.icon ? <ListItemIcon>{this.props.icon}</ListItemIcon> : null}
                    {this.props.primary}
                </MenuItem>
            </li>
        );
    }

    link = () => {
        return React.forwardRef((itemProps, ref) => (
            <RouterLink to={this.props.to} {...itemProps} innerRef={ref} />
        ));
    };
}

export default ListItemLink;
