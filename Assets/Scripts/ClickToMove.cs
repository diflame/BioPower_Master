using UnityEngine;
using System.Collections;

public class ClickToMove : MonoBehaviour 
{
	public Vector3 position;
	public bool run = false;
	
	void Update () 
	{
		if (Input.GetMouseButtonDown(0))
		{
			LocatePosition();
		}
		
		MoveToPosition ();
	}
	void LocatePosition ()
	{
		RaycastHit hit;
		Ray ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		
		if (Physics.Raycast (ray, out hit, 1000)) 
		{
			position = new Vector3(hit.point.x, hit.point.y, hit.point.z);
		}
	}
	void MoveToPosition ()
	{
		Quaternion newRotat = Quaternion.LookRotation (position - transform.position, Vector3.forward);
		newRotat.x = 0.0f;
		newRotat.y = 0.0f;
		transform.rotation = Quaternion.Slerp (transform.rotation, newRotat, Time.deltaTime * 10.0f);
		transform.position = Vector3.MoveTowards (transform.position, position, 3.0f * Time.deltaTime); }

}