public var puzzleSound : AudioClip;

function OnTriggerEnter2D (col : Collider2D)
{
    if(col.gameObject.tag == "Puzzle")
    {
        audio.PlayOneShot(puzzleSound);
        Destroy(col.gameObject);
    }
    }