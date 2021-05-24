const express = require('express')
const path = require('path')
const urllib = require('urllib')

const app = express()
const port = 8080
let recipes = []
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/modules', express.static(path.join(__dirname, '/node_modules')))

app.get('/sanity', function (request, response) {
    response.send("Ok")
})

app.get('/recipes/:ingredient', function (request, response) {
    const INGREDIENT = request.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${INGREDIENT}`, function(err, res){
        data =  JSON.parse(res.toString())
        recipes = data.results

        recipes = recipes.map(recipe => {
                                return {
                                    ingredients: recipe.ingredients,
                                    title: recipe.title,
                                    thumbnail: recipe.thumbnail,
                                    href: recipe.href,
                                }
                            })   

        response.send(recipes)
    })
})

app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
