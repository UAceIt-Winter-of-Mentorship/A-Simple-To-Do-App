import { useState } from "react";
import {Form,InputGroup,Input,Button,FormGroup,InputGroupAddon} from "reactstrap";
import { v4 as uuidv4 } from 'uuid';

const TodoForm=({AddTodo})=>{   // even a method can be passed as parameter
    const[todoString,setTodoString]=useState("")
    
    const HandleSubmit=()=>{

        

        

        

        AddTodo(todoString)
        setTodoString("")



    }
    return(
         
            <Form onSubmit={HandleSubmit}>
        <FormGroup >
            <InputGroup>
                 <Input placeholder="Your Next Todo"
                        value={todoString}
                        onChange={(e)=>{
                            setTodoString(e.target.value)
                        }}/>
                    <InputGroupAddon addonType="append">
                     <Button color="primary">Submit</Button>

                    </InputGroupAddon>
                  
            </InputGroup>
         </FormGroup>
      </Form>
       


    )
}
export default TodoForm;
