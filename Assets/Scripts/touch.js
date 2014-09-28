#pragma strict

var touch : GameObject;
	function Update () {
		if (Input.anyKeyDown) {
			// Construct a ray from the current mouse coordinates
			var ray : Ray = Camera.main.ScreenPointToRay (Input.mousePosition);
			if (Physics.Raycast (ray)) {
				// Create a particle if hit
				Instantiate (touch, transform.position, transform.rotation);
			}
		}
	}