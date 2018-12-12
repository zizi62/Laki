function Modal (elements){
    this.modal = document.querySelector(elements.modal);
    this.overlay = document.querySelector(elements.overlay);
    var popup = this;  
    this.open = function (){
        popup.overlay.classList.add('open');
        popup.modal.classList.add('open');
    }
    this.close = function (){
        popup.overlay.classList.remove('open');
        popup.modal.classList.remove('open');
    }
    this.overlay.onclick = this.close;
}

window.onload = function (){
var simpleModal = new Modal({
    modal : '.modal',
    overlay : '.overlay'
});

var temp = false;

function open(){   
   if(temp){
       return;
   }
    simpleModal.open();
    temp=true; 
}

document.addEventListener('mouseleave', open) 

}
