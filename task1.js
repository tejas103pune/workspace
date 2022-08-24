// function addRow() {
//   var table = document.getElementById("t1");
//   var row = table.insertRow();
//   var cell1 = row.insertCell();
//   var cell2 = row.insertCell();
//   var cell3 = row.insertCell();
//   var cell4 = row.insertCell();
//   var cell5 = row.insertCell();
//   var cell6 = row.insertCell();
//   var cell7 = row.insertCell();
//   var cell8 = row.insertCell();

//   cell1.innerHTML = `<td></td>`;
//   cell2.innerHTML = `<input size ='10'></input>`;
//   cell3.innerHTML = `<input size ='5' id='m1'></input>`;
//   cell4.innerHTML = `<input size ='5' id='m2'></input>`;
//   cell5.innerHTML = `<input size ='5' id='m3'></input>`;
//   cell6.innerHTML = `<td></td>`;
//   cell7.innerHTML = `<td></td>`;
//   cell8.innerHTML = `<input type='button' value='X' onclick=deleteRow() style = "background:red; border-radius: 50px; width:60px"></input>`;
// }

let table = document.querySelector("#t1");
let i = 0;

document.querySelector("#b1").addEventListener("click", function () {
  i++
  table.insertAdjacentHTML(
    "beforeend",
    `<tr>
      <td>${i}</td> 
      <td><input type="text" size="10"></td>
      <td><input size="5" id="math${i}" onchange="findTotal(${i})"></td>
      <td><input size="5" id="science${i}" onchange="findTotal(${i})"></td>
      <td><input size="5" id="sst${i}" onchange="findTotal(${i})"></td>
      <td calss="totalMarks" id="tot${i}"></td>
      <td id="per${i}"></td>
      <td><input type="button" class="btn btn-danger" value = "DELETE" onclick="deleteRow()">
    </tr>`
  );
    
});
function createArrayElements() {
  let marks = document.getElementsByClassName("totalMarks")
  let totArray = [];
  let elem = marks.value
  console.log(elem)
  for (let i in totArray){
     totArray.push(i)
  }


  // console.log(marks)
  
  
  
  // let elem = marks.value
  // totArray.push(elem)  
}
console.log(createArrayElements())
// console.log(marks)

// console.log(totArray)

// var x 
// function addElemnt() {
//   totArray[x] = document.getElementById(`tot${i}`).value;
//   console.log(x)
// }
// console.log(x)


// console.log(elem)
// totArray.push(elem)
 

function findTotal(i) {
  const math = Number(document.querySelector(`#math${i}`).value)
  const science =Number( document.querySelector(`#science${i}`).value)
  const sst = Number(document.querySelector(`#sst${i}`).value)
  const total = document.querySelector(`#tot${i}`)
  const per = document.querySelector(`#per${i}`)

  let  sum = math + science + sst;
  total.innerHTML = sum
  // console.log(sum);

  let percent = sum / 300 * 100
  per.innerHTML = parseInt(percent) + "%"
}

//delete row function
function deleteRow() {
  document.getElementById("t1").deleteRow(1);
}




// function average() {
//   let highMarks = Number(document.querySelector("#high").value);
//   let lowMarks = Number(document.querySelector("#low").value);
//   let sum = highMarks + lowMarks;
//   let avg = sum /2
//   let totavg = document.getElementById("avrg");
//   totavg.innerHTML = avg;
//   console.log(avg);
// }


















