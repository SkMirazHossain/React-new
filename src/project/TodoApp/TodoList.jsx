import { MdCheck, MdDeleteForever } from "react-icons/md";
export const TodoList = ({Task,handelDeleteTodo,handleCheckedTodo,checkedItems})=>{
  
    return(
        <section className="myUnOrdList">
        <ul>
          {/* after getting arrey using map methode we retrieve it's data */}
          {Task.map((curTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span className={checkedItems.includes(curTask) ? "checked" : "unchecked"}> {curTask}</span>
                
                <button className="check-btn">
                  <MdCheck onClick={()=> handleCheckedTodo(curTask)}  />
                </button>
                <button className="delete-btn" onClick={()=> handelDeleteTodo(curTask)}>
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
        
      </section>
      
    )
}