let note;
let todoIndex = 0;
document.querySelector(".addButton").addEventListener("click", () => {
	note = document.querySelector(".input").value;
	if (note) {
		let noteDiv = document.createElement("div");
		noteDiv.className = "item";
		document.querySelector(".container").appendChild(noteDiv);
		let todo = document.createElement("p");
		todo.className = "item_input";
		document.querySelectorAll(".container .item")[todoIndex].appendChild(todo);
		todo.textContent = note;
		document.querySelector(".input").value = "";
		todoIndex = todoIndex + 1;
	} else {
		alert("Please write something to add it as TODO");
	}
});
