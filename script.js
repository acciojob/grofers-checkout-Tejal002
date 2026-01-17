const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    let priceRow = document.querySelectorAll(".prices"); // FIXED class
    let total = 0;

    priceRow.forEach(price => {
        total += Number(price.textContent);
    });

    // FIX: show answer in #ans
    let ans = document.getElementById("ans");
    ans.textContent = total;
};

getSumBtn.addEventListener("click", getSum);
