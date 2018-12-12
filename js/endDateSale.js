+function(days,elem){
    var date = new Date;
    var dd = date.getDate() + days;
    if (dd < 10) dd = '0' + dd;
    var mm = date.getMonth()+1;
    if (mm < 10) mm = '0' + mm;
    var yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;
    endDatesale = document.querySelectorAll(elem);
    for(i=0; i< endDatesale.length; i++){
        endDatesale[i].innerHTML = dd + '.' + mm + '.' + yy;
    }

}(2,'.x_price_previous');
