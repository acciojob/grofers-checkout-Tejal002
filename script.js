const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let priceRow=document.querySelectorAll(".price");
	let total=0;
	priceRow.forEach(price=>{
		total+=Number(price.textContent);
	})
	let table=document.querySelector("table");
	let tr=document.createElement("tr");
	let td=document.createElement("td");
	td.colSpan = 2;
	td.textContent = "Total Price: " + total;
	tr.appendChild(td);
	table.appendChild(tr);
	
};

getSumBtn.addEventListener("click", getSum);

