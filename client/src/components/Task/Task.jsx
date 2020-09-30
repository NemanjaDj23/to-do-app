import React, { PureComponent } from "react";
import { Draggable } from "react-beautiful-dnd";
import Button from "@material-ui/core/Button";
import { Delete, Edit } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import "./Task.scss";

const styles = () => ({
    root: {
        fontSize: "0.7rem",
    },
});

class Task extends PureComponent {
    handleEdit = () => {
        this.props.onEdit(this.props.task);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.task.id);
    };

    render() {
        const { classes } = this.props;

        return (
            <Draggable draggableId={this.props.task.id.toString()} index={this.props.index}>
                {(provided) => (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="task-container"
                    >
                        <h3 className="task-title">{this.props.task.title}</h3>
                        <p className="task-description">{this.props.task.description}</p>

                        <div className="buttons">
                            <Button
                                className={classes.root}
                                color="primary"
                                size="small"
                                startIcon={<Edit />}
                                onClick={this.handleEdit}
                            >
                                Edit
                            </Button>

                            <Button
                                className={classes.root}
                                color="secondary"
                                size="small"
                                startIcon={<Delete />}
                                onClick={this.handleDelete}
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                )}
            </Draggable>
        );
    }
}

export default withStyles(styles)(Task);
