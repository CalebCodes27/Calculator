using System;
using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;

public class pacwalk : MonoBehaviour
{
    public float speed = 3;
    public float radius = 0.8f;
    

    public Vector3 direction;

    // Start is called before the first frame update
    void Start()
    {
        direction = new Vector2(1, 0);
    }

    // Update is called once per frame
    void Update()
    {
        movement();
    }

    void movement()
    {
        if (Input.GetKeyDown(KeyCode.UpArrow)||Input.GetKeyDown(KeyCode.W))
            direction = new Vector3(0, 1, 0);
        if (Input.GetKeyDown(KeyCode.DownArrow)||Input.GetKeyDown(KeyCode.S))
            direction = new Vector3(0, -1, 0);

        if (Input.GetKeyDown(KeyCode.LeftArrow)||Input.GetKeyDown(KeyCode.A))
            direction = new Vector3(-1, 0, 0);
        if (Input.GetKeyDown(KeyCode.RightArrow)||Input.GetKeyDown(KeyCode.D))
            direction = new Vector3(1, 0, 0);

        transform.position += speed * Time.deltaTime * direction;
        //if(  Physics2D.OverlapCircle(transform.position, radius ,)

    }
      
   
}
