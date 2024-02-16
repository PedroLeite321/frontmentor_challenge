//teste
const loadSucessPage = () =>    {
    const states = {
        button: document.querySelector('.submit_btn_main'),
        dismissBtn: document.querySelector(".dismiss"),
            
    
        
    };

    states.button.addEventListener('click', (e) =>   {
        e.preventDefault();
        window.location.href = "../../src/pages/thanks.html";
    });

    
    states.dismissBtn.addEventListener('click', (e) =>   {
        e.preventDefault();
        window.location.href = "../../index.html";
    });

    console.log(states.button);
    console.log(states.dismissBtn)

}
loadSucessPage();
