#pragma strict
var power_ups_prefab: GameObject;
var power_ups_clone: GameObject;
function Start() {}
function Update() {
    //Debug.Log("from power ups"+power_ups_clone);
  	 transform.position.x = EnemyPatrol.active_enemy_position.x;
    transform.position.y = EnemyPatrol.active_enemy_position.y + 1;
    //Time.timeScale=1;
    if (EnemyPatrol.showinventory)
        this.renderer.material.color.a = 1;
    else
        this.renderer.material.color.a = 0;
    //Debug.Log("fdsfsf");
}
function OnMouseDown() {
    //Time.timeScale=0;
}
function onMouseUp() {
    //Time.timeScale=1;
   // Debug.Log("mouse up is working ");
}