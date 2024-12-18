import { useState } from "react";
export const DerivedState = () => {
  // we can also pass arrey as first argument in useState
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ]);

  const userCount = users.length;
  // Derived state: When we calculate someting from props of useState then the variable is called "Derived state" in our case we calculate avg age and "averageAge" is our Derived state
  const averageAge =
    users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;

  // Simple examples of "reduce" it is mainly use for perform operations like summing, averaging,multipling of arrey
  // summing------------
  const numbers = [10, 20, 30];
  const sum = numbers.reduce((accum, currentValue) => accum + currentValue, 0);
  console.log(` the sum is ${sum}`);
  // multipling-----------
  const number = [100, 25, 4];
  const result = number.reduce(
    (accum, currentValue) => accum * currentValue,
    1
  );
  console.log(` the result is ${result}`);

  return (
    <div>
      <h2 className="text-2xl font-bold">Drive State Concept</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
      <p>Total Users: {userCount} </p>
      <p>Average Age: {averageAge}</p>
    </div>
  );
};
