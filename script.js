// Create parent div
let parentDiv = document.createElement("div");
parentDiv.classList.add("fixed", "flex", "flex-col", "gap-3");

function createToaster(config) {
    return function(notification) {

        // Create Notification div
        let div = document.createElement("div");
        
        div.textContent = notification;
        let classes = [" font-medium px-5 py-3.5 rounded-md shadow-lg"];


        // set the position of the notification
        let parentClasses = [];
        
        // For X-axis
        switch(config.positionX) {
            case "right":
                parentClasses.push("right-4");
                break;
            case "left":
                parentClasses.push("left-4");
                break;
        }
 
        // For Y-axis
        switch(config.positionY) {
            case "top":
                parentClasses.push("top-4");
                break;
            case "bottom":
                parentClasses.push("bottom-4"); 
                break;
        }

        // Check theme
        if(config.theme === "dark") {
            document.body.className = `bg-black`;
            classes.push("bg-gray-800 text-white");
        } else {
            document.body.className = `bg-white`;
            classes.push("bg-gray-100 text-black");
        }

        parentDiv.classList.add(...parentClasses);
        div.className = classes.join(" ");
        
        document.body.append(parentDiv);
        parentDiv.appendChild(div);
        

        setTimeout(() => {
            div.remove();
        }, config.duration * 1000);
        
    }
}

let toaster = createToaster({
    positionX: "left",
    positionY: "top",
    theme: "dark",
    duration: 3,
});

toaster("This is a dummy notifications!");
toaster("This is a dummy notifications!");
toaster("This is a dummy notifications!");
toaster("This is a dummy notifications!");



