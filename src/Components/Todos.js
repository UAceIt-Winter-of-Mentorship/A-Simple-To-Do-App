import React from 'react';
import { ListGroup, ListGroupItem } from "reactstrap";


const Todos=({Todo})=>{

    return(
        <ListGroup>
        {
           Todo.map(Todo => (
            <ListGroupItem  >
              {Todo }
           
            </ListGroupItem>
          ))
        }
      </ListGroup>

    )

   



}
export default Todos;