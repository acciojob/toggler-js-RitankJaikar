//your JS code here. If required.
let good= document.querySelector("#good");
let cheap= document.querySelector("#cheap");
let fast= document.querySelector("#fast");
let inputs= document.querySelectorAll(".toggle");

inputs.forEach(input => {
	input.addEventListener("change", (e) => {
		checkAndUpdateToggles(e);
	})
})

function checkAndUpdateToggles(e) {
	let count= 0
	inputs.forEach(input => {
		if(input.checked) {
			count++;
		}
	})
	if(count>2) {
		for(let input of inputs) {
			if(input.checked && input!==e.target) {
				input.checked= false;
				break;
			}
		}
	}
}




