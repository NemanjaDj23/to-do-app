import React, { PureComponent } from "react";

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
    root: {
        width: "90%",
        margin: "1rem 1.1rem 0 0.5rem",
    },
});

class AddTask extends PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <Button
                className={classes.root}
                color="primary"
                size="small"
                startIcon={<AddIcon />}
                onClick={this.props.onCreate}
            >
                {this.props.listLength > 0 ? "Add another card" : "Add a card"}
            </Button>
        );
    }
}

export default withStyles(styles)(AddTask);
