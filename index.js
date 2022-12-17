let note; //TODO Content
let todoIndex = 0;
let tdI = 0;

//adding click event on + button
document.querySelector(".addButton").addEventListener("click", () => {
	//storing todo content in note variable
	note = document.querySelector(".input").value;

	//checking whether note is truthy or falsy
	if (note) {
		//creating outer div for the Todo
		let noteDiv = document.createElement("div");
		noteDiv.className = "item";
		document.querySelector(".container").appendChild(noteDiv);
		noteDiv.style.display = "flex";
		noteDiv.style.gap = "20px";

		//creating inner paragraph element for the Todo
		let todo = document.createElement("p");
		todo.className = "item_input";
		document.querySelectorAll(".container .item")[todoIndex].appendChild(todo);
		todo.textContent = note;

		//creating counter variable to keep track of the Todo Index
		let counter = document.createElement("h3");
		counter.className = "counter";
		document
			.querySelectorAll(".container .item")
			[todoIndex].appendChild(counter);
		counter.textContent = todoIndex;
		counter.style.display = "none";

		//creating EDIT Button
		let editBtn = document.createElement("button");
		editBtn.className = "editButton";
		document
			.querySelectorAll(".container .item")
			[todoIndex].appendChild(editBtn);
		editBtn.textContent = "EDIT";
		editBtn.style.marginRight = "-10px";

		//creating DELETE Button
		let delBtn = document.createElement("button");
		delBtn.className = "deleteButton";
		document
			.querySelectorAll(".container .item")
			[todoIndex].appendChild(delBtn);
		delBtn.textContent = "DELETE";

		//adding delete functionality to delete button
		document
			.querySelectorAll(".container .item .deleteButton")
			[todoIndex].addEventListener("click", () => {
				// let toDelEl = document.querySelectorAll(".container .item")[todoIndex];
				// document.querySelector(".container").removeChild(toDelEl);
				console.log(document.querySelectorAll(".container .item")[todoIndex]);
			});

		//resetting the input field to empty
		document.querySelector(".input").value = "";

		// incrementing the TODO Index for the next Todo
		todoIndex = todoIndex + 1;
	} else {
		alert("Please write something to add it as TODO");
	}
});
// console.log(todoIndex);
// tdI = todoIndex;
// todoIndex = 0;
// while (todoIndex <= tdI) {

// 	todoIndex = todoIndex + 1;
// }
