//All html and css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regina University</title>
    <link rel="stylesheet" href="bcss/bootstrap.css">
    <link rel="stylesheet" href="task1.css">
    <style>
        /* fonts */
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300;400&family=Poppins:wght@100&display=swap');
    
    header{
        /* font-family: 'poppins', sans-serif; */
        background-color: black;
        color: white;
        padding: 10px;
        /* margin: auto; */
    }
    
    </style>
</head>
   
<body>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <img src="assets/softlogo4.png" height="100px" width="300px">
                </div>
                <div class="col-6 text-center">
                    <span>
                        <h3>University Of Regina</h3>
                        <p>011 Pushkarna nager,Swami Vivekanand square,<br>
                        dhamangaoun(rly) Dist: Amravati</p>
                    </span>
                </div>
            </div>
        </div>
    </header>
    <main class="container mt-5">
        <button type="button" id="b1" class=" mt-5 btn btn-primary">Add Row</button>
        <table  class="mt-4 table mainTable" width="100%">
            <thead>
                <tr>
                    <th>Roll Number</th>
                    <th>Student name</th>
                    <th>Math</th>
                    <th>Science</th>
                    <th>S.S.T</th>
                    <th>Total</th>
                    <th>Percentage</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody id="t1" class="totRows">
                
            </tbody>
        </table>
        <table id="t2" class="mt-5 table" width="100%">
            <tr>
                <th>Total Students</th>
                <th >High Marks</th>            
                <th >Lowest Marks</th>
                <th>Average Marks</th>
            </tr>
            <tr>
                <!-- <td><input size="5" style ='border-style:none'></td>
                <td id = "high" ><input size="5" style ="border-style:none;"></td>
                <td id = "low" onchange="average()"><input size="5" style ="border-style: none;"></td>
                <td id= "avrg" ></td> <td><input size="5" style ="border-style: none;"></td> -->
                    <td class="roll"></td>
                    <td class="high"></td>
                    <td class="low"></td>
                    <td class="avg"></td>

            </tr>
        </table>
    </main>
    <!-- <footer></footer> -->
    <!-- scripts -->

    <script src="task1.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/bootstrap.js"></script>
</body>
</html>




//all js

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
  per.innerHTML = parseInt(percent) + "%"

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
