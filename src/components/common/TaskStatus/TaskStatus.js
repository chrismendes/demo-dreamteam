import React from 'react';
import { Link } from 'react-router-dom';
import './TaskStatus.scss';

const TaskStatus = (props) => {

    const task = props.tasks[props.active-1];
    
    return (
        <div className="taskstatus">
            <span className="taskstatus__pre">Task {props.active}/{props.tasks.length}</span>
            <span className="taskstatus__taskname">
                <span className="taskstatus__checkboxoff material-icons">check_box_outline_blank</span>
                <span className="taskstatus__checkboxon material-icons">check_box</span>
                <h2 className="taskstatus__tasknametext">{task.title}</h2>
            </span>
            <span className="taskstatus__taskdesc">{task.description}</span>
            <Link to={task.link} className="taskstatus__button button">Continue &gt;</Link>
            <Link to={task.link} className="taskstatus__buttondisabled button" disabled>Continue &gt;</Link>
        </div>
    );

};

export default TaskStatus;
