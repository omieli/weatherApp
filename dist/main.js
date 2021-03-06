render = new Render 
tempManager = new TempManager

render.loadPage()

$('#button').on('click', function () {
    let cityInput = $('input').val()
    render.handleSearch(cityInput)
    render.loadPage()
})

$('#container').on('click','#addIcon', function () { 
    let cityName= $(this).siblings('.title').text()
    tempManager.saveCity(cityName)
    render.loadPage()
})

$('#container').on('click','#removeIcon', function () { 
    let cityName= $(this).siblings('.title').text()
    tempManager.removeCity(cityName)
    render.loadPage()

    
})


$(document).ready(function(){
    $('.parallax').parallax();
  });
