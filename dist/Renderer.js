class Render {
    renderData(allCityData) { 
        const source = $('#city-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(allCityData)
        $('#container').empty().append(newHTML)
    }

    
}