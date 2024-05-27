let blinky;
let inky;
let pinky;
let clyde;
let ghosts = []
let pacman;
let grid;
let canvas;
let context;
let nb = 0
function init() {
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    canvas.width = "448"
    canvas.height = "496"
    

    grid = new Grid()
    blinky = new Ghost(0, 0)
    ghosts.push(blinky)
    inky = new Ghost(1, 0)
    ghosts.push(inky)
    pinky = new Ghost(2, 0)
    ghosts.push(pinky)
    clyde = new Ghost(3, 0)
    ghosts.push(clyde)
    pacman = new PacMan()

    pathfinding()

    setTimeout(pathfinding, 3000)
    
    window.requestAnimationFrame(main)
}

window.onload = init