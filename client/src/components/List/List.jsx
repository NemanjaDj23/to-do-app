import React, { PureComponent } from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Task/Task";
import AddTask from "../AddTask/AddTask";
import "./List.scss";

export default class List extends PureComponent {
    handleShowAddButton = () => {
        return this.props.list.id === 1 ? (
            <AddTask listLength={this.props.tasks.length} onCreate={this.props.onTaskCreate}></AddTask>
        ) : null;
    };

    render() {
        return (
            <div className="list-container">
                <h2 className="list-title">{this.props.list.title}</h2>
                <Droppable droppableId={this.props.list.id.toString()}>
                    {(provided) => (
                        <div className="task-list" ref={provided.innerRef} {...provided.droppableProps}>
                            {this.props.tasks.map((task, index) => (
                                <Task
                                    key={task.id}
                                    task={task}
                                    index={index}
                                    onEdit={this.props.onTaskEdit}
                                    onDelete={this.props.onTaskDelete}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                {this.handleShowAddButton()}
            </div>
        );
    }
}
