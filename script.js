var objects = [];

var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );


      //Stars
      var starsGeometry = new THREE.Geometry();

      for ( var i = 0; i < 100000; i ++ ) {

      	var star = new THREE.Vector3();
      	star.x = THREE.Math.randFloatSpread( 2000 );
      	star.y = THREE.Math.randFloatSpread( 2000 );
      	star.z = THREE.Math.randFloatSpread( 2000 );

      	starsGeometry.vertices.push( star );

      }

      var starsMaterial = new THREE.PointsMaterial( { color: 0xfffffff } );

      var starField = new THREE.Points( starsGeometry, starsMaterial );
//
// scene.add( starField );
    //The Hero
		var geometry = new THREE.SphereGeometry( 5, 32, 32 );
			var material = new THREE.MeshBasicMaterial( { wireframe: true, color: 0x00ff00 } );
			var sphere = new THREE.Mesh( geometry, material );
			scene.add( sphere );

          //Orbit
          var radius = 2;
				var segments = 32;
				var rings = 32;
				var gRadius = 0.1;
				var gSegments = 2;
				var gRings = 30;
          var cubeGeometry = new THREE.SphereGeometry(radius, segments, rings);
				var cubeMaterial = new THREE.MeshBasicMaterial({
				  color: 0x00fffff,
				  wireframe: false
				});
				var gravityGeometry = new THREE.SphereGeometry(gRadius, gSegments, gRings);
				var gravityMaterial = new THREE.MeshBasicMaterial({
          color: 0x000000
				});

				var centreOfGravity = new THREE.Mesh( gravityGeometry, gravityMaterial);

				scene.add( centreOfGravity );

				var sunPivot = new THREE.Object3D();
				centreOfGravity.add( sunPivot );


				var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        var geometry = new THREE.SphereGeometry( 3, 10, 2 );
    			var material = new THREE.MeshBasicMaterial( { wireframe: true, color: 0x0000ff } );
    			var sphere2 = new THREE.Mesh( geometry, material );


        var geometry = new THREE.BoxGeometry( 4, 4, 4 );
      			var material = new THREE.MeshBasicMaterial( {  color: 0xffff00 } );
      			var sphere3 = new THREE.Mesh( geometry, material );
            var geometry = new THREE.CylinderGeometry( 1, 3, 3, 4 );
              var material = new THREE.MeshBasicMaterial( {wireframe: true, color: 0xffffff } );
              var sphere4 = new THREE.Mesh( geometry, material );
              sphere4.rotation.z = 15;

				cube.orbPos = { z: 0, y: 0, x:0}
				sunPivot.orb = {y: 0.01}

				sunPivot.add( cube );
        sunPivot.add( sphere2 )
        sunPivot.add( sphere3 )
        sunPivot.add( sphere4 )
				objects.push( cube );
        objects.push( sphere2 );
        objects.push( sphere3 );
        objects.push( sphere4 );
      //Positions
      sphere2.position.z = 0;
      cube.position.z = -25;
      sphere3.position.z = 25;
      sphere4.position.x = -25;
      cube.position.x = 0;
      sphere2.position.x = 25;
      sphere3.position.x = 0;
			camera.position.z = 12;
      camera.position.x = 5;
      sunPivot.rotation.x = Math.PI / 2;
      centreOfGravity.position.z = -1000;

			var animate = function () {
				requestAnimationFrame( animate );

				sphere.rotation.x += 0.01;
				sphere.rotation.y += 0.01;
        cube.rotation.y += 0.01;
        sphere2.rotation.y += 0.01;
        sphere3.rotation.y += 0.01;
        sphere4.rotation.y += 0.01;

        sunPivot.rotation.y += 0.01;
        sphere.position.z -= 1;
        camera.position.z -= 1;
				renderer.render( scene, camera );
			};

			animate();
