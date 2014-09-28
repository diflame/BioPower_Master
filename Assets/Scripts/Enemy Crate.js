var explosion : Transform;
var time : float;
var Crate : GameObject;
var cratedestroy : AudioClip;

function OnCollisionEnter2D (col : Collision2D)
{
    if(col.gameObject == Crate)
    {
    	audio.PlayOneShot(cratedestroy);
    	yield WaitForSeconds(time);
        var exp= Instantiate(explosion, Crate.transform.position, Quaternion.identity);
        Destroy(col.gameObject);
    }
}