#pragma strict

private var X : float;
var offset : float;
var FollowCharacter : boolean;
var Char : Transform;

function Start () {
	X = Char.transform.position.x;
}
	
function Update (){
if (Char!=null){
	if(FollowCharacter){
		transform.position.x = (Char.transform.position.x-X)/offset;
	}
	else {
		transform.position.x = (X-Char.transform.position.x)/offset;
	}
}

}