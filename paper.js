class paper
{
    constructor(x,y,r)
    {
        var option = {
        isStatic: false,
        restitution: 3.0,
        friction: 0.5,
        dencity: 1.2,

        
        }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.ellipse (this.x, this.y, this.r/2,options)
    World.add(world, this.body);

    }
    display()
    {

             var paperpos=this.body.position;

             push(100,50,20)
             translate(paperpos.x, paperpos.y);
             rectMode(center)
             strokeWeight(3);
             fill("purple")
             ellipse(0,0,this.r, this.r);
             pop()

        
    }
}
