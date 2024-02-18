//teste
const loadSucessPage = () =>    {
    let alertMsg;
    
    const states = {
        button: document.querySelector('.submit_btn_main'),
        dismissBtn: document.querySelector(".dismiss"),
        emailInput: document.querySelector("#mail"),
        alertNoInput: document.querySelector(".alert_message"),
            
    
        
    };

    states.alertNoInput.innerHTML ==   alertMsg;
    
    const checkRequired = () => {
        
   

    states.button.addEventListener('click', (e) =>   {        
   
        if(states.emailInput.value === "" || states.emailInput.value  === undefined || states.emailInput.value === null)    {
            states.alertNoInput.innerHTML = "Email is Empty";
            alertMsg = states.alertNoInput.innerHTML;

        }else if(states.emailInput.value.includes("@") === false)   {
            states.alertNoInput.innerHTML = "Valid email required";
            alertMsg = states.alertNoInput.innerHTML;
        }
        
        else{
            states.alertNoInput.innerHTML = "";
            e.preventDefault();
            window.location.href = "../../src/pages/thanks.html";
            
        }
    });


   
   
   
        
        

        
   }
   
   checkRequired();

}
loadSucessPage();



