// kaplay();
// loadBean();

kaplay({
    width: 200,
    height: 200, 
    background: '#CFE3FC', //so you cannot just put a color you have to give a hex code
    scale: 2, 
    // canvas: document.getElementById("canvas") //creates a canvas that isn't listening to input
});



// const obj = add([
//     rect(32,32), //draws object as a rectangle 
//     pos(10, 20), // position the object in the x:10 and y:20 postion
//     "shape", //classify the object as shape
// ]);


scene("red_bean", () => {
    add([
        rect(20, 20),
        pos(40, 40),
        color(245, 0, 0),
    ]);

    onKeyPress(() => {
       debug.log("key pressed");
    });
});

go("red_bean");

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


//This was to make sure things worked. 
// kaplay({
//     width: 200,
//     height: 200, 
//     background: '#d46eb3',
//     scale: 2,
// });

// scene("red_bean", () => {
//     add([
//         rect(32, 32),
//         pos(50, 50),
//         color(255, 0, 0),
//     ]);

//     onKeyPress(() => {
//         debug.log("key pressed");
//     });
// });

// go("red_bean");