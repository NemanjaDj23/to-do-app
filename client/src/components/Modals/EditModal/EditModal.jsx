import React, { PureComponent } from "react";

import { Modal, Button, IconButton, TextField } from "@material-ui/core";
import { Close, Save } from "@material-ui/icons";
import "../Modals.scss";

export default class EditModal extends PureComponent {
    state = {
        task: this.props.task,
    };

    handleSave = () => {
        this.props.onSave(this.state.task);
        this.props.onClose();
    };

    handleTitleChange = (event) => {
        this.setState({ task: { ...this.state.task, title: event.target.value } });
    };

    handleDescriptionChange = (event) => {
        this.setState({ task: { ...this.state.task, description: event.target.value } });
    };

    render() {
        return (
            <Modal open={true} onClose={this.props.onClose}>
                <div className="modal-container">
                    <IconButton className="close-btn" onClick={this.props.onClose}>
                        <Close />
                    </IconButton>
                    <TextField
                        className="task-title"
                        placeholder="Enter a card title"
                        value={this.state.task.title}
                        onChange={this.handleTitleChange}
                        label="Title"
                    />

                    <TextField
                        className="task-description"
                        placeholder="Enter a card text"
                        value={this.state.task.description}
                        onChange={this.handleDescriptionChange}
                        label="Text"
                        variant="outlined"
                        rowsMax={10}
                        multiline
                        fullWidth
                    />

                    <Button
                        className="save-btn"
                        color="primary"
                        size="large"
                        disabled={!this.state.task.title || !this.state.task.description}
                        endIcon={<Save />}
                        onClick={this.handleSave}
                    >
                        Save
                    </Button>
                </div>
            </Modal>
        );
    }
}
