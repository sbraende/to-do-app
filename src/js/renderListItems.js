import listItems from "./listData.js";

const renderListItems = (listItems) => {
  const list = document.querySelector(".list");
  list.innerHTML = "";

  listItems.forEach((item, index) => {
    const listItem = document.createElement("li");
    const status = document.createElement("input");
    const taskFields = document.createElement("div");
    const task = document.createElement("p");
    const date = document.createElement("p");

    status.setAttribute("type", "Checkbox");

    listItem.classList.add("list__item");
    status.classList.add("list__item-checkbox");
    taskFields.classList.add("list__item-taskFields");
    task.classList.add("list__item-task");
    date.classList.add("list__item-date");

    status.checked = item.status;
    task.textContent = item.task;
    date.textContent = item.date;

    list.append(listItem);
    listItem.append(status, taskFields);
    taskFields.append(task, date);
  });
};

export default renderListItems;
