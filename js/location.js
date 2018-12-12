

$(document).ready(function() {
    if (YMaps.location)
    { 
    if(YMaps.location.country ==='Россия'){
        var userCity=YMaps.location.city;
        
      jQuery(".title-small").text('Средство №1 в ' + userCity + ' стабилизирующее выработку инсулина и уровень фосфора в организме');
    }
    else
      jQuery(".title-small").text('Средство №1 в сранах СНГ стабилизирующее выработку инсулина и уровень фосфора в организме');
    
}
    else
        alert("Пожалуйста, разрешите доступ к использованию Вашей геопозиции!");
   
});

   