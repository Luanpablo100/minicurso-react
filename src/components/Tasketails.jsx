import React from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';
import './TaskDetails.css'
import { useHistory } from 'react-router-dom';

const TaskDetails = () => {

    const history = useHistory()

    const params = useParams()

    const handleBackButtonClick = () => {
        history.goBack()
    }

    return ( 

        <>
        <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>Voltar</Button>
        </div>
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod delectus ut nesciunt. Impedit distinctio ex provident esse temporibus quam cumque commodi, aspernatur atque. Vitae voluptatibus earum nesciunt quia neque laborum.</p>
        </div>
        </>
     );
}
 
export default TaskDetails;