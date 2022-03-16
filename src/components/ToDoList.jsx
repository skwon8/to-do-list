import React, { useState } from "react";


const ToDoList = () => {

    let [addToList, setaddToList] = useState("");
    let [taskList, setTaskList] = useState(false);
    let [toDoList, settoDoList] = useState([])

    const addTask = (e) => {
        e.preventDefault();
        let newListToDo = { addToList, taskList }
        setaddToList("")
        settoDoList([...toDoList, newListToDo])
    }

    const deleteTask = (i) => {
        let filterToDoList = toDoList.filter((task, indexNum) => {
            return indexNum != i;
        })
        settoDoList(filterToDoList)
    }

    const updateList = (i) => {
        let copyOfToDoList = [...toDoList]
        copyOfToDoList[i].taskList = !copyOfToDoList[i].taskList
        settoDoList(copyOfToDoList)
    }

    return (
        <>
            <form onSubmit={addTask}>
                <div className="form-group">
                    <label htmlFor="" className="mb-3">Add To List</label>
                    <input type="text" className="form-control" onChange={(e) => { setaddToList(e.target.value) }} value={addToList} />
                    <input type="submit" value="Add" className="btn btn-success mt-3" />
                </div>
            </form>
            {
                toDoList.map((task, i) => {
                    return <div key={i}>
                        <h3 className="m-3" style = {{textDecoration: task.taskList? "line-through": null}}> {task.addToList} </h3>
                        <div className="">
                            <label htmlFor=""><h5>Check Done!</h5></label>
                            <input onClick={() => updateList(i)} type="checkbox" /> <br />
                            <button onClick={() => deleteTask(i)} className="btn btn-danger">Delete Finished Task</button>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default ToDoList