#pragma strict
var enemy_meets_bubble: GameObject;
static
var enemy_dies: boolean;
var bubble_direction_flag :boolean;

function Start() {
	bubble_direction_flag=WhiteWolfMovement.look_right;

}

function Update() {

	if (bio_gum.move_gum == true && this.name != null) {
		Debug.Log("Bio gum working");
		move();
	}


}


function move() {
	if (bubble_direction_flag) {

		transform.rigidbody2D.velocity = Vector2(1, 0);

	} else {
		transform.rigidbody2D.velocity = Vector2(-1, 0);

	}
	// Time.timeScale=0.1;
	// Time.deltaTime;
	//	transform.position = WhiteWolfMovement.characterposition;
	//Time.timeScale=0.1;

}

function OnTriggerEnter2D(other: Collider2D) {
	Debug.Log(other.name);
	if (other.name == "Dumb Otos") {
		Debug.Log("bubble colllided");

		Instantiate(enemy_meets_bubble, other.transform.position, Quaternion.identity);
		Destroy(other.gameObject);
		Destroy(this.gameObject);
		enemy_dies = true;


	}

}