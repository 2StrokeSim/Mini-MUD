Gui = new (function()
{

    this.ConnectMenu = function()
    {
        
        var container = new PIXI.Container();
                
        this.resize = function()
        {
        // Move container to the center
        container.x = app.screen.width / 2;
        container.y = app.screen.height / 2;

        // Center bunny sprite in local container coordinates
        container.pivot.x = container.width / 2;
        container.pivot.y = container.height / 2;   
        }



        // Move container to the center
        container.x = app.screen.width / 2;
        container.y = app.screen.height / 2;

        // Center bunny sprite in local container coordinates
        container.pivot.x = container.width / 2;
        container.pivot.y = container.height / 2;        
        
        
        const style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
        });

        const addressHeaderText = new PIXI.Text('Server Address:', style);
        addressHeaderText.x = 5;
        addressHeaderText.y = 5;

        container.addChild(addressHeaderText);        
        
        
        const addressFieldText = new PIXI.Text("localhost");

        var input = new Keyboard.text_entry( addressFieldText, "localhost", 3 );

        input.update();
        input.bind_input();

        addressFieldText.x = 35;
        addressFieldText.y = 55;

        container.addChild(addressFieldText);

        Keyboard.bind_response_by_key_name("enter", undefined, () => { Client.WebSocketConnect("meh", addressFieldText.text, "8080"); container.visible = false; });
        
        app.stage.addChild(container);        


        //WebSocketTest("meh", basicText.text, "8080");
    }
   
})();    
