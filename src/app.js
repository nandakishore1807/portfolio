const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {

panel.addEventListener("click", () => {
     removeActiveClasses(); 
     panel.classList.add("active");

});

});

const removeActiveClasses = () => {

panels.forEach((panel) => {

panel.classList.remove("active");

});
};
/*--------------------active section----------------*/
document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== " "){
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            console.log("false");
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
        },500);
    }
})

/*-------menu bar-------*/
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation'); 
menuToggle.onclick= () => { 
navigation.classList.toggle('open');
}

const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
item.onclick= () => {
listItems.forEach(item =>
item.classList.remove('active'));
item.classList.add('active');
}
})
/*-------------Toggle Navbar ----------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",() =>{
     hidesection();
     toggleNavbar();
});
function hidesection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}





