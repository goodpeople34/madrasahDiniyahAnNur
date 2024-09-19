        let scrollContainer = document.querySelector(".images-gallery")
        let BackBtn = document.getElementById("BackBtn");
        let NextBtn = document.getElementById("NextBtn");


        BackBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -=900;
    })
        NextBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 900;
    });
