export const TodoForm = ({handelFormubmit,handleInputChange,inputValue})=>{
    return(
        <section className="form">
        <form onSubmit={handelFormubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
    )
}