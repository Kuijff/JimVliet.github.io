window.addEventListener("load",function() { // Wait for the window to finish loading
 
	var Q = window.Q = Quintus()                // Create a new engine instance
	    .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX") // Load any needed modules
	    .setup("myGame")                        // Bind Quintus to the canvas with ID "myGame"
	    .controls()                             // Add in default controls (keyboard, buttons)
	    .touch();                               // Add in touch support (for the UI)
    
    
    Q.scene("Testingground", function(stage)
    {
    	Q.stageTMX("Testingground.tmx", stage);
    }
    );

    Q.loadTMX("Testingground.tmx, sprites.json", function()
    {
        Q.compileSheets("sprites/Graphics/Autotiles/sprites.png","sprites.json");
    	Q.stageScene("Testingground");
    }
    );
});