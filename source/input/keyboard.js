initialize_keyset = function()
{
	var key = [];
	var event;
    
	key[0] = { name: "" };				key[1] = { name: "" };					key[2] = { name: "" };
	key[3] = { name: "" };				key[4] = { name: "" };					key[5] = { name: "" };	
	key[6] = { name: "" };				key[7] = { name: "" };					key[8] = { name: "backspace" };	
	key[9] = { name: "tab" };			key[10] = { name: "" };		   		key[11] = { name: "" };	
	key[12] = { name: "" };		    key[13] = { name: "enter" };			key[14] = { name: "" };	
	key[15] = { name: "" };		    key[16] = { name: "shift" };			key[17] = { name: "ctrl" };	
	key[18] = { name: "alt" };			key[19] = { name: "pause" };			key[20] = { name: "caps" };	
	key[21] = { name: "" };		    key[22] = { name: "" };		    	key[23] = { name: "" };	
	key[24] = { name: "" };		    key[25] = { name: "" };		    	key[26] = { name: "" };	
	key[27] = { name: "escape" };	key[28] = { name: "" };		    	key[29] = { name: "" };	
	key[30] = { name: "" };		    key[31] = { name: "" };		    	key[32] = { name: "space" };		
	key[33] = { name: "pageup" };	key[34] = { name: "pagedown" }; 	key[35] = { name: "end" };		
	key[36] = { name: "home" };	    key[37] = { name: "left" };	    	key[38] = { name: "up" };
	key[39] = { name: "right" };		key[40] = { name: "down" };	    	key[41] = { name: "" };
	key[42] = { name: "" };		    key[43] = { name: "" };		    	key[44] = { name: "" };
	key[45] = { name: "insert" };		key[46] = { name: "delete" };		key[47] = { name: "" };
	key[48] = { name: "0" };			key[49] = { name: "1" };				key[50] = { name: "2" };
	key[51] = { name: "3" };			key[52] = { name: "4" };				key[53] = { name: "5" };
	key[54] = { name: "6" };			key[55] = { name: "7" };				key[56] = { name: "8" };
	key[57] = { name: "9" };			key[58] = { name: "" };		    	key[59] = { name: "" };
	key[60] = { name: "" };		    key[61] = { name: "" };		    	key[62] = { name: "" };
	key[63] = { name: "" };		    key[64] = { name: "" };		    	key[65] = { name: "a" };
	key[66] = { name: "b" };			key[67] = { name: "c" };				key[68] = { name: "d" };
	key[69] = { name: "e" };			key[70] = { name: "f" };				key[71] = { name: "g" };
	key[72] = { name: "h" };			key[73] = { name: "i" };				key[74] = { name: "j" };
	key[75] = { name: "k" };			key[76] = { name: "l" };				key[77] = { name: "m" };
	key[78] = { name: "n" };			key[79] = { name: "o" };				key[80] = { name: "p" };
	key[81] = { name: "q" };			key[82] = { name: "r" };				key[83] = { name: "s" };
	key[84] = { name: "t" };			key[85] = { name: "u" };				key[86] = { name: "v" };
	key[87] = { name: "w" };			key[88] = { name: "x" };				key[89] = { name: "y" };
	key[90] = { name: "z" };			key[91] = { name: "lwindow" };		key[92] = { name: "rwindow" };
	key[93] = { name: "select" };	key[94] = { name: "" };		    	key[95] = { name: "" };
	key[96] = { name: "" };			key[97] = { name: "" };				key[98] = { name: "" };
	key[99] = { name: "" };			key[100] = { name: "" };				key[101] = { name: "" };
	key[102] = { name: "" };			key[103] = { name: "" };				key[104] = { name: "" };
	key[105] = { name: "" };			key[106] = { name: "" };				key[107] = { name: "" };
	key[108] = { name: "" };			key[109] = { name: "" };				key[110] = { name: "" };
	key[111] = { name: "" };			key[112] = { name: "" };				key[113] = { name: "" };
	key[114] = { name: "" };			key[115] = { name: "" };				key[116] = { name: "" };
	key[117] = { name: "" };			key[118] = { name: "" };				key[119] = { name: "" };
	key[120] = { name: "" };			key[121] = { name: "" };				key[122] = { name: "" };
	key[123] = { name: "" };			key[124] = { name: "" };				key[125] = { name: "" };
	key[126] = { name: "" };			key[127] = { name: "" };				key[128] = { name: "" };
	key[129] = { name: "" };			key[130] = { name: "" };				key[131] = { name: "" };
	key[132] = { name: "" };			key[133] = { name: "" };				key[134] = { name: "" };
	key[135] = { name: "" };			key[136] = { name: "" };				key[137] = { name: "" };
	key[138] = { name: "" };			key[139] = { name: "" };				key[140] = { name: "" };
	key[141] = { name: "" };			key[142] = { name: "" };				key[143] = { name: "" };
	key[144] = { name: "" };			key[145] = { name: "" };				key[146] = { name: "" };
	key[147] = { name: "" };			key[148] = { name: "" };				key[149] = { name: "" };
	key[150] = { name: "" };			key[151] = { name: "" };				key[152] = { name: "" };
	key[153] = { name: "" };			key[154] = { name: "" };				key[155] = { name: "" };
	key[156] = { name: "" };			key[157] = { name: "" };				key[158] = { name: "" };	
	key[159] = { name: "" };			key[160] = { name: "" };				key[161] = { name: "" };
	key[162] = { name: "" };			key[163] = { name: "" };				key[164] = { name: "" };
	key[165] = { name: "" };			key[166] = { name: "" };				key[167] = { name: "" };
	key[168] = { name: "" };			key[169] = { name: "" };				key[170] = { name: "" };
	key[171] = { name: "" };			key[172] = { name: "" };				key[173] = { name: "" };
	key[174] = { name: "" };			key[175] = { name: "" };				key[176] = { name: "" };
	key[177] = { name: "" };			key[178] = { name: "" };				key[179] = { name: "" };
	key[180] = { name: "" };			key[181] = { name: "" };				key[182] = { name: "" };
	key[183] = { name: "" };			key[184] = { name: "" };				key[185] = { name: "" };
	key[186] = { name: "" };			key[187] = { name: "" };				key[188] = { name: "," };
	key[189] = { name: "" };			key[190] = { name: "." };				key[191] = { name: "/" };
	key[192] = { name: "`" };			key[193] = { name: "" };				key[194] = { name: "" };
	key[195] = { name: "" };			key[196] = { name: "" };				key[197] = { name: "" };
	key[198] = { name: "" };			key[199] = { name: "" };				key[200] = { name: "" };
	key[201] = { name: "" };			key[202] = { name: "" };				key[203] = { name: "" };
	key[204] = { name: "" };			key[205] = { name: "" };				key[206] = { name: "" };
	key[207] = { name: "" };			key[208] = { name: "" };				key[209] = { name: "" };
	key[210] = { name: "" };			key[211] = { name: "" };				key[212] = { name: "" };
	key[213] = { name: "" };			key[214] = { name: "" };				key[215] = { name: "" };
	key[216] = { name: "" };			key[217] = { name: "" };				key[218] = { name: "" };
	key[219] = { name: "[" };			key[220] = { name: "\\" };			key[221] = { name: "]" };
	key[222] = { name: "\'" };			key[223] = { name: "" };				key[224] = { name: "" };	
	
	// Determine if browser is Mozilla
	if (typeof InstallTrigger !== 'undefined') 
	{
		key[59] = { name: ";" };
		key[61] = { name: "=" };
		key[173] = { name: "-" };
	}
	else
	{
		key[186] = { name: ";" };
		key[187] = { name: "=" };
		key[189] = { name: "-" };		
	}
	
	return key;
};


Keyboard = new (function()
{				

    this.text_entry = function(sprite, text, index)
    {
        this.update = function(){ sprite.text = text; }.bind(this);
        
        this.enter_text = function(key)
        {
            text = text.slice(0, index) + key.name + text.slice(index);
            index++;
        }.bind(this);
        
        this.backspace = function()
        {
            text = text.slice(0, -1);
        }.bind(this);
        
        this.bind_input = function()
        {
            for (var i = 48; i < 58; i++)
            {
                Keyboard.bind_response(i, undefined, this.enter_text);
                Keyboard.bind_response(i, undefined, this.update);
            }
            
            for (var i = 65; i < 91; i++)
            {
                Keyboard.bind_response(i, undefined, this.enter_text); 
                Keyboard.bind_response(i, undefined, this.update);                
            }

            Keyboard.bind_response_by_key_name(".", undefined, this.enter_text);
            Keyboard.bind_response_by_key_name(".", undefined, this.update);
  
            Keyboard.bind_response_by_key_name("backspace", undefined, this.backspace);
            Keyboard.bind_response_by_key_name("backspace", undefined, this.update);

        }.bind(this); 

        this.unbind_input = function()
        {
            for (var i = 48; i < 58; i++)
            {
                Keyboard.unbind_response(i, undefined, this.enter_text);
                Keyboard.unbind_response(i, undefined, this.update);
            }
            
            for (var i = 65; i < 91; i++)
            {
                Keyboard.bind_response(i, undefined, this.enter_text); 
                Keyboard.bind_response(i, undefined, this.update);                
            }
            
            Keyboard.unbind_response_by_key_name(".", undefined, this.enter_text);
            Keyboard.unbind_response_by_key_name(".", undefined, this.update);            
            
            Keyboard.unbind_response_by_key_name("backspace", undefined, this.backspace);
            Keyboard.unbind_response_by_key_name("backspace", undefined, this.update);
            
        }.bind(this);          
    }
        
  
    this.map_control = function(sprite)
    {
        
        this.bind_input = function()
        {   
            Keyboard.bind_response_by_key_name("left", undefined, () => { Client.send((new Uint32Array([1])).buffer); });
            Keyboard.bind_response_by_key_name("right", undefined, () => { Client.send((new Uint32Array([0])).buffer); });
            Keyboard.bind_response_by_key_name("up", undefined, () => { Client.send((new Uint32Array([2])).buffer); });
            Keyboard.bind_response_by_key_name("down", undefined, () => { Client.send((new Uint32Array([3])).buffer); });
        }.bind(this); 

        this.unbind_input = function()
        {
            Keyboard.bind_response_by_key_name("left", undefined, () => { Client.send((new Uint32Array([1])).buffer); });
            Keyboard.bind_response_by_key_name("right", undefined, () => { Client.send((new Uint32Array([0])).buffer); });
            Keyboard.bind_response_by_key_name("up", undefined, () => { Client.send((new Uint32Array([2])).buffer); });
            Keyboard.bind_response_by_key_name("down", undefined, () => { Client.send((new Uint32Array([3])).buffer); });
        }.bind(this);          
    }

  
	var keys = initialize_keyset();
	var functions = [];
	var receivers = [];
	
	for (var i = 0; i < keys.length; i++)
	{
		keys[i].up = [];
		keys[i].down = [];
		keys[i].state = false;
	}
    
	this.bind_response = function(Index, UpResponse, DownResponse)
	{								
		if (UpResponse != undefined) { keys[Index].up.push( UpResponse ); }
		if (DownResponse != undefined) { keys[Index].down.push( DownResponse ); }
	};
    
	this.bind_response_by_key_name = function(Name, UpResponse, DownResponse, Channel)
	{								
		for (var i = 0; i < keys.length; i++)
		{
			if (keys[i].name == Name)
			{
                this.bind_response(i, UpResponse, DownResponse);
				break;
			}
		}
	};
	
	this.unbind_response = function(Index, UpResponse, DownResponse)
	{								
        if (UpResponse != undefined)
        {										
            for (var l = 0; l < keys[Index].up.length; l++)
            {
                if (keys[Index].up[l] == UpResponse) {keys[Index].up.splice(l, 1); break;}
            }													
        }
        if (DownResponse != undefined)
        {										
            for (var l = 0; l < keys[Index].down.length; l++)
            {																
                if (keys[Index].down[l] == DownResponse) {keys[Index].down.splice(l, 1); break;}													
            }													
        }											
	};															    
    
	this.unbind_response_by_key_name = function(Name, UpResponse, DownResponse)
	{								
		for (var i = 0; i < keys.length; i++)
		{
			if (keys[i].name == Name)
			{
                unbind_response(i, UpResponse, DownResponse);
                break;                
			}
		}								
	};															
    
	this.keydown = function(event)
	{ 
        console.log(keys[event.keyCode]);
        
		if (keys[event.keyCode].state) {event.preventDefault(); return;}
		
		keys[event.keyCode].state = true;
		
		var execute_default = false;
		for (var i = 0; i < keys[event.keyCode].down.length; i++)
		{
			keys[event.keyCode].down[i](keys[event.keyCode]);				
		}
		if (!execute_default) {event.preventDefault();}
        
        console.log(keys[event.keyCode]);
    
	}.bind(this);
	
	this.keyup = function(event)
	{	
		if (!keys[event.keyCode].state) {event.preventDefault(); return;}

		keys[event.keyCode].state = false;
		
		var execute_default = false;
		for (var i = 0; i < keys[event.keyCode].up.length; i++)
		{
			var signal = [];
			
//			for (var j = 0; j < keys[event.keyCode].up[i].channel; j++)
//			{
//				signal[j] = 0;
//			}
	
//			signal[keys[event.keyCode].up[i].channel] = -1;			
			
//			signal[0] = -1;
			
//			this.response( {type: 'transmit', channel: keys[event.keyCode].up[i].channel, signal: signal } );			
//			if (keys[event.keyCode].up[i](true, event.keyCode) !== true) { execute_default = true; } 
		}
		if (!execute_default) {event.preventDefault();}  

	}.bind(this);
	
	var action = function(){};
	var reaction = function(){};
	
	var projections = [];

	var updating = false;
	var perturbations = [];
	
	var transmit = function(channel, signal)
	{
		projections[channel].receive(signal);
//		for (var index = 0; index < projections.length; index++) { projections[index].receive(signal); }
	};
	
	this.response = function(parameters)
	{
		responses.push(parameters);
	
		if (updating == true) return;
		
		updating = true;
	//	event = Timer.schedule(0, update, event); 
//		update();
	
	}.bind(this);
	

	
	document.addEventListener("keydown",this.keydown, false);
	document.addEventListener("keyup",this.keyup, false);

	this.cut = function(event){};
	this.copy = function(event){};
	this.paste = function(event)
	{
//								Core.ext_code_debug_probe();"
//								Graphics.hidden_input.val(' ');"
//								Graphics.hidden_input.focus().select();"	
	};
	
	document.addEventListener("cut", this.cut, false);
	document.addEventListener("copy", this.copy, false);
//	document.addEventListener(\"beforepaste\",this.paste, false);"															
	document.addEventListener("paste", this.paste, false);
})();



