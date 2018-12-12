
+function(partURL){
    var newURL = window.location.href;
    if(newURL.indexOf(partURL)!== -1){
        var value;
    var indexStart = newURL.indexOf(partURL);
    var temp = newURL.slice(indexStart + partURL.length);
    var indexEnd = temp.indexOf('/');
    if(indexEnd!==-1){
        value = temp.slice(0, indexEnd);
    }
    else {
        value = temp;
    }
        alert('Есть параметр callback, со значением: ' + value);
    }
    return;
}('callback=');