// let HOME = 0;
// let ABOUT = 1;
// let INFO = 2;
// let REVIEWS = 3;
// let CONTACT = 4;

// let activeContent = HOME;

// function loadContent(content) {
//     let xhttp = new XMLHttpRequest();
//     let target=document.getElementById("content-frame");
//     let file;

//     switch(content) {
//         case HOME:
//             file = "home.html";
//             break;
//         case ABOUT:
//             file = "about.html";
//             break;
//         case INFO:
//             file ="info.html";
//             break;
//         case REVIEWS:
//             file = "reviews.html";
//             break;
//         case CONTACT:
//             file = "contact.html";
//             break;
//         default:
//             break;
//     }

//     xhttp.onreadystatechange = function() {
//         if(this.readyState == 4) {
//             if(this.readyState == 200)
//                 target.innerHTML = this.responseText;
//             if(this.readyState == 404)
//                 target.innerHTML = "<h1>Error 404: Page not found</h1>";
//         }
//     }

//     xhttp.open("GET", "../content/${file}", true);
//     xhttp.send();

//     return;
// }

// function clearActive(content) {
//     switch(content) {
//         case HOME:
//             document.getElementById("nav-menu-Home-btn").classList.remove("nav-menu-active");
//             document.getElementById("nav-list-Home-btn").classList.remove("nav-list-active");
//             break;
//         case ABOUT:
//             document.getElementById("nav-menu-About-btn").classList.remove("nav-menu-active");
//             document.getElementById("nav-list-About-btn").classList.remove("nav-list-active");
//             break;
//         case INFO:
//             document.getElementById("nav-menu-Info-btn").classList.remove("nav-menu-active");
//             document.getElementById("nav-list-Info-btn").classList.remove("nav-list-active");
//             break;
//         case REVIEWS:
//             document.getElementById("nav-menu-Reviews-btn").classList.remove("nav-menu-active");
//             document.getElementById("nav-list-Reviews-btn").classList.remove("nav-list-active");
//             break;
//         case CONTACT:
//             document.getElementById("nav-menu-Contact-btn").classList.remove("nav-menu-active");
//             document.getElementById("nav-list-Contact-btn").classList.remove("nav-list-active");
//             break;
//         default:
//             break;
//     }
// }

// function setActive(content) {
//     clearActive(activeContent);
//     switch(content) {
//         case HOME:
//             document.getElementById("nav-menu-Home-btn").classList.add("nav-menu-active");
//             document.getElementById("nav-list-Home-btn").classList.add("nav-list-active");
//             activeContent = HOME;
//             break;
//         case ABOUT:
//             document.getElementById("nav-menu-About-btn").classList.add("nav-menu-active");
//             document.getElementById("nav-list-About-btn").classList.add("nav-list-active");
//             activeContent = ABOUT;
//             break;
//         case INFO:
//             document.getElementById("nav-menu-Info-btn").classList.add("nav-menu-active");
//             document.getElementById("nav-list-Info-btn").classList.add("nav-list-active");
//             activeContent = INFO;
//             break;
//         case REVIEWS:
//             document.getElementById("nav-menu-Reviews-btn").classList.add("nav-menu-active");
//             document.getElementById("nav-list-Reviews-btn").classList.add("nav-list-active");
//             activeContent = REVIEWS;
//             break;
//         case CONTACT:
//             document.getElementById("nav-menu-Contact-btn").classList.add("nav-menu-active");
//             document.getElementById("nav-list-Contact-btn").classList.add("nav-list-active");
//             activeContent = CONTACT;
//             break;
//         default:
//             break;
//     }
// }

function toggleNavMenu() {
    let toggle_menu = document.getElementById("toggle-menu");
    let menu_items = toggle_menu.children;
    for(item of menu_items) {
        item.classList.toggle("collapsed-nav-menu-item");
    }
}

function navMenuCollapsed() {
    let toggle_menu = document.getElementById("toggle-menu");
    return(toggle_menu.children[0].classList.contains("collapsed-nav-menu-item"));
} 

// function navigate(content) {
    //switch(content) {
    //     case HOME:
    //         activeContent = HOME;
    //         break;
    //     case ABOUT:
    //         activeContent = ABOUT;
    //         break;
    //     case INFO:
    //         activeContent = INFO;
    //         break;
    //     case REVIEWS:
    //         activeContent = REVIEWS;
    //         break;
    //     case CONTACT:
    //         activeContent = CONTACT;
    //         break;
    //     default:
    //         break;
    // }
//     setActive(content);
//     loadContent(content);
//     if(navMenuCollapsed() == false)
//         toggleNavMenu();
// }

function navigateHome() {
    // navigate(HOME);
    window.location.href='index.html';
}

function navigateAbout() {
    //navigate(ABOUT);
    window.location.href="about.html";
}

function navigateInfo() {
    // navigate(INFO);
    window.location.href="info.html";
}

function navigateReviews() {
    // navigate(REVIEWS);
    window.location.href='reviews.html';
}

function navigateContact() {
    // navigate(CONTACT);
    window.location.href='contact.html';
}