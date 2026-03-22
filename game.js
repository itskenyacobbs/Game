// const canvas = document.getElementById("game"); //keeping this just in case

kaplay ({
    width: 550,
    height: 550,
    // background: '#FFFFFF',
    scale: 1,
    
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
    // // levelWidth(400);
    // addLevel(map, {
    //     tileWidth: 20,
    //     tileHeight: 10,
    //     tiles: {
    //         "==="
    //     }
    // });

    const player = add([
        rect(20, 20),
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

loadSprite("Trouble", "sprites/troublesprite.png")
const Trouble = add([sprite("Trouble"), 
                    pos(400, 30),
                    scale(3.5),
                    area(),
                ]);
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