const todoKey = "reactTodo";
const todoCheck = "reactTodoCheck";


{/* Actually for getting data in local storage we use this "localStorage.getItem"
    As we know that the value which we getting is a string (because it store only string) any our use state is an arrey so using
     this "JSON.parse" we can cover any string into an arrey.
     But there is on issue that at the very first time there is no data in local stroage so it return null
     but in our case "task useState" must be an arrey for overcome this issue we add this condition https://prnt.sc/wvdfcvBi2TgN means if there is no value
     then return empty arrey.
     here "todoKey" is a variable whisch store our data name as string https://prnt.sc/agbS6g3POj-J

"JSON.parse" convert any string  ----> arrey
      
*/}

export const getLocalStorageTodoData = () => {
  const rawTodos = localStorage.getItem(todoKey);
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
};


{/* Actually for storing data in local storage we use this "localStorage.setItem"
"localStorage.setItem" take two arguments first is its name and second is its value but the both of them "MUST BE STRING" but  our date is an arrey
( "task" arrey) fo0 that reason we have to convert it to string and by using this "JSON.stringify".

 "JSON.stringify" convert any arrey ----> string
      
*/}

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem(todoKey, JSON.stringify(task));
};


// we do same thing as above for stroing arrey data of checked items as checked item also return an arrey

export const getLocalStorageTodoCheck = () => {
  const rawTodosCheck = localStorage.getItem(todoCheck);
  if (!rawTodosCheck) return [];
  return JSON.parse(rawTodosCheck);
};

export const setLocalStorageTodoCheck = (task) => {
  return localStorage.setItem(todoCheck, JSON.stringify(task));
};
