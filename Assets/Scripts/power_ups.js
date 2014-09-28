var PowerupSound : AudioClip;
static var biogum_taken:boolean;
 
function OnTriggerEnter2D (col : Collider2D)
{
    if(col.gameObject.name == "BioGum glow")
    {
        audio.PlayOneShot(PowerupSound);
      col.gameObject.transform.position=Vector2(-100,-100);
       biogum_taken=true;
    
//        	Debug.Log("bubble gum destroyed"+col.gameObject);
        	
        
    }
}