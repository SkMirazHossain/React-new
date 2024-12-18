import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
  setLocalStorageTodoCheck,
  getLocalStorageTodoCheck
} from "./TodoLocalStorage";
import "./ToDo.css";
export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  // Here we initially pass one empty arrey like this https://prnt.sc/CeMr6fZEKfeb but for getting data from local storage we did this https://prnt.sc/4vhL_jTRrm9t
  const [Task, setTask] = useState(() => getLocalStorageTodoData());
  const [DateTime, setDateTime] = useState("");
  const [checkedItems, setCheckedItems] = useState(() => getLocalStorageTodoCheck());

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handelFormubmit = (event) => {
    {
      /* Here we hadel form submit in our Todo app by storeing data in an arrey but before submitting there are total 4 validation

        1) https://prnt.sc/1XuRXAbnHInH this prevent from submit to reload the page
        2) https://prnt.sc/BAuZvhvmH4oO this check if the user submint blank form it will return nothing.
        3) https://prnt.sc/7KMRq95seugb this is very important step here we check the same entry shound not store again for that
           we use "includes" methode of arrey oparetion by this includes methode we can check that in the "Task" arrey the "inputValue" given by 
            the user is present or not if it present the make the input field empty by this https://prnt.sc/GpcqojD8VnVw and show and alert message.
        4) https://prnt.sc/LeZSx71x9Tcb here on submit we clear the input field   
        
    For creating the new arrey we use this https://prnt.sc/UTiGaXMpFde2 here we pass "prevDate" and by using spread oparetor "...prevData" which
    helps us to spreads all items from the existing "prevData" array, adding them to a new array and also "inputValue" is appended to the end of
    this new array https://prnt.sc/ZG6DSvQFqf2f we get "inputValue" from here https://prnt.sc/ZZG5nGJdemqE.   
        
        */
    }
    event.preventDefault();

    if (!inputValue) return;

    if (Task.includes(inputValue)) {
      setInputValue("");
      return alert(`"${inputValue}" is already present in your Todo list`);
    }

    setInputValue("");

    setTask((prevData) => [...prevData, inputValue]);
  };

  // Todo Date and Time
  {
    /* Here we use now.toLocaleDateString() and now.toLocaleTimeString() to get local time and date  we also get the date and time but I have to
    reload the page to see updated time to overcome this issue we use setInterval where we call this function after every 1000ms or one second
    to get updated date and time (here we also use "useState" to avoid "memory leak" we learn this topic later).   
    */
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  {
    /*todo handleDeleteTodoData functionality here we use filter to get the element on which it is clicking we use this "curTask != value" we use
  not equal to distingusin element if we use "equal to" the it will keep only that element on whick we are clicking.
  actually filter method create one new arrey itarate through each eliment based on condition and remove it if it is "false". SEE THIS ----> https://prnt.sc/Y95EEnnq0kWL 
  and here we pass "value" as argument and here on delete button the argume is curTask https://prnt.sc/pzrUKXBgOHp3 so it compare and remove it if the condition false and
  return new arrey "updatedTask" which update useState.
  
  */
  }

  const handelDeleteTodo = (value) => {
    const updatedTask = Task.filter((curTask) => curTask != value);
    setTask(updatedTask);
  };

  {
    /*

Explanation of this code https://prnt.sc/HuuvD6Y9KCnu

1. const handleCheckedTodo = (curStatus) => {...};
handleCheckedTodo is a function that takes one parameter, curStatus. The purpose of curStatus is to identify the specific item the
user has clicked on to toggle its checked status. This could be a unique identifier, such as an ID or the task name itself.

2. setCheckedItems((prevChecked) => {...});
setCheckedItems is a state update function, typically provided by React’s useState hook, that updates the value of the checkedItems state.
checkedItems is an array that stores items representing all tasks or items that are marked as "checked."
setCheckedItems accepts a function as an argument, which takes the previous state (prevChecked) and returns the new state.
Reason to use a function here? By passing a function to setCheckedItems, React ensures that prevChecked represents the most current state,
even if other updates to checkedItems are occurring simultaneously. This prevents potential bugs caused by stale state.

3. prevChecked.includes(curStatus)
This condition checks whether the current item, curStatus, is already in prevChecked.
prevChecked.includes(curStatus) returns:
true if curStatus is already in prevChecked (indicating the item is currently checked).
false if curStatus is not in prevChecked (indicating the item is not checked).
Purpose of this condition:
If curStatus is already checked (i.e., included in prevChecked), it will be removed, "unchecking" it.
If curStatus is not checked, it will be added to checkedItems, "checking" it.

4. The Ternary Operator
The ternary operator "(condition ? exprIfTrue : exprIfFalse)"" is used here to determine which operation to perform
based on whether curStatus is in prevChecked:

If prevChecked.includes(curStatus) is true then "prevChecked.filter((mytask) => mytask !== curStatus)" is executed.
here filter returns a new array excluding curStatus, effectively removing it from checkedItems.
Explanation of filter:
.filter((mytask) => mytask !== curStatus) iterates over each item in prevChecked.
mytask represents each item in prevChecked.
Only items that do not match curStatus are retained in the new array.
This means that if curStatus is found in prevChecked, it’s removed from the new array, effectively "unchecking" it.

If prevChecked.includes(curStatus) is false then "[...prevChecked, curStatus]"" is executed.
Explanation of [...prevChecked, curStatus]:
"...prevChecked" is the spread operator, which creates a copy of prevChecked in a new array.
curStatus is added as the last element of this new array.
This creates a new array with all previously checked items, plus the newly "checked" curStatus.

5. Result of setCheckedItems
After evaluating the ternary operation, setCheckedItems receives the new array (either with curStatus added or removed) and updates the checkedItems state to this new array.
React then re-renders any components using checkedItems, reflecting the change immediately in the UI.
    
    */
  }

  const handleCheckedTodo = (curStatus) => {
    setCheckedItems((prevChecked) => 
        prevChecked.includes(curStatus) 
            ? prevChecked.filter((mytask) => mytask !== curStatus) 
            : [...prevChecked, curStatus]
    );
};

  
   
   
  

  //add data to localStorage
  setLocalStorageTodoData(Task);

  setLocalStorageTodoCheck(checkedItems);

  //todo handleClearTodoData functionality here we just update the "setTask" arrey with and emply arrey.
  const handleClearTodoData = () => {
    setTask([]);
  };
  return (
    <section className="todo-container">
      <h1>Todo List</h1>
      <h2 className="date-time">{DateTime}</h2>
      <TodoForm
        handleInputChange={handleInputChange}
        handelFormubmit={handelFormubmit}
        inputValue={inputValue}
      />
      <TodoList
        Task={Task}
        handelDeleteTodo={handelDeleteTodo}
        handleCheckedTodo={handleCheckedTodo}
        checkedItems={checkedItems}
      />
      <button className="clear-btn" onClick={handleClearTodoData}>
        Clear all
      </button>
    </section>
  );
};
