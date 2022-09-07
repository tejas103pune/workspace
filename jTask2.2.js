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
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        printRatingResult(result, i);
        for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
      }
    };
  });

  //function for clear stars
  function clear() {
    for (i = 0; i < starsLength; i++) {
      stars[i].className = starClassUnactive;
    }
  }

  //grab the fields value
  let list = $("#ulList");
  $("#form").submit(function (e) {
    e.preventDefault();
    let todoText = $("#toDoText").val();
    let areaText = $("#testimonial").val();
    clear();
    form.reset();

    // reder the fields values and stars

    let starNo = Number(result.textContent);
    if (starNo == 1) {
        list.append(`
      <li class="p-2 mt-4 bor-style text-secondary">
        ${todoText}                    
      <div class="rate mt-2 case_1">
        <i class="rating__star2 fa fa-star"></i>
      </div>    
        <p class="mt-2">${areaText}</p>
     </li>`);
    } else if (starNo == 2) {
        list.append(
        `<li class="p-2 mt-4 bor-style text-secondary">
         ${todoText}                         
          <div class="rate mt-2 case_1">
            <i class="rating__star2 fa fa-star"></i>
            <i class="rating__star2 fa fa-star"></i>
          </div>    
            <p class="mt-2">${areaText}</p>
        </li>`);
    } else if (starNo == 3) {
        list.append(
        `<li class="p-2 mt-4 bor-style text-secondary">
             ${todoText}                         
          <div class="rate mt-2 case_1">
            <i class="rating__star2 fa fa-star"></i>
            <i class="rating__star2 fa fa-star"></i>
            <i class="rating__star2 fa fa-star"></i>
          </div>    
            <p class="mt-2">${areaText}</p>
       </li>`);
    } else if (starNo == 4) {
        list.append(
        `<li class="p-2 mt-4 bor-style text-secondary">
             ${todoText}                         
         <div class="rate mt-2 case_1">
            <i class="rating__star2 fa fa-star"></i>
            <i class="rating__star2 fa fa-star"></i>
            <i class="rating__star2 fa fa-star"></i>
            <i class="rating__star2 fa fa-star"></i>
        </div>    
            <p class="mt-2">${areaText}</p>
        </li>`);
    } else if (starNo == 5) {
        list.append(
        `<li class="p-2 mt-4 bor-style text-secondary">
            ${todoText}                         
         <div class="rate mt-2 case_1">
            <i class="rating__star2 fa fa-star"></i>
            <i class="rating__star2 fa fa-star"></i>
            <i class="rating__star2 fa fa-star"></i>
            <i class="rating__star2 fa fa-star"></i>
            <i class="rating__star2 fa fa-star"></i>     
        </div>    
            <p class="mt-2">${areaText}</p>
       </li>`);
    } else {
        list.append(
        `<li class="p-2 mt-4 bor-style text-secondary">
            ${todoText}                    
         <div class="rate mt-2 case_0">
            <h4>give some rating</h4>     
         </div>    
            <p class="mt-2">${areaText}</p>
        </li>`);
    }
      
  });
}

function printRatingResult(result, num = 0) {
  result.textContent = `${num}`;
}

executeRating(ratingStars, ratingResult);
