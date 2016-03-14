window.addEventListener("load",function() { // Wait for the window to finish loading
 
	var Q = window.Q = Quintus({development: true, imagePath: "/sprites/Graphics/Autotiles/"})                // Create a new engine instance
	    .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX") // Load any needed modules
	    .setup("myGame")                        // Bind Quintus to the canvas with ID "myGame"
	    .controls()                             // Add in default controls (keyboard, buttons)
	    .touch();                               // Add in touch support (for the UI)
    
    //Edited at school
    Q.scene("test_01", function(stage)
    {
    	Q.stageTMX("TESTMAP.tmx", stage);
    }
    );
    //wat leuks

    Q.loadTMX("TESTMAP.tmx", function()
    {
    	Q.stageScene("test_01");
    }
    );
});
