+function(quantity, elem, setTime){
    var count = document.querySelectorAll(elem);
    var temp = reduceGoods()
    if(localStorage.getItem('counter')!==null){
        quantity = localStorage.getItem('counter');
    }
    function reduceGoods(){
         return function(){
            localStorage.setItem('counter', quantity);
            for(i=0; i<count.length; i++){
                count[i].innerHTML = quantity;
            }
            if(quantity <=7){ clearInterval(timer); }  
            else quantity--;                          
        }     
    }  
    temp(); 
    var timer = setInterval(temp, setTime);    
    }(15, '.lastpack', 10000);