const ratingStars = [...$(".rating__star")];
const ratingResult = $(".rating__result");

printRatingResult(ratingResult);

//function for star clicking
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
      clear();
      form.reset()
         
      // console.log(result.textContent)
      //else if 
      let starNo = Number(result.textContent)
      if (starNo == 1) {
         list.innerHTML += `<li class="p-2 mt-4 bor-style text-secondary">
      ${todoText}                    
      <div class="rate mt-2 case_1">
     <span class="rating__result"></span>
     <i class="rating__star2 fa fa-star"></i>
      </div>    
     <p class="mt-2">${areaText}</p>
    </li>`
      } else if (starNo == 2) {
         list.innerHTML += `<li class="p-2 mt-4 bor-style text-secondary">
        ${todoText}                         
        <div class="rate mt-2 case_1">
       <span class="rating__result"></span>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       </div>    
       <p class="mt-2">${areaText}</p>
      </li>`
      } else if (starNo == 3) {
         list.innerHTML += `<li class="p-2 mt-4 bor-style text-secondary">
        ${todoText}                         
        <div class="rate mt-2 case_1">
       <span class="rating__result"></span>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       </div>    
       <p class="mt-2">${areaText}</p>
      </li>`
      }
      else if (starNo == 4) {
         list.innerHTML += `<li class="p-2 mt-4 bor-style text-secondary">
        ${todoText}                         
        <div class="rate mt-2 case_1">
       <span class="rating__result"></span>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       </div>    
       <p class="mt-2">${areaText}</p>
      </li>`
      }
      else if (starNo == 5) {
         list.innerHTML += `<li class="p-2 mt-4 bor-style text-secondary">
        ${todoText}                         
        <div class="rate mt-2 case_1">
       <span class="rating__result"></span>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>
       <i class="rating__star2 fa fa-star"></i>     
       </div>    
       <p class="mt-2">${areaText}</p>
      </li>`
      }
      else {
         list.innerHTML += `<li class="p-2 mt-4 bor-style text-secondary">
      ${todoText}                    
      <div class="rate mt-2 case_0">
     <span class="rating__result"></span>
     <h4>give some rating</h4>     
     </div>    
     <p class="mt-2">${areaText}</p>
    </li>`
      }
   })
}

function printRatingResult(result, num = 0) {
     result.textContent = `${num}`;
   }

executeRating(ratingStars, ratingResult)












