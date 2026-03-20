// const canvas = document.getElementById("game"); //keeping this just in case

kaplay ({
    width: 650,
    height: 650,
    // scale: 2,
    background: '#CFE3FC',
    // stretch: true,
    // letterbox: true,
})

  const player = add([
        rect(30, 30),
        pos(40, 40),
        color(0,0,255),
        move(screenLeft, 100),
    ]);

//setting up sprite movement

function setSprite(player, spriteName){
    if (player.currentSprite !== spriteName)
    {
        player.use(sprite(spriteName))
        player.currentSprite = spriteName
    }
}


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