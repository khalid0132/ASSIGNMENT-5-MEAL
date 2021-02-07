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

function displayMeals(meals) {
  console.log(meals);
  const mainDiv = document.getElementById("display_meals");
  for (let i = 0; i < meals.length; i++) {
    const item = meals[i];
    console.log(item);
    const mealDiv = document.createElement("div");
    mealDiv.className = "meal_div";
    const mealInfo = `
      <div class = 'meal_info'>
      <img src="${item.strMealThumb}">
      <p class = 'meal_name'>${item.strMeal}</p>
      </div>
    `;
    mealDiv.innerHTML = mealInfo;
    mainDiv.appendChild(mealDiv);
    console.log(mainDiv);
  }
  document.getElementById("meal_input").value = "";
}
