class Snow{
    constructor(x,y){
        var options ={
            restitution:0.9,
            friction:0.9
        }
        this.body = Bodies.circle(x,y,40,40,20,options)
        this.image = loadImage("snow4.webp")
        this.radius = 35
        this.lifetime = 100
        World.add(world,this.body)
    }
    display(){
        push()
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.radius,this.radius)
        pop()
    }
}