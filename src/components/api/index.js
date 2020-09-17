import React from 'react';

class ApiComponent extends React.Component
{
    constructor(props){
        super(props);
        this.state={
           items:[]
        };
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(
            (result)=>{
                this.setState({
                    items:result
                });
            })
    }
    render()
    {
        return(
        <div>
         <table>
            <thead>
            <tr>
                <th class="text-center">id</th>
                <th class="text-center">title</th>
            </tr>
            </thead>
            <tbody>
                {this.state.items.map(emp=>(
                <tr key={emp.id}>
                    <td class="text-center">{emp.id}</td>
                    <td class="text-center">{emp.title}</td>
                </tr>
                ))}
            </tbody>
         </table>        
        </div>);
    }
}  
export default ApiComponent;

