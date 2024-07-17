const express = require('express');
const router = express.Router();

//function for Getting the list of tasks
router.get('/todos', (req, res) =>{
    console.log("Your tasks are displayed!");
    return res.status(200).json({//setting up an example
        taskID: "1",
        taskDesc: "Walk the dog",
        status: "Not completed"
    });
});

//funtion for Creating a new task
router.post('/todos', (req, res) =>{
    const body = req.body;
    console.log(body)
    return res.status(200).json({
        message: "Task created successfully!"
    });
});

//function for Updating a task
router.put('/todos', (req, res) =>{
    const body = req.body;
    console.log(body)
    return res.status(200).json({
        message: "Task updated successfully!"
    });
});

//function for Deleting a task
router.delete('/todos', (req, res) =>{
    const body = req.body;
    console.log(body)
    return res.status(200).json({
        message: "Task deleted successfully!"
    });
});

module.exports = router;