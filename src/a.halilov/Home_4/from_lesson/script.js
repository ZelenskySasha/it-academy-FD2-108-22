

function generateTable(n){
    let table = document.createElement("table");
    
    for(let i = 0; i<n; i++){
        let tr = document.createElement("tr");
        for(let j = 0; j<n; j++){
            let td = document.createElement("td");
            tr.append(td);
            let num1 = i + 1;
            let num2 = j + 1;
            td.textContent = num1 + " " + num2;
            
            if(num1/num2 === 1){
                td.style.backgroundColor = "red";
                td.classList.add("red");

            }
        }
        table.append(tr);
    }
    return table;

}
document.body.append(generateTable(7));

