var Mouse = new (function()
{		
	this.mousemove = function(event)
	{
        WASM_access.analog_move(0, event.movementX || event.mozMovementX || 0);
        WASM_access.analog_move(1, (event.movementY || event.mozMovementY || 0) * -1.0);
	}.bind(this);
		
	this.mousedown = function(event)
	{
        if (this.LeftButtonOut != undefined)
        {
            this.LeftButtonOut();
        }
	}.bind(this);
	
	this.mouseup = function(event)
	{        
	}.bind(this);	
			
	this.bind_mousebutton = function(button_index, up_response, down_response) {if (down_response != undefined) {this.mousebutton_response[button_index].down = down_response;} if (up_response != undefined) {this.mousebutton_response[button_index].up = up_response;}}.bind(this);

	//var container = document.getElementById("container");
    var body = document.body;
	
	var pointerlockchange = function( event )
	{
		if (document.pointerLockElement === body ||
			document.mozPointerLockElement === body ||
			document.webkitPointerLockElement === body) 
		{
			// Pointer was just locked
			// Enable the mousemove listener
			document.addEventListener("mousemove", this.mousemove, false);
		} 
		else 
		{
			// Pointer was just unlocked
			// Disable the mousemove listener
			document.removeEventListener("mousemove", this.mousemove, false);
//			this.unlockHook(container);
		}
	}.bind(this);
	
	// Hook pointer lock state change events
	document.addEventListener('pointerlockchange', pointerlockchange, false);
	document.addEventListener('mozpointerlockchange', pointerlockchange, false);
	document.addEventListener('webkitpointerlockchange', pointerlockchange, false);
	
	body.requestPointerLock = body.requestPointerLock ||
											body.mozRequestPointerLock ||
											body.webkitRequestPointerLock;
	
	body.exitPointerLock = document.exitPointerLock ||
									  document.mozExitPointerLock ||
									  document.webkitExitPointerLock;

	// Ask the browser to lock the pointer
    // TODO: Should we allow fallthrough execution on the click event? Or ignore it beyond regaining pointer lock? Probably best to make it an option (per hook, even?(!))
	body.addEventListener("click", function() { this.requestPointerLock(); }, false);
//	document.addEventListener("mousemove", this.mousemove, false);	
	document.addEventListener("mousedown", this.mousedown, false);								
	document.addEventListener("mouseup", this.mouseup, false);								
	document.addEventListener("mousewheel", this.mousewheel, false);
})();