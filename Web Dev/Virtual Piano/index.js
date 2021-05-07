document.addEventListener("keydown", function(event) {
    if (event.code === "KeyA") {
        let AudioA = new Audio("assets/sounds/A.mp3");
        console.log("The 'A' key is pressed.");
        AudioA.play();
    } else if (event.code === "KeyW") {
        let AudioW = new Audio("assets/sounds/W.mp3");
        console.log("The 'W' key is pressed");
        AudioW.play();
    } else if (event.code === "KeyS") {
        let AudioS = new Audio("assets/sounds/S.mp3");
        console.log("The 'S' key is pressed.");
        AudioS.play();
    } else if (event.code === "KeyE") {
        let AudioE = new Audio("assets/sounds/E.mp3");
        console.log("The 'E' key is pressed");
        AudioE.play();
    } else if (event.code === "KeyD") {
        let AudioD = new Audio("assets/sounds/D.mp3");
        console.log("The 'D' key is pressed.");
        AudioD.play();
    } else if (event.code === "KeyF") {
        let AudioF = new Audio("assets/sounds/F.mp3");
        console.log("The 'F' key is pressed.");
        AudioF.play();
    } else if (event.code === "KeyT") {
        let AudioT = new Audio("assets/sounds/T.mp3");
        console.log("The 'T' key is pressed.");
        AudioT.play();
    } else if (event.code === "KeyG") {
        let AudioG = new Audio("assets/sounds/G.mp3");
        console.log("The 'G' key is pressed.");
        AudioG.play();
    } else if (event.code === "KeyY") {
        let AudioY = new Audio("assets/sounds/Y.mp3");
        console.log("The 'Y' key is pressed.");
        AudioY.play();
    } else if (event.code === "KeyH") {
        let AudioH = new Audio("assets/sounds/H.mp3");
        console.log("The 'H' key is pressed.");
        AudioH.play();
    } else if (event.code === "KeyU") {
        let AudioU = new Audio("assets/sounds/U.mp3");
        console.log("The 'U' key is pressed.");
        AudioU.play();
    } else if (event.code === "KeyJ") {
        let AudioJ = new Audio("assets/sounds/J.mp3");
        console.log("The 'J' key is pressed.");
        AudioJ.play();
    } else {
        console.log("An unbound key is pressed.");
    }
});