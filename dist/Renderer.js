/**MVC - VIEW*/

class Render {
    renderData(allCityData) { 
        const source = $('#city-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(allCityData)
        $('#container').empty().append(newHTML)
    }

    loadPage = async function(){
        let cityInfo = await tempManager.getDataFromDB()
        render.renderData(cityInfo)
    }
    
    handleSearch = async function(cityInput){
        $('input').val("")
        await tempManager.getCityData(cityInput)
        render.renderData(tempManager.cityData)
    }
}