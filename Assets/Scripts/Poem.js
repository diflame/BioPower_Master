#pragma strict

private var guiShow : boolean = false;
var poem : Texture;
public var alphaAmount :float=0f;



function OnTriggerEnter2D (Col : Collider2D)
{
	if(Col.tag == "Player") 
	{
		guiShow = true;
		
		alphaAmount=0f;
	//	Debug.Log("OnTriggerEnter"+alphaAmount);
		
		
	
		
	}
}

function OnTriggerStay2D (Col : Collider2D)
{
	if(Col.tag == "Player") 
	{
		guiShow = true;
		if(alphaAmount<=1)
		alphaAmount += 0.5f * Time.deltaTime;
		
		//Debug.Log("OnTriggerStay"+alphaAmount);
		
	
		
	}
}

function OnTriggerExit2D (Col : Collider2D)
{
	if(Col.tag == "Player") 
	{
		
		
		//	alphaAmount -= 0.5f * Time.deltaTime;
		//GUI.color = new Color(1,1,1,alphaAmount);
		//GUI.DrawTexture(Rect(Screen.width/3, Screen.height/100, 512, 512), poem);
		//Debug.Log("OnTriggerExit"+alphaAmount);
		guiShow = false;
	}
}

function OnGUI()
{
	
	
	
	
	
	if(guiShow == true)
	{
	
	
	GUI.color = new Color(1,1,1,alphaAmount);
	GUI.depth=1;
	GUI.DrawTexture(Rect(Screen.width/3.5, Screen.height/100, 512, 512), poem);
	
	}	
	
	if(guiShow == false)
	{
	alphaAmount -= 0.5f * Time.deltaTime;
	GUI.color = new Color(1,1,1,alphaAmount);
	//Debug.Log("OnGUI=false");
	GUI.DrawTexture(Rect(Screen.width/3.5, Screen.height/100, 512, 512), poem);
	}  
	
	
	
	
	
	
	
	
}