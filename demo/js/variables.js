	var defaultSettings = {
		gravity: 1, //Set the gravity of your bounce object - How fast it will fall downward.
		movement: 1,  // Set the movement of your bounce object - How fast it will fall sideways.
        updateSpeed: 1, //Effectively checks how fast to update, use this to control overall speed
		friction: 1 //Set friction for your object - The higher this number the harder time your object will have moving.
		
	};
	
	function formChanged() {
    defaultSettings.gravity = document.getElementsByName("gravity")[0].value;
	defaultSettings.movement = document.getElementsByName("movement")[0].value;
	defaultSettings.updateSpeed = document.getElementsByName("updatespeed")[0].value;
	defaultSettings.friction = document.getElementsByName("friction")[0].value;
	console.log(defaultSettings);
	
	}
