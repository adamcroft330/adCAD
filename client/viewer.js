let scene, camera, renderer, mesh;

function initViewer(container) {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ canvas: container });
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.position.z = 5;

    controls = new THREE.OrbitControls( camera, renderer.domElement );
}

function render() {
    requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera);
}


function updateMesh(meshDescription){
    if(mesh)
        scene.remove(mesh);
    try{
        let geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(meshDescription.vertices, 3));
        geometry.setAttribute('normal', new THREE.Float32BufferAttribute(meshDescription.normals, 3));
        geometry.setIndex(meshDescription.indices);
        mesh = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
        scene.add(mesh);
    } catch(e){
        console.log("mesh generation failed")
    }
}
