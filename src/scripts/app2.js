const reloadMain = () =>    {
    const states = {
        dismissBtn: document.querySelector(".dismiss"),
            
    
        
    };


    
    states.dismissBtn.addEventListener('click', (e) =>   {
        e.preventDefault();
        window.location.href = "/frontmentor_challenge/index.html";
    });


}
reloadMain();
