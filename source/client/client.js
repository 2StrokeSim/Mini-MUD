Client = new (function()
{
 var socket;
 var current_frame_elapsed;

 this.GameMessageDispatch = function(evt)
 {
     var received_msg = new Int32Array(evt.data)    
     var data_index = 0;
  
     console.log(received_msg);
     
     current_frame_elapsed = received_msg[data_index];
     data_index++;

     var event_count = received_msg[data_index];
     data_index++;



     for (var i = 0; i < event_count; i++)
     {
        var entity = new Entity();
        
        entity.link = entity_chain_end.prev.expand(entity);
        entity.link.concat(entity_chain_end);
        entity_count++;

        entity.activate();
     }

    for ( var entity_link = entity_chain_start.next; 
              entity_link != entity_chain_end;
              entity_link = entity_link.next )
    {
        var entity = entity_link.reference;
        
        entity.position[0] = received_msg[data_index];
        data_index++;
        entity.position[1] = received_msg[data_index];   
        data_index++;
        
        entity.momentum[0] = received_msg[data_index];
        data_index++;
        entity.momentum[1] = received_msg[data_index];   
        data_index++;
    }
   
 }.bind(this);

 this.ConnectMessageDispatch = function(evt)
 {
    var received_msg = evt.data;

    app.stage.addChild(container); 

    var entity = new Entity();
  
    entity.link = entity_chain_end.prev.expand(entity);
    entity.link.concat(entity_chain_end);
    entity_count++;

    entity.activate();



    socket.onmessage = Client.GameMessageDispatch;

}.bind(this);

    
    this.send = function(message)
    {
        socket.send(message);
    }
    
    
         this.WebSocketConnect = function(username, address, port) {
            
            if ("WebSocket" in window) {
          //     alert("WebSocket is supported by your Browser!");
               
               // Let us open a web socket
               socket = new WebSocket("ws://" + address + ":" + port);
               socket.binaryType = "arraybuffer";
                
               socket.onopen = function() {
                  
                  // Web Socket is connected, send data using send()
                  socket.send(username);
               //   alert("Message is sent: " + username);
               };
				
               socket.onmessage = Client.ConnectMessageDispatch;
				
               socket.onclose = function() { 
                  
                  // websocket is closed.
                  alert("Connection is closed..."); 
               };
            } else {
              
               // The browser doesn't support WebSocket
               alert("WebSocket NOT supported by your Browser!");
            }
         }.bind(this);    
})();    
