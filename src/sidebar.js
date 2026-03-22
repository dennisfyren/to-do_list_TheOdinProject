import profilePic from "./resources/profilepic.svg";
import searchSvg from "./resources/search-svgrepo-com.svg";

export const showSidebar = function showSidebar(){

    const sidebar = document.querySelector("#sidebar");

    function showProfile(){
        const profile = document.createElement("div");
        profile.classList.add("flex");
        sidebar.appendChild(profile);
        const profileImg = document.createElement("img");
        profileImg.id = "picture";
        profileImg.src = profilePic;
        profile.appendChild(profileImg);
        const name = document.createElement("h2");
        name.textContent = "John Smith";
        profile.appendChild(name);
    }
    function showNav(){
        const nav = document.createElement("div");
        sidebar.appendChild(nav);
        
        const search = document.createElement("input");
        search.type = "text";
        search.placeholder = "Search";
        search.id = "searchbar";
        nav.appendChild(search);
        
        const searchIcon = document.createElement("img");
        searchIcon.src = searchSvg;
        searchIcon.id ="search-icon"
        nav.appendChild(searchIcon)
    }
    function showProjects(){
        const projects = document.createElement("div");
        sidebar.appendChild(projects);
        const temp = document.createElement("p");
        temp.textContent = "Filler for now"
        projects.appendChild(temp);
    }

    showProfile();
    showNav();
    showProjects();
    
}

