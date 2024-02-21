const reloadMain = () =>    {
    const states = {
        dismissBtn: document.querySelector(".dismiss"),
            
    
        
    };


    
    states.dismissBtn.addEventListener('click', (e) =>   {
        e.preventDefault();
        window.location.href = "/../../index.html";
    });


}
reloadMain();
