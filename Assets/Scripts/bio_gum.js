#pragma strict
var bio_gum: Vector2;
static
var bubble_gum__character_anim: boolean;
var inflated_gum_prefab: GameObject;
var inflated_gum: GameObject;
static
var count: int = 0;
static
var move_gum: boolean;


function Start() {

}

function Update() {


	if (power_ups.biogum_taken && !EnemyPatrol.showinventory) {
		Debug.Log(EnemyPatrol.showinventory);
		this.transform.position.x = -100;
		this.transform.position.y = -100;
	}
	if (power_ups.biogum_taken && EnemyPatrol.showinventory) {
		Debug.Log("bio gum activated " + power_ups.biogum_taken);
		this.transform.position.x = EnemyPatrol.active_enemy_position.x - bio_gum.x;
		this.transform.position.y = EnemyPatrol.active_enemy_position.y + bio_gum.y;
		//this.renderer.material.color.a = 1;
		if (Mathf.Abs(this.transform.position.x - Camera.main.ScreenToWorldPoint(Input.mousePosition).x) < 0.1) {



			if (inflated_gum == null) {
				inflated_gum = Instantiate(inflated_gum_prefab, WhiteWolfMovement.characterposition, Quaternion.identity);
				//inflated_gum.renderer.material.color.a=0.57;
				this.transform.position.x = -100;
				this.transform.position.y = -100;

				bubble_gum__character_anim = true;
			} else {
				bubble_gum__character_anim = false;
			}

		}

		//		if(Mathf.Abs(EnemyPatrol.active_enemy_position.x-inflated_gum.transform.position.x)>0.01 && Mathf.Abs(EnemyPatrol.active_enemy_position.y-inflated_gum.transform.position.y)>0.1) 
		move_gum = true;


		//inflated_gum.transform.position = EnemyPatrol.active_enemy_position;



	}

}

function OnMouseDown() {}


function move_gum1() {
	count = count + 1;
	Debug.Log("called" + count);
	inflated_gum.transform.Translate(Vector3.forward * 5 * Time.deltaTime, Camera.main.transform);
	Debug.Log(inflated_gum.gameObject.transform.position + " " + EnemyPatrol.active_enemy_position + " " + WhiteWolfMovement.characterposition);
}