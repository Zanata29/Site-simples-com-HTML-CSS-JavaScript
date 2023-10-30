const switcher = document.querySelector ('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('Dark-theme')

    var className = document.body.className;
    if(className == "Light-theme"){
        this.textContent="Dark";
    }
    else{
        this.textContent="Light";
    }
    
});