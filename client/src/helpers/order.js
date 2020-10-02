export const calculateTaskOrder = (prevTask, nextTask) => {
    const prevOrder = prevTask ? prevTask.order : 0;
    const nextOrder = nextTask ? nextTask.order : 10000;
    console.log(prevOrder, nextOrder);
    return (prevOrder + nextOrder) / 2;
};
