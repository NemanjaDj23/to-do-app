import React, { PureComponent } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import List from "./components/List/List";
import { calculateTaskOrder } from "./helpers/order";
import EditModal from "./components/Modals/EditModal/EditModal";
import CreateModal from "./components/Modals/CreateModal/CreateModal";
import { getTasks, createTask, updateTask, deleteTask } from "./api/tasks";
import { getLists } from "./api/lists";

export default class App extends PureComponent {
    state = {
        tasks: [],
        lists: [],
        editedTask: null,
        createdTask: null,
    };

    async componentDidMount() {
        try {
            const tasks = await getTasks();
            const lists = await getLists();
            this.setState({ tasks: tasks, lists: lists, editedTask: null, createdTask: null });
        } catch (e) {
            console.log(e);
        }
    }

    onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const destinationListTasks = this.state.tasks.filter(
            (task) => task.column_id.toString() === destination.droppableId
        );
        const destinationOrderTask = calculateTaskOrder(
            destinationListTasks[destination.index - 1],
            destinationListTasks[destination.index]
        );

        const taskIndex = this.state.tasks.findIndex((task) => task.id.toString() === draggableId);
        const newTasks = [...this.state.tasks];

        newTasks.splice(taskIndex, 1, {
            ...newTasks[taskIndex],
            column_id: parseInt(destination.droppableId, 10),
            order: destinationOrderTask,
        });

        updateTask(draggableId, newTasks[taskIndex]);

        this.setState({ tasks: newTasks });
    };

    getTasksForColumn = (columnId) => {
        return this.state.tasks
            .filter((t) => t.column_id === columnId)
            .sort((t1, t2) => (t1.order < t2.order ? -1 : 1));
    };

    handleTaskEditOpen = (task) => {
        this.setState({ editedTask: task });
    };

    handleTaskEditClose = () => {
        this.setState({ editedTask: null });
    };

    handleTaskEditSave = (task) => {
        updateTask(task.id, task);

        const taskIndex = this.state.tasks.findIndex((t) => t.id === task.id);
        const newTasks = [...this.state.tasks];

        newTasks.splice(taskIndex, 1, task);

        this.setState({ tasks: newTasks });
    };

    handleTaskCreateOpen = () => {
        this.setState({ createdTask: true });
    };

    handleTaskCreateClose = () => {
        this.setState({ createdTask: null });
    };

    handleTaskCreateSave = async (title, description, column_id) => {
        const { order = 0 } = this.getTasksForColumn(column_id).pop() || {};
        const newTask = {
            title,
            description,
            column_id,
            order: order + 10000,
            id: "",
        };

        const createdTask = await createTask(newTask);
        this.setState({ tasks: [...this.state.tasks, createdTask] });
    };

    handleTaskDelete = (id) => {
        deleteTask(id);

        const taskIndex = this.state.tasks.findIndex((task) => task.id === id);
        const newTasks = [...this.state.tasks];
        newTasks.splice(taskIndex, 1);
        this.setState({ tasks: newTasks });
    };

    render() {
        return (
            <React.Fragment>
                <h1>To do app</h1>

                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className="container">
                        {this.state.lists.map((list) => (
                            <List
                                key={list.id}
                                list={list}
                                tasks={this.getTasksForColumn(list.id)}
                                onTaskEdit={this.handleTaskEditOpen}
                                onTaskDelete={this.handleTaskDelete}
                                onTaskCreate={this.handleTaskCreateOpen}
                            />
                        ))}
                    </div>
                </DragDropContext>

                {this.state.editedTask && (
                    <EditModal
                        task={this.state.editedTask}
                        onClose={this.handleTaskEditClose}
                        onSave={this.handleTaskEditSave}
                    />
                )}

                {this.state.createdTask && (
                    <CreateModal
                        column_id={1}
                        task={this.state.createdTask}
                        onClose={this.handleTaskCreateClose}
                        onSave={this.handleTaskCreateSave}
                    />
                )}
            </React.Fragment>
        );
    }
}
