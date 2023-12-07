import { Component } from "react";

class ArrayDemoComponent extends Component{
    constructor(){
        super();
        this.state={
            arry:[5,3,7,1,2]
        }
    }
    sortArry=(direction)=>{
        let temp =[...this.state.arry];
        switch(direction){
            case 'ASC':
                temp.sort((a,b)=>a-b);
                this.setState(
                    {
                        arry:temp
                    }
                )
                break;
            case 'DESC':
                temp.sort((a,b)=>b-a);
                this.setState(
                    {
                        arry:temp
                    }
                )
                break;
            default:
                break;    
        }

    }

    render(){
        return(
            <div>
                <h3>Welcome to class component</h3>
                <hr />
                {
                    this.state.arry.map((e,index)=>
                    <div key={index}>
                        {e}

                    </div>)
                    
                }
                 
                     <button onClick={()=>this.sortArry('ASC')}>Sort-ASC</button>&nbsp;&nbsp;
                     <button onClick={()=>this.sortArry('DESC')}>Sort-DESC</button>
                 
               
            </div>
        )
    }
}
export default ArrayDemoComponent;