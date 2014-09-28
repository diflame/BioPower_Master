var AppleSound : AudioClip;
public var score : int = 0;
public var guiScore : GUIText;

function Start (){
	guiScore.text = "0";
}
function OnTriggerEnter2D (col : Collider2D)
{
    if(col.gameObject.name == "Apple")
    {
        audio.PlayOneShot(AppleSound);
        score += 1;
        guiScore.text = "" +score;
        Destroy(col.gameObject);
    }
}