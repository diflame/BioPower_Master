var Corpse: GameObject;
var Wolf: GameObject;
var Cigar: GameObject;
var dead: GameObject;
var position: Vector2;
var white_wolf_dead: boolean;
 var Screen_fader_prefab :GameObject;
 var Screen_fader : GameObject;
 public var fadeSpeed : float = 0.19f;            // Speed that the screen fades to and from black.


private var sceneStarting : boolean = true; 

function start(){
//GameObject screen_fader =GameObject.Find("screen_fader");
//Screen_fader=GetComponent(screen_fader);





Debug.Log(Screen_fader.transform.position + " black position" );
}
function OnCollisionEnter2D(col: Collision2D) {
	if (col.gameObject == Wolf) {
		position.x = transform.position.x;
		position.y = transform.position.y;
		Destroy(col.gameObject);
		if (dead == null) {
			{
				Instantiate(Cigar, col.gameObject.transform.position, Quaternion.identity);
				
				dead = Instantiate(Corpse, col.gameObject.transform.position, Quaternion.identity);
				if (WhiteWolfMovement.look_right) dead.transform.localScale = new Vector3(-1, 1, 1);
				else dead.transform.localScale = new Vector3(1, 1, 1);
				white_wolf_dead=true;
				Screen_fader =Instantiate(Screen_fader_prefab,Vector2(0,-4),Quaternion.identity);
				Screen_fader.guiTexture.color.a=0;
				//EndScene();
//				Screen_fader.EndScene();
				//yield WaitForSeconds(3.5);
				//Application.LoadLevel(1);
				
			}

		}

	}
}

function Update() {
	
	
	if(Screen_fader!=null && dead!=null  ){
	Debug.Log(Camera.main.ViewportToScreenPoint(dead.transform.localPosition) + "  " +Screen.height);
	
		//if(Camera.main.ViewportToScreenPoint(dead.transform.localPosition).y >=Screen.height+2000)
		EndScene();
	
	
	}
}





function StartScene ()
{
    // Fade the texture to clear.
    FadeToClear();
    
    // If the texture is almost clear...
    if(guiTexture.color.a <= 0.05f)
    {
        // ... set the colour to clear and disable the GUITexture.
        Screen_fader.guiTexture.color = Color.clear;
        Screen_fader.guiTexture.enabled = false;
        
        // The scene is no longer starting.
        sceneStarting = false;
    }
}


public  function EndScene ()
{
		yield WaitForSeconds(2);
	
	Debug.Log("it goes here");
    // Make sure the texture is enabled.
    Screen_fader.guiTexture.enabled = true;
    
    // Start fading towards black.
    FadeToBlack();
    
    // If the screen is almost black...
    if(Screen_fader.guiTexture.color.a >= 0.5f)
        // ... reload the level.
        Application.LoadLevel("Game Over");
        
        
}



function FadeToClear ()
{
    // Lerp the colour of the texture between itself and transparent.
    Screen_fader.guiTexture.color = Color.Lerp(Screen_fader.guiTexture.color, Color.clear, fadeSpeed * Time.deltaTime);
}


function FadeToBlack ()
{
	Debug.Log("called");
    // Lerp the colour of the texture between itself and black.
    Screen_fader.guiTexture.color = Color.Lerp(Screen_fader.guiTexture.color, Color.black, fadeSpeed * Time.deltaTime);
}