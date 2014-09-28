#pragma strict

 var Screen_fader : GameObject;
 public var fadeSpeed : float = 1.5f; 
  var Screen_fader_prefab :GameObject;   
  private var sceneStarting : boolean = true; 

function Start () {
//Debug.Log("amozyng");
		Screen_fader =Instantiate(Screen_fader_prefab,Vector2(0,-4),Quaternion.identity);
		Screen_fader.guiTexture.color.a=1;
		Debug.Log(Screen_fader.guiTexture.color.a);
		
}

function Update () {
		StartScene();
}


function StartScene ()
{
    // Fade the texture to clear.
    FadeToClear();
    
    // If the texture is almost clear...
    if(Screen_fader.guiTexture.color.a <= 0.05f)
    {
        // ... set the colour to clear and disable the GUITexture.
        Screen_fader.guiTexture.color = Color.clear;
        Screen_fader.guiTexture.enabled = false;
        
        // The scene is no longer starting.
        sceneStarting = false;
    }
}


function FadeToClear ()
{
    // Lerp the colour of the texture between itself and transparent.
    Screen_fader.guiTexture.color = Color.Lerp(Screen_fader.guiTexture.color, Color.clear, fadeSpeed * Time.deltaTime);
}
