import React from 'react';
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";


const Todos=({Todo,markComplete})=>{

    return(
        <ListGroup>
        {
           Todo.map(Todo => (
            <ListGroupItem key={Todo.id}  >
              {Todo.todoString }

              <span className="float-right" onClick={()=>markComplete(Todo.id)}>
               <FaCheckDouble/>
              </span>

              
           
            </ListGroupItem>
          ))
        }
      </ListGroup>

    )

   



}
export default Todos;