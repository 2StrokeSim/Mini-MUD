function Link()
{
    this.prev;
    this.next;
    this.reference;
    
    this.dislocate = function()
    {
        this.next.prev = this.prev;
        this.prev.next = this.next;
    }
    
    this.relocate = function()
    {
        this.next.prev = this;
        this.prev.next = this;
    }  

    this.remove = function()
    {
        this.dislocate();
        this.next = null;
        this.prev = null;
    }    
    
    this.expand = function(reference)
    {
        var link = new Link();
        link.next = this.next;
        link.prev = this;
        link.reference = reference;
        this.next = link; 
        return link;
    }.bind(this)
    
    this.concat = function(link)
    {
        this.next = link;
        link.prev = this;
    }.bind(this)
}

function Inertia()
{
}

function Entity()
{   
    this.momentum = new Int32Array([0, 0]);
    this.position = new Int32Array([0, 0]);
    
    
    this.update = function(delta)
    {
        this.position[0] += this.momentum[0] * delta;
        this.position[1] -= this.momentum[1] * delta;
    }.bind(this)    
    
    
    this.activate = function ()
    {
        var bunny = new PIXI.Sprite(texture);
        bunny.anchor.set(0.5);
        bunny.x = 0;
        bunny.y = 0;
        container.addChild(bunny);
       

        
            // Listen for animate update
        app.ticker.add((delta) => {
            // rotate the container!
            // use delta to create frame-independent transform
     //       container.rotation -= 0.01 * delta;
            this.update(delta);
            bunny.x = this.position[0] / 20;
            bunny.y = this.position[1] / 20;
        });     
                    
    }.bind(this);
}
