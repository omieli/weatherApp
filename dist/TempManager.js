/**MVC - CONTROLLER*/



class TempManager {
    constructor() { 
        this.cityData = []
    }

    getDataFromDB = async function () {
        this.cityData = await $.get(`/cities`)
        return this.cityData
    }

    getCityData = async function (cityName) {
        let info = await $.get(`city/${cityName}`)
        info = JSON.parse(info)
        let iconUrl = "http://openweathermap.org/img/wn/" + info.weather[0].icon + ".png"
        const selectedCity = { name: info.name,temperature: Math.round(info.main.temp - 273.15),conditions: info.weather[0].description,conditionPic: iconUrl, flag: true}

        this.cityData.push(selectedCity)
    }

    saveCity = function (cityName){
        for (let i = 0; i < this.cityData.length; i++) {
            if (this.cityData[i].name==cityName){
                $.post("/city/", this.cityData[i], function (data, textStatus, jqXHR) { })
                break;
            }
        }
    }

    removeCity = function (cityName) {
        $.ajax({
            url: `/city/${cityName}`,
            method: "DELETE"
        })
        
    }
    

}
