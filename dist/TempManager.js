/**MVC - CONTROLLER*/

class City {
    constructor(name, temperature, conditions, icon) {
        this.name = name,
        this.temperature = temperature,
        this.conditions = conditions,
        this.icon = icon    
     }
}

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
        let Celsius =  Math.round(info.main.temp - 273.15)
        const selectedCity = new City (info.name, Celsius ,info.weather[0].description,info.weather[0].icon)
        this.cityData.push(selectedCity)
    }

    saveCity = function (cityName){
        for (let i = 0; i < this.cityData.length; index++) {
            if (this.cityData[i].name==cityName){
                $.post("/city/", this.cityData[i], function (data, textStatus, jqXHR) {})
                i += this.cityData.length
            }
        }
    }

    removeCity = function (cityName) {
        $.ajax({
            url: '/city/${cityName}',
            method: "DELETE",
            success: function () { }
        })
        
    }
    

}
