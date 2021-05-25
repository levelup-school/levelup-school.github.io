const passWin = document.getElementById('passWin'),
    passInput = document.getElementById('pass-input'),
    pass2 = [0, 1, 'ex2', '333', '444', '545'];

let link,
    password;
    

function closewin (block){
    block.style.display = 'none';
}

let pass = {
    show: function (href, numPass){
        link = href;
        password = pass2[numPass];
        passWin.style.display = 'block';
        this.animAdd (passWin, 'win2', 1500);
        passInput.focus();
        window.addEventListener('click', pass.hide);
        passInput.addEventListener('keyup', pass.pressEnter);
    },
    hide: function (e, num){
        if (e.target.closest("#passWin") == null || num == 1){
            closewin(passWin);
            window.removeEventListener('click', pass.hide);
            passInput.removeEventListener('keyup', pass.pressEnter);
        }
    },
    pressEnter: function(event){
        if (event.keyCode == 13){
            event.preventDefault();
            pass.check();
        }
    },
    check: function(){
        if (passInput.value == password){
            window.location.href = link;
        } else {
            passInput.value = '';
            passInput.focus();
            this.animAdd (passWin, 'win2wrong', 1000);
        }
    },
    animAdd: function(block, clsName, time){
        block.classList.add(clsName);
        setTimeout(()=>{
            block.classList.remove(clsName);
        }, time);
    }
};
//window.location.href = link;

console.log (1+1);