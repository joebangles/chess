class Board{
    constructor() {

    }
    function draw()
}


let table = document.getElementById("board")
console.log(table.id)
for(let r of Array(8).keys()){
    let row = document.createElement("tr")
    row.id = "row " + r
    table.appendChild(row)
    for(let c of Array(8).keys()){
        let cell = document.createElement("td")
        cell.id = r + " " + c
        cell.classList.add("square")
        row.appendChild(cell)
        console.log(cell.id)
    }
}