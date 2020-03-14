$(document).ready(function () {
    let projects = [];
    function addProject(title, image, imageAlt, directLink, github, readMe) {
        let project = { title: title, image: image, imageAlt: imageAlt, directLink: directLink, github: github, readMe: readMe };
        projects.push(project);
    }

    addProject("mysql-sync-query npm package", "assets/images/mysql.PNG", "MySQL npm package", "https://www.npmjs.com/package/mysql-sync-query", "https://github.com/ashkiani/mysql-sync-query", "https://www.npmjs.com/package/mysql-sync-query");
    addProject("The Burger App", "assets/images/Burger.PNG", "Burger App", "https://protected-headland-24713.herokuapp.com/", "https://github.com/ashkiani/burger", "https://github.com/ashkiani/burger/blob/master/README.md");
    addProject("Weather Dashboard", "assets/images/WeatherDashboard.PNG", "Weather Dashboard App", "https://ashkiani.github.io/WeatherDashboard/", "https://github.com/ashkiani/WeatherDashboard", "https://github.com/ashkiani/WeatherDashboard/blob/master/README.md");
    addProject("Password Generator", "assets/images/PasswordGenerator.PNG", "Password Generator App", "https://ashkiani.github.io/Password-Generator/", "https://github.com/ashkiani/Password-Generator", "https://github.com/ashkiani/Password-Generator/blob/master/README.md");
    addProject("Day Planner", "assets/images/DayPlanner.PNG", "Day Planner App", "https://ashkiani.github.io/DayPlanner/", "https://github.com/ashkiani/DayPlanner", "https://github.com/ashkiani/DayPlanner/blob/master/README.md");
    addProject("GOAT", "assets/images/GOAT.PNG", "GOAT App", "https://ashkiani.github.io/GOAT/home.html", "https://github.com/ashkiani/GOAT", "https://github.com/ashkiani/GOAT/blob/master/README.md");
    //addProject("", "", "", "", "","");

    function renderProjects() {
        let projectsEl = $(".projects");
        let numberOfRows = Math.ceil(projects.length / 2);
        let numberOfCols = 2;
        let cellIndex = 0;
        let rowDiv;
        let colEl;
        let colSize = 12 / numberOfCols;
        let htmlString;
        let cellCount = projects.length;
        let brEl;
        for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
            rowDiv = $("<div>");
            rowDiv.addClass("row");
            for (let colIndex = 0; colIndex < numberOfCols; colIndex++) {
                if (cellIndex < cellCount) {
                    project = projects[cellIndex];
                    colEl = $("<div>");
                    colEl.addClass(`col-md-${colSize} border`);
                    htmlString = `<h3>${project.title}</h3> <a href=${project.directLink} target="_blank">
                    <img src=${project.image} alt=${project.imageAlt}  width="100%" height="230px" class="border"></a>
                    <a href=${project.directLink} target="_blank">Direct link to site</a>|
                    <a href=${project.github} target="_blank">GitHub repo</a>|
                    <a href=${project.readMe} target="_blank">ReadMe</a>`;
                    colEl.html(htmlString);
                    rowDiv.append(colEl);
                    cellIndex++;
                }
            }
            brEl = $("br");
            rowDiv.append(brEl);
            projectsEl.append(rowDiv);
        }
       
    }

    renderProjects()
});