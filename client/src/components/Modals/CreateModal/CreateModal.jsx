import React, { PureComponent } from "react";

import { Modal, Button, IconButton, TextField } from "@material-ui/core";
import { Close, Save } from "@material-ui/icons";
import "../Modals.scss";

export default class CreateModal extends PureComponent {
    state = {
        title: "",
        description: "",
    };

    handleSave = () => {
        this.props.onSave(this.state.title, this.state.description, this.props.column_id);
        this.props.onClose();
    };

    handleTitle = (event) => {
        this.setState({ title: event.target.value });
    };

    handleDescription = (event) => {
        this.setState({ description: event.target.value });
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
                        value={this.state.title}
                        onChange={this.handleTitle}
                        label="Title"
                    />

                    <TextField
                        className="task-description"
                        placeholder="Enter a card text"
                        value={this.state.description}
                        onChange={this.handleDescription}
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
                        disabled={!this.state.title || !this.state.description}
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
