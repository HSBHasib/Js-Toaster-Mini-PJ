function createToaster(config) {
    return function(notification) {
        let div = document.createElement("div");

        div.textContent = notification;
        let classes = ["font-medium px-5 py-3.5 rounded-md shadow-lg absolute"];

        // Set Notification position on the webpage
        
        // For X-axis
        switch(config.positionX) {
            case "right":
                classes.push("right-2");
                break;
            case "left":
                classes.push("left-2");
                break;
        }
 
        // For Y-axis
        switch(config.positionY) {
            case "top":
                classes.push("top-4");
                break;
            case "bottom":
                classes.push("bottom-4"); 
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

        div.className = classes.join(" ");
        document.body.append(div);

        setTimeout(() => {
            div.remove();
        }, config.duration * 1000);
        
    }
}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,
});

toaster("This is a dummy notifications!");