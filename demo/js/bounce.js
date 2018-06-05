/**
 * Library that can make an element bounce
 * @returns {{init: init}}
 * @constructor
 */
var Bounce = function(selector, settings) {
    /**
     * Default settings for the module
     * @type {{selector: string, gravity: number}}
     */
    var defaultsetting = {
        selector: '.bounce'
    };

	
	
    /**
     * The bouncing element
     * @type {HTMLElement}
     */
    var element;

    /**
     * The vertical speed
     * @type {number}
     */
    var speedY;
	var speedX;

    /**
     * The timer that updates the model and the screen
     * @type {object}
     */
    var timer;

    /**
     * The x and y position of the element
     * @type {{x: number, y: number}}
     */
    var position = {
        x: 0,
        y: 0
    };

    /**
     * Updates the x and y position to the bouncing element
     */
    var updateElement = function() {
        element.style.marginLeft = position.x + 'px';
        element.style.marginTop = position.y + 'px';
    };

    /**
     * Moves changes the x and the y
     * @param {number} xChange
     * @param {number} yChange
     */
    var move = function(xChange, yChange) {

        position.x += xChange;
        position.y += yChange;

        //If the element reaches the bottom of the parent element reverse the speed
        if(element.parentElement.clientHeight <= position.y + element.clientHeight) {
            speedY = -speedY;
        }
		
		if(element.parentElement.clientWidth <= position.x + element.clientWidth) {
            speedX = -speedX;
        }

        updateElement();
    };

    /**
     * Update the variables to the new reality
     */
    var update = function() {
		
		if (defaultSettings.gravity == 0 && defaultSettings.movement == 0){
		console.log("triggered Gravity");
		move(speedX, speedY);
        speedY = 0;
		speedX = 0;
		}
		else if (defaultSettings.gravity == 0){
		console.log("triggered Gravity");
		move(speedX, speedY);
        speedY = 0;
		speedX += defaultSettings.movement * (defaultSettings.updateSpeed/100) * (2 - defaultSettings.friction);
		}
		else if (defaultSettings.movement == 0){
		console.log("triggered Movement");
		move(speedX, speedY);
        speedY += (1.2*(defaultSettings.gravity + 2)) * (defaultSettings.updateSpeed/100) * (2 - defaultSettings.friction);
		speedX = 0;
		}
		else {move(speedX, speedY);
        speedY += ((1.2*(defaultSettings.gravity + 2)) * (defaultSettings.updateSpeed) * (2 - defaultSettings.friction)/1000);
		speedX += (defaultSettings.movement * (defaultSettings.updateSpeed) * (2 - defaultSettings.friction)/1000);
		
		
	
		}	
    };

    /**
     * Overwrite the properties of the first object with the properties of the second object if they exist
     * @param {object} object1
     * @param {object} object2
     */
    var mergeObjects  = function(object1, object2) {
        for (var attrname in object1) {
            if(object2.hasOwnProperty(attrname)) {
                object1[attrname] = object2[attrname];
            }
        }
    };

    /**
     * Initializes the module
     * @param {string} [selector] Css selector that targets the element that needs to bounce
     * @param {object} [settings] Object that contain overrides for the default settings
     */
    var init = function(selector, settings) {
        mergeObjects(defaultSettings, settings || {});
        selector = selector || defaultsetting.selector;
        element = document.querySelector(selector);
        speedY = 0;
		speedX = 0;
        timer = setInterval(update, defaultSettings.updateSpeed);
    };

    init(selector, settings);

    //Return the functions that should be accessible from the outside. The rest is only accessible from within the object
    return {
        init: init
    };

};