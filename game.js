// const canvas = document.getElementById("game"); //keeping this just in case

kaplay ({
    width: 650,
    height: 650,
    scale: 1,
    background: '#CFE3FC',
    buttons: {
        up: {
            keyboard: ["up", "w"],
        },
        down: {
            keyboard: ["down", "s"],
        },
        left: {
            keyboard: ["left", "a"],
        },
        right: {
            keyboard: ["right", "d"],
        }
    }
});

debug.log("Hello, World");

scene("test", () => {
    const player = add([
        rect(30, 30),
        pos(40, 40),
        color(0,0,255),
        area(),
        // move(screenLeft, 100),
    ]);

    onKeyDown("up", () => {
        player.move(0, -200);
    });
     onKeyDown("left", () => {
        player.move(-200, 0);
    });
    onKeyDown("right", () => {
        player.move(200, 0);
    });
    onKeyDown("down", () => {
        player.move(0, 200);
    });
});



//Setting up my scenes to have 6 rooms/screens
scene("wake_up", () => {

})

scene("explore", () => {

})

scene("first_npc", () => {

})

scene("explore_more", () => {

})

scene("second_npc", () => {

})

scene("end", () => {

})

go("test");