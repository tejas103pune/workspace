let i = 0;
$("#b1").click(function () {
  i++;
  $("#t1").append(`<tr>
        <td>${i}</td> 
        <td><input type="text" size="10"></td>
        <td><input size="5" id="math${i}" onchange="findTotal(${i})"></td>
        <td><input size="5" id="science${i}" onchange="findTotal(${i})"></td>
        <td><input size="5" id="sst${i}" onchange="findTotal(${i})"></td>
        <td class="totalMarks" id="tot${i}"></td>
        <td id="per${i}"></td>
        <td><input type="button" class="btn btn-danger" value = "DELETE" onclick="deleteRow()">
      </tr>`);
  totalStudentCount()
});

//for sindinf subject's total marks
function findTotal(i) {
  const math = Number($(`#math${i}`).val());
  const science = Number($(`#science${i}`).val());
  const sst = Number($(`#sst${i}`).val());
  const total = $(`#tot${i}`);
  const per = $(`#per${i}`);

  let sum = math + science + sst;
  total.html(sum);
  
  let percent = (sum / 300) * 100;
  per.html(percent.toFixed(2) + "%");
    
createArrayElement()
}

//creating an array of all totals
function createArrayElement() {
  let totalArray = [];
    const totalMarks = document.querySelectorAll('.totalMarks')
    totalMarks.forEach(total => {
        totalArray.push(total.innerHTML)
    })
  
    totalArray.sort(function (a, b) { return a - b })
    const high = $('.high')
    const low = $('.low')
    low.html(totalArray[0]);
    high.html(totalArray[totalArray.length - 1])
    
    const avrg = $('.avg')
    var sum = 0;
    for (var i = 0; i < totalArray.length; i++){
        sum += parseInt(totalArray[i], 10)
    }
    avrg.html( parseInt(sum / totalArray.length))
     console.log(totalArray)
}

// counting the totl students
const totalStudentCount = () => {
    const mainTable = document.querySelector('.totRows')
    const totalStudent = mainTable.children.length
    console.log(totalStudent)
    $('.roll').html(totalStudent)
}

//for deleting the button
function deleteRow() {
  document.getElementById("t1").deleteRow(0);
}
