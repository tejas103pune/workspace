const ratingStars = [...document.getElementsByClassName("rating__star")];
const ratingResult = document.querySelector(".rating__result");

printRatingResult(ratingResult);

function executeRating(stars, result) {
   const starClassActive = "rating__star2 fa fa-star";
   const starClassUnactive = "rating__star fa fa-star";
   var starsLength = stars.length;
   let i;
   stars.map((star) => {
      star.onclick = () => {
         i = stars.indexOf(star);

         if (star.className.indexOf(starClassUnactive) !== -1) {
            printRatingResult(result, i + 1);
             for (i; i >= 0; --i)
                 stars[i].className = starClassActive;
         } else {
            printRatingResult(result, i);
            for (i; i < starsLength; ++i)
             stars[i].className = starClassUnactive;
         }
      };
   });   
      function clear(){
         for(i = 0;i<starsLength;i++){
            stars[i].className = starClassUnactive;

         }
      }
   
   const form = document.getElementById('form')
   let list = document.getElementById("ulList");
   
   form.addEventListener('submit', (e) => {
       e.preventDefault();
       let todoText = todoForm.elements["todo"].value
       let areaText = todoForm.elements["testimonial"].value   
           clear()
       form.reset()    
    let starNo = Number(ratingResult.innerHTML)
    switch(starNo){
        case 5:
        return(list.innerHTML += `<li class="p-2 mt-4 bor-style text-secondary">
        ${todoText}
       <div class="rate mt-2 case_5">
       <span class="rating__result"></span>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>     
       </div>    
       <p class="mt-2">${areaText}</p>
      </li>`)
      case 1:
        return(list.innerHTML += `<li class="p-2 mt-4 bor-style text-secondary">
        ${todoText}                    
       
       
        <div class="rate mt-2 case_1">
       <span class="rating__result"></span>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star fa fa-star"></i>
       <i class="rating__star fa fa-star"></i>
       <i class="rating__star fa fa-star"></i>
       <i class="rating__star fa fa-star"></i>     
       </div>    
       <p class="mt-2">${areaText}</p>
      </li>` )
      case 2:
        return(list.innerHTML += `<li class="p-2 mt-4 bor-style text-secondary">
        ${todoText}                    
       
       
        <div class="rate mt-2 case_2">
       <span class="rating__result"></span>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star fa fa-star"></i>
       <i class="rating__star fa fa-star"></i>
       <i class="rating__star fa fa-star"></i>     
       </div>    
       <p class="mt-2">${areaText}</p>
      </li>` )
      case 3:
        return(list.innerHTML += `<li class="p-2 mt-4 bor-style text-secondary">
        ${todoText}                    
       
       
        <div class="rate mt-2 case_3">
       <span class="rating__result"></span>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star fa fa-star"></i>
       <i class="rating__star fa fa-star"></i>     
       </div>    
       <p class="mt-2">${areaText}</p>
      </li>` )
      case 4:
        return(list.innerHTML += `<li class="p-2 mt-4 bor-style text-secondary">
        ${todoText}                    
       
       
        <div class="rate mt-2 case_4">
       <span class="rating__result"></span>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star fa fa-star"></i>     
       </div>    
       <p class="mt-2">${areaText}</p>
      </li>` )
      default :
        return(list.innerHTML += `<li class="p-2 mt-4 bor-style text-secondary">
        ${todoText}                    
       
       
        <div class="rate mt-2 case_0">
       <span class="rating__result"></span>
       <h4>give some rating</h4>     
       </div>    
       <p class="mt-2">${areaText}</p>
      </li>` )
     }

})

}


function printRatingResult(result, num = 0) {
   result.textContent = `${num}`;
}

executeRating(ratingStars, ratingResult);
