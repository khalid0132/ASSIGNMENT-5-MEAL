document.getElementById("search_button").addEventListener("click", () => {
  const mealInput = document.getElementById("meal_input").value;
  // console.log(mealInput.value);
  showCookingMaster(mealInput);
});

const showCookingMaster = (alphabet) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabet}`)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  console.log(meals);
  const mainDiv = document.getElementById("display_meals");
  document.getElementById("display_meals").innerHTML = "";
  for (let i = 0; i < meals.length; i++) {
    const item = meals[i];
    // console.log(item);
    const mealDiv = document.createElement("div");
    mealDiv.className = "meal_div";
    const mealInfo = `
      <div class = 'meal_info' id='meal_info'>
      <img src="${item.strMealThumb}">
      <p class = 'meal_name'>${item.strMeal}</p>
      </div>
      `;
    mealDiv.innerHTML = mealInfo;
    mainDiv.appendChild(mealDiv);
    // console.log(mainDiv);
    document.getElementById("meal_input").value = "";
  }
};

document.getElementById("display_meals").addEventListener("click", function () {
  // console.log(e.target);

  mealIngredient(meal_info);
});
function mealIngredient(strMeal) {
  fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=${strMeal}`)
    .then((res) => res.json())
    .then((data) => displayIng(data.meals));
}

function displayIng(meals) {
  console.log(meals);
  const showIngredient = document.getElementById("show_ingredient");
  // strDiv.innerHTML = "";
  for (let i = 0; i < meals.length; i++) {
    const ingItem = meals[i];
    console.log(ingItem);
    const strDiv = document.createElement("div");
    // strDiv.className = "str_div";
    const strInfo = `
        <div class= 'str_name' id='str_name'>
          <p>${ingItem.strIngredient}</p>
        </div>
      `;
    strDiv.innerHTML = strInfo;
    showIngredient.appendChild(strDiv);
    // console.log(showIngredient);
  }
}
