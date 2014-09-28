#pragma strict
var target: GameObject;
var jump : boolean;
var other : GameObject;
var doubleClickStart : float = -1.0;
var disableClicks = false;
var mouseposition :Vector2;
var flag:boolean;
var anim : Animator;
var teleport :boolean;
var teleportSound : AudioClip;


function start(){

other=GameObject.FindGameObjectWithTag("Player");
//teleportAgent=GameObject.Find("TeleportAgent1");
anim = GetComponent("Animator");

}


function OnMouseUp()
{
    //EDIT TO DISABLE MOUSE CLICKS FOR A TIME AFTER DOUBLE CLICK
    if (disableClicks)
        return;
    //END EDIT
 
    //make sure doubleClickStart isn't negative, that'll break things
    if (doubleClickStart > 0 && (Time.time - doubleClickStart) < 0.4)
    {
        this.OnDoubleClick();
        doubleClickStart = -1;
            lockClicks();
    }
    else
    {
        doubleClickStart = Time.time;
    }
}
 
//EDIT TO DISABLE MOUSE CLICKS FOR A TIME AFTER DOUBLE CLICK
function lockClicks()
{
   // disableClicks = true;
   // yield WaitForSeconds(0.01);
    disableClicks = false;
}
//END EDIT
 
function OnDoubleClick()
{   
		Debug.Log("check");
  
    			mouseposition=Camera.main.ScreenToWorldPoint(Input.mousePosition);
         	    flag=true;
			 		  
}



function OnTriggerStay2D(other : Collider2D){
		if(other.tag == "Player" && flag==true){
			wait();
			teleport_me();
			flag=false;
			
			}
}


function OnTriggerEnter2D (other : Collider2D){
		if(other.tag == "Player" && flag ==true){
		
			//Debug.Log(flag);			
			wait();
			//play_anim();
			teleport_me();
			flag=false;
			//yield WaitForSeconds(1);
		
		//	Debug.Log(other.gameObject.transform.position);
		//	yield WaitForSeconds(1);
		//	anim.Play("WhiteWolf_TeleportOut");
		//	 yield WaitForSeconds(1);
		//	anim.Play("WhiteWolf_Idle");
		//	Time.timeScale=1;
		//	anim_flag=true;
			
		
		
	}
}

function OnTriggerExit2D (other : Collider2D){
	if(other.tag == "Player" && flag==true){
		//jump = true;
		flag=false;
	//anim.Play("WhiteWolf_TeleportIn");
	}
}



function wait (){
//Debug.Log("wait");
//yield WaitForSeconds(0.1);
teleport=true;
//Debug.Log("teleport"+teleport);

}


function teleport_me(){
	Debug.Log("called teleport");
	if (teleport==true){
	anim.SetTrigger("teleport_in");
	audio.PlayOneShot(teleportSound);
	yield WaitForSeconds(0.5);
	other.gameObject.transform.position = Vector3(target.transform.position.x, target.transform.position.y,0);
	}
	else {
	Debug.Log("teleport is not true");
	}
	teleport=false;
}





