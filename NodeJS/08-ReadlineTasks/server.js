const rl = require("readline-sync");

let id = 1;
const tasks = [];

const addTask = () => {
  const task = rl.question('Enter task description (or type "exit" to quit): ');
  if (task == "exit") return false;
  else if (task == "") console.log("No task was added.");
  else {
    tasks.push({ ID: id++, Description: task });
    console.log("\nTask added successfully.\n");
  }
  return true;
};

const displayTasks = () => {
  console.log("Current Tasks: ");
  tasks.map((task) => {
    console.log(`ID: ${task.ID}, Description: ${task.Description}`);
  });
};

const showDisplay = () => {
  while (true) {
    const input = rl.question("Do you want to display all tasks? (y/n): ");

    if (input == "y" || input == "n") {
      if (input == "y") displayTasks();
      break;
    } else console.log("Invalid Input! Try Again");
  }
  console.log("");
};

const taskUpdater = () => {
  while (true) {
    const updateId = rl.question("Enter the ID of the task to update: ");
    const updateTask = tasks.find((task) => task.ID == updateId);
    if (!updateTask) {
      console.log("Invalid ID, Try Again");
      continue;
    }
    const updatedDesc = rl.question("Enter the updated task description: ");
    updateTask.Description = updatedDesc;
    console.log(`\nTask with ID ${updateId} updated successfully.\n`);
    break;
  }
};

const taskRemover = () => {
  if (tasks.length == 0) {
    console.log("Task manager is empty.");
    return;
  }
  id--;
  tasks.pop();
  console.log("\nLast task removed successfully.\n");
};

const UpdateRemoveContinue = () => {
  while (true) {
    const opr = rl.question(
      "Do you want to update, remove or continue (1: update, 2: remove, 3: continue): "
    );

    if (opr == 1 || opr == 2 || opr == 3) {
      if (opr == 1) taskUpdater();
      if (opr == 2) taskRemover();
      break;
    } else console.log("Invalid Input! Try Again");
  }
};

// Main Function
while (true) {
  if (!addTask()) break;
  showDisplay();
  UpdateRemoveContinue();
}

console.log("\nExiting Task Manager. Goodbye!\n");

/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter task description: ", (task) => {
  console.log(`Entered task : ${task}`);
  rl.close();
});
*/
