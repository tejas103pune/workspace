let abc = []
const allStars = document.querySelectorAll('.star')

        allStars.forEach(function(star, i){
                star.onclick = function (e) {
                    let currentStar = i + 1;
                  console.log(e.target);
                    allStars.forEach((star,j) => {
    
                        if(currentStar >= j + 1) {
                            star.innerHTML = '&#9733'
                            // console.log(j)
                            abc.push(j)
                        }
                        else{
                            star.innerHTML = '&#9734'
                        }
                    })
                }
        })  
      console.log(abc)

        let btn = document.querySelector("#btnSubmit")
        let list = document.getElementById("ulList");
        
  btn.addEventListener('click', function () {
   let textName = document.querySelector('#todoText').value;
    let areaText = document.querySelector('#testimonial').value        
    
           
    })
    // list.innerHTML = `<li class='listStyle'>${textName}</li>
    //                   <li class='listStyle'>${areaText}</li>`


// let sum =0
// const getStart = () => {
//     const start1 = document.querySelector('#star1');
//     const start2 = document.querySelector('#star2')
//     const start3 = document.querySelector('#star3')
//     const start4 = document.querySelector('#star4')
//     const start5 = document.querySelector('#star5')

//     start1.addEventListener('click', (e) => {
//         console.log('1');
//     })
//     start2.addEventListener('click', (e) => {
//         console.log('2');
//     })
//     start3.addEventListener('click', (e) => {
//         console.log('3');
//         sum =3
//     })
//     start4.addEventListener('click', (e) => {
//         console.log('4');
//         sum = 4
//     })
//     start5.addEventListener('click', (e) => {
//         console.log('5');
//     })

// }
    
// getStart() 

// console.log(sum);