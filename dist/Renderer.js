class Renderer{
    constructor(){}
    render(data){
        $('.recipes').empty()
        const source = $('#recipe-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({data})

        $('.recipes').append(newHTML )
    }
}