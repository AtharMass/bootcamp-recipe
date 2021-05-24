const searchRecipes = function () {
    let ingredient = $("#ingredient-input").val()
   
    $.get(`recipes/${ingredient}`, function (recipes) {

        const source = $('#recipe-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({recipes});
        
        $('.recipes').append(newHTML );
       
        aaa(rosterData)
    })

    $("#ingredient-input").val("")

} 