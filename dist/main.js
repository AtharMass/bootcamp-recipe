const renderData = new Renderer()

const searchRecipes = function () {
    let ingredient = $("#ingredient-input").val()
   
    $.get(`recipes/${ingredient}`, function (recipes) {
        renderData.render(recipes)  
    })

    $("#ingredient-input").val("")
} 

$(document).on('click', '.recipe-image', function() {
    const firstIngredient = $(this).closest(".recipe").find("li").first().text()
    alert(firstIngredient)
})