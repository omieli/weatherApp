render = new Render 
tempManager = new TempManager

render.loadPage()

$('button').on('click', function () {
    let cityInput = $('input').val()
    render.handleSearch(cityInput)
})

$('#container').on('click','.addIcon', function () { 
    let cityName= $(this).siblings('.name').text()
    tempManager.saveCity(cityName)
    render.loadPage()
})

$('#container').on('click','.removeIcon', function () { 
    let cityName= $(this).siblings('.name').text()
    tempManager.removeCity(cityName)
    render.loadPage()
})