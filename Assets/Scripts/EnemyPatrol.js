var waypoint: Transform[];
var speed: float = 1;
private
var currentWaypoint: int;
var loop: boolean = true;
var Crate: GameObject;
var death_otos: GameObject;
var death_otos_instance: GameObject;
var anim: Animator;
var explosion: Transform;
var time: float;
var delta_y: float;
var cratedestroyer: GameObject;
static
var showinventory: boolean = false;
var power_ups: Texture;
var enemy_position: Vector2;
var enemy_position_screen: Vector2;
var power_ups_prefab: GameObject;
var power_ups_clone: GameObject;
static
var active_enemy_position: Vector2;
static
var BioGum_show: boolean;
static
var hold_down: boolean = false;


function Awake() {}

function start() {
	anim = GetComponent("Animator");
}

function Update() {
	if (currentWaypoint < waypoint.length) {
		var target: Vector3 = waypoint[currentWaypoint].position;
		var moveDirection: Vector3 = target - transform.position;
		var velocity = rigidbody2D.velocity;
		enemy_position = transform.position;
		enemy_position_screen = Camera.main.WorldToScreenPoint(enemy_position);
		if (moveDirection.magnitude < 2.2) {
			transform.localScale.x = -(transform.localScale.x);
			currentWaypoint++;
		} else {
			velocity = moveDirection.normalized * speed;
		}
	} else {
		if (loop) {
			currentWaypoint = 1;

			if (moveDirection.magnitude < 2.2) {}

		} else {
			velocity = Vector2.zero;
		}
	}
	rigidbody2D.velocity = velocity;

	if (Input.GetMouseButtonUp(0)) {
		showinventory = false;
		//   hold_down=false;
	}


	/*  if (Mathf.Abs(Camera.main.ScreenToWorldPoint(Input.mousePosition).x - transform.position.x) < 0.09 && Mathf.Abs(Camera.main.ScreenToWorldPoint(Input.mousePosition).x - transform.position.x) < 0.01) {
        Debug.Log(Input.mousePosition.x + " positon inside ENEMy PATROL" + transform.position.x);

        showinventory = true;
        if (power_ups_clone == null)
            power_ups_clone = Instantiate(power_ups_prefab, enemy_position, Quaternion.identity);
		    active_enemy_position = this.gameObject.transform.position;
		       Time.timeScale = 0;
        

    } 
    else {
    		
    
    } */



}

function OnCollisionEnter2D(col: Collision2D) {
	//Debug.Log(col.gameObject.name);
	if (col.gameObject.name == "Crate") {
		if (death_otos_instance == null) {
			var exp = Instantiate(explosion, transform.position, Quaternion.identity);

			death_otos_instance = Instantiate(death_otos, Vector2(transform.position.x, transform.position.y + delta_y), Quaternion.identity);
			Destroy(cratedestroyer);
			Destroy(col.gameObject);
			Destroy(this.gameObject);
		}

	}
}





function OnMouseDrag() {

	if (Mathf.Abs(WhiteWolfMovement.characterposition.y - transform.position.y) < 0.3) {

		showinventory = true;
		hold_down = true;
		Time.timeScale = 0;

		if (power_ups_clone == null) power_ups_clone = Instantiate(power_ups_prefab, enemy_position, Quaternion.identity);
		active_enemy_position = this.gameObject.transform.position;
		BioGum_show = true;




	}
}


function OnMouseUp() {
	showinventory = false;
	//Debug.Log("function exit ");
	Time.timeScale = 1;
	//yield WaitForSeconds(2);
	//hold_down=false;




}

function OnMouseExit() {
	//hold_down=false;


}

function OnMouseEnter() {
	//hold_down=false;

}