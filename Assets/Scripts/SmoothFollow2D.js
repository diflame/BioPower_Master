
#pragma strict

var target : Transform;
var smoothTime = 0.3;
private var thisTransform : Transform;
private var velocity : Vector2;

function Start()
{
	thisTransform = transform;
	
}

function Update() 
{

if (target!=null){
	thisTransform.position.x =Mathf.SmoothDamp(Mathf.Clamp(thisTransform.position.x,-1.75,1.75), 
		Mathf.Clamp(target.position.x,-1.75,1.75), velocity.x, smoothTime);
		
	thisTransform.position.y = Mathf.SmoothDamp( Mathf.Clamp(thisTransform.position.y,-1.3,1.35), 
	Mathf.Clamp(target.position.y,-1.3,1.35), velocity.y, smoothTime);
	
}

}


/*transform.position = new Vector3(
Mathf.Clamp(transform.position.x, minimum, maximum), 
transform.position.y, transform.position.z); */