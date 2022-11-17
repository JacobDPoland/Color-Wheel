let n = 100
let sym = 360 / n;


function setup() {
    createCanvas(800,800)
    angleMode(DEGREES)
    noStroke()
}


let ran = false
let frame_counter = 150;
function draw() {
    let shape_size = 50;
    let animation_speed = 200; // high number == slower
    if (!ran && !(++frame_counter % animation_speed)){
        background(220)
        
        spiral_offset = 0
        for (let tier = 0; tier <= 9; tier++){                    
            for (let i = 0; i <= n; i++){
                push()
                translate(width/2, height/2)
    
                angle = sym * i
                if (angle < 0){
                    console.log("Error, negative angle not allowed")
                }
                else if (angle > 360){
                    angle %= 360
                }
                rotate(angle + spiral_offset)
                spiral_offset += 2
                
                let step_mod = 0.5
                second_trans = [tier*step_mod*shape_size, tier*step_mod*shape_size]
                console.log(angle, second_trans)
                
                translate(second_trans[0], second_trans[1])

                // random color square
                let rgb = []
                for (let i = 0; i < 3; i++){
                    rgb.push(Math.random() * 255)
                }
                let c = color(rgb[0], rgb[1], rgb[2])
                fill(c)
                try{
                    circle(0, 0, shape_size)
                }
                catch(err) {
                    console.error("Error drawing: ", err);
                }

                pop()
            }
        }
        ran = false
    }

}