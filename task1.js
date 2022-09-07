
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
      <td class="totalMarks" id="tot${i}"></td>
      <td id="per${i}"></td>
      <td><input type="button" class="btn btn-danger" value = "DELETE" onclick="deleteRow()">
    </tr>`
  );
  totalStudentCount()
});

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
  per.innerHTML = percent.toFixed(2) + "%"

  createArrayElements()
}

function createArrayElements() {
  let totalArray = []
  const totalMarks = document.querySelectorAll('.totalMarks')
 
  totalMarks.forEach(total => {
    totalArray.push(total.innerHTML)  
  })  

  totalArray.sort(function (a, b) { return a - b });
  const high = document.querySelector('.high')
  const low = document.querySelector('.low')

  low.innerHTML = totalArray[0]
  high.innerHTML = totalArray[totalArray.length -1]

  const avrg = document.querySelector('.avg')
  
  
  var sum = 0;
  for( var i = 0; i < totalArray.length; i++ ){
  sum += parseInt( totalArray[i], 10 ); //don't forget to add the base
  } 
  avrg.innerHTML = parseInt(sum/totalArray.length)
  console.log(totalArray);
   
}
 

const totalStudentCount = () => {
  const mainTable = document.querySelector('.totRows')
  const totalStudent = mainTable.children.length
  console.log(totalStudent)
  document.querySelector('.roll').innerHTML = totalStudent
}




//delete row function
function deleteRow() {
  document.getElementById("t1").deleteRow(0);
}























