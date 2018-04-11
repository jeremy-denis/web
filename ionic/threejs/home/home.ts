import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as THREE from 'three';

import { OrbitControls } from 'three-orbitcontrols-ts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {
  @ViewChild('myCanvas') canvasEl: ElementRef;
  _ELEMENT;

  ngAfterViewInit() {
    this._ELEMENT 			= this.canvasEl.nativeElement;

    var width  = window.innerWidth;
    var height = window.innerHeight;
    var viewAngle = 45;
    var nearClipping = 0.1;
    var farClipping  = 9999;
    //1 - on cree une scene
    var scene  = new THREE.Scene();
    
    //2 - on cree une camera
    var camera = new THREE.PerspectiveCamera(viewAngle, width/height, nearClipping, farClipping);
    camera.position.z = 10;
    var controls = new OrbitControls(camera);

    //3 - on cree un renderer 
    var renderer = new THREE.WebGLRenderer();

    //4 - on cree notre source de lumiere
    var lightAngle = 0;

    ///On rend la scene
    renderer.setSize(width, height);

    this._ELEMENT.appendChild(renderer.domElement);

    var light = new THREE.PointLight(0xFFFFFF);
    light.position.x = 0;
    light.position.y = 10;
    light.position.z = 0;
    scene.add(light);

    function init() {
      var cubeGeometry = new THREE.BoxGeometry(1,1,1,1);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0xFF0000});
      var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

      var coneGeometry = new THREE.ConeGeometry(0.5,1,4);
      var coneMaterial = new THREE.MeshLambertMaterial({color:0x00FF00});
      var cone = new THREE.Mesh(coneGeometry, coneMaterial);

      var sphereGeometry = new THREE.SphereGeometry(0.5,8,8);
      var sphereMaterial = new THREE.MeshLambertMaterial({color:0x0000FF});
      var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

      cube.position.x = 2;
      cube.position.z = -5;
      cone.position.z = -5;
      sphere.position.z = -5;
      sphere.position.x = 5;
      scene.add(cube);
      scene.add(cone);
      scene.add(sphere);
    }

    function animate() {
      lightAngle += 5;
      if (lightAngle > 360) {
          lightAngle = 0;
      }

      light.position.x = 5 * Math.cos(lightAngle * Math.PI / 180);
      light.position.z = 5 * Math.sin(lightAngle * Math.PI / 180);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    init();
    animate();
  }

  constructor(public navCtrl: NavController) {
  }
}
