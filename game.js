// const canvas = document.getElementById("game"); //keeping this just in case

kaplay ({
    width: 320,
    height: 288,
    //background: '#FFFFFF',
    scale: 2,
    
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
        },
        space: {
            keyboard: ["space"]
        }
    }
});

// debug.log("Hello, World");

scene("test", () => {
    // // levelWidth(400);
    // addLevel(map, {
    //     tileWidth: 20,
    //     tileHeight: 10,
    //     tiles: {
    //         "==="
    //     }
    // });

    loadSprite("trouble", "sprites/troublesprite.png")
const trouble = add([sprite("trouble"), 
                    pos(180, 30),
                    scale(2),
                    area(),
                    outline(4),
                ]);


    const player = add([
        rect(20, 20),
        pos(40, 40),
        color(0,0,255),
        area(),
        // move(screenLeft, 100),
    ]);


    // let tick = 0;
    onUpdate(() => {
        camPos(player.pos)
        // tick++
        // if ((isKeyDown('down') || isKeyDown('up'))
        //     && tick % 20 === 0
        //     && !player.isInDialogue) {
        //         player.flipX = !player.flipX
        //     }
    })

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
    onKeyDown("space", () => {
        player.onCollide("player", "trouble", () => {
            debug.log("ok touch is happening")
        })
    })
// player.onCollide("trouble", () => {
//     addKaboom(player.pos);
// })

player.onCollide('trouble', () => {
    player.isInDialogue = true
    const dialogueBoxContainer = add([fixed()])
    const dialogueBoxText = dialogueBoxContainer.add([
        rect(1000, 200),
        outline(15),
        post(150, 150),
        fixed()
    ])
})
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
debug.inspect = true
debug.error("Testing testing one two three")