var speed: Vector2;
var hit: RaycastHit;
var move: boolean;
var mouseposition: Vector2;
static
var characterposition: Vector2;
var direction: Vector2;
var force: Vector2;
var initialposition: Vector2;
speed.x = 8f;
var scale: float;
var anim: Animator;
var i: float;
var timer: float;
var moving: int = 0;
private
var weight: float = 0;
private
var controller: CharacterController;
var touchPrefab: GameObject;
var clone: GameObject;
var clone2: GameObject;
//var teleport :GameObject;
var touch_flag: boolean;
static
var look_right: boolean;

function start() {
	anim = GetComponent("Animator");
	controller = GetComponent(CharacterController);
}

function Update() {
	if (this.gameObject!=null){							//check if character is alive 
	if (bio_gum.bubble_gum__character_anim) {
		play_bubble_character();

	}


	if (Input.GetMouseButtonDown(0)) {
		EnemyPatrol.hold_down = false;
		getDirection();
	}
	if (Mathf.Abs(direction.x) > 0.5 && (Mathf.Abs(characterposition.y - initialposition.y) <= 1 || initialposition.y == 0)) {
		if (Mathf.Abs(mouseposition.y - characterposition.y) <= 10) if (!EnemyPatrol.hold_down) moveCharacter();
		else anim.SetFloat("Speed", 0);

	} else {
		anim.SetFloat("Speed", 0);
		initialposition = rigidbody2D.position;
		//touchPrefab.renderer.material.color.a=1.0f;
	}
	}
}

function getDirection() {

	characterposition = rigidbody2D.position;
	mouseposition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
	direction = mouseposition - characterposition;


	if (direction.x >= 0) {

		transform.localScale = new Vector3(-1, 1, 1);
		look_right = true;
	} else if (direction.x < 0) {
		transform.localScale = new Vector3(1, 1, 1);
		look_right = false;
	}

	touch_pointer();
}


function moveCharacter() {

	//	Debug.Log(EnemyPatrol.showinventory);

	Debug.Log(EnemyPatrol.hold_down + " move character");
	if (!EnemyPatrol.showinventory) {
		initialposition = rigidbody2D.position;
		yield WaitForSeconds(Time.deltaTime);
		direction.y = 0;
		yield WaitForSeconds(Time.deltaTime);
		Time.timeScale = 0.9;
		mouseposition.y = initialposition.y;
		timer += Time.deltaTime;
		rigidbody2D.AddForce(new Vector2(0, -20));

		transform.position = Vector2.MoveTowards(initialposition, mouseposition, 0.06);
		var move: float = Input.GetAxis("Horizontal");
		if (Mathf.Abs(initialposition.x - mouseposition.x) < 0.3) {
			yield WaitForSeconds(Time.deltaTime);
			anim.SetFloat("Speed", 0);
		} else {
			yield WaitForSeconds(Time.deltaTime);
			anim.SetFloat("Speed", 1);
		}
	}


	//Debug.Break();	
}


function touch_pointer() {

	Debug.Log(clone);

	if (clone != null) {
		Destroy(clone, 0.3f);
	}
	clone = Instantiate(touchPrefab, mouseposition, Quaternion.identity);

	while (clone.renderer.material.color.a > 0) {
		yield WaitForSeconds(0.2);
		clone.renderer.material.color.a = clone.renderer.material.color.a - 0.2;

	}
	Debug.Log(clone + "before deletion");
	Destroy(clone, 0.3f);

	Debug.Log(clone + "after deletion");
	touch_flag = true;

}

function play_bubble_character() {

	anim.Play("WhiteWolfBubble");



}