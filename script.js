window.addEventListener("DOMContentLoaded", () => {
    /*let loginButton = document.getElementById("login");
    let registerButton = document.getElementById("register");*/
    let headerWrapper = document.querySelector(".header-wrapper");
    let title = document.getElementById("title");

    /*loginButton.addEventListener("click", () => {
        window.location.href = "./login.html";
    });

    registerButton.addEventListener("click", () => {
        window.location.href = "./register.html";
    });*/

    title.addEventListener("click", () => {
        window.location.href = "./index.html";
    });

    window.addEventListener("scroll", () => {
        if(scrollY > 400) {
            headerWrapper.classList.remove("hidden");
            headerWrapper.classList.add("visible");
            headerWrapper.style.position = `fixed`;
            headerWrapper.style.background = `black`;
        } else {
            headerWrapper.classList.remove("visible");
            headerWrapper.classList.add("hidden");  

            headerWrapper.addEventListener("animationend", () => {
                if(!headerWrapper.classList.contains("visible")) {
                    headerWrapper.style.position = `relative`;
                    headerWrapper.style.background = `transparent`;
                }
            })
        }
    });
});