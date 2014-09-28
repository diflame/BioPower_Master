var explosion : Transform;
var time : float;
var Crate : GameObject;
var cratedestroy : AudioClip;
var otos : GameObject;

function OnTriggerEnter2D (col : Collider2D)
{
    if(col.gameObject == Crate  )
    {
    	audio.PlayOneShot(cratedestroy);
    	yield WaitForSeconds(time);
        var exp= Instantiate(explosion, Crate.transform.position, Quaternion.identity);
        Destroy(col.gameObject);
        
    }
}