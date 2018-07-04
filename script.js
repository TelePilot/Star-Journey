var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
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

scene.add( starField );
		var geometry = new THREE.SphereGeometry( 5, 32, 32 );
			var material = new THREE.MeshBasicMaterial( { wireframe: true, color: 0x00ff00 } );
			var sphere = new THREE.Mesh( geometry, material );
			scene.add( sphere );

			camera.position.z = 12;
      camera.position.x = 5;
			var animate = function () {
				requestAnimationFrame( animate );

				sphere.rotation.x += 0.01;
				sphere.rotation.y += 0.01;
        sphere.position.z -= 1;
        camera.position.z -= 1;
				renderer.render( scene, camera );
			};

			animate();
