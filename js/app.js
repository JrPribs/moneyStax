var money, money2;
var billSize = {
    length: 6.125,  // inches
    width: 2.61,    // inches
    thick: 0.0043,   // inches
    weight: 1       // grams
}

var sizeOpts = {
    stacked: {
        length: billSize.length,
        height: billSize.thick,
        depth: billSize.width
    }
};

var averageMale = {
    height: {
        in: 69.7,
        ft: 5.83,
        cm: 177
    }
};


 window.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById('theMoney');
    var engine = new BABYLON.Engine(canvas, true);
    var scene = createScene('man.babylon', 'stacked');
    engine.runRenderLoop(function(){
        scene.render();
    });
    window.addEventListener('resize', function(){
        engine.resize();
    });


    function createScene(selectedMesh, orient){
        var scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 2, -75, BABYLON.Vector3.Zero(0,1,100), scene);
        camera.attachControl(canvas, true);
        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

        /************************
          Money Render Handling        
        ************************/
        
        var moneyMat = new BABYLON.StandardMaterial('moneyMat', scene);
        moneyMat.alpha = 1;
        moneyMat.diffuseColor = new BABYLON.Color3(.02,.36,.15);
        
        var moneyMat2 = new BABYLON.StandardMaterial('moneyMat2', scene);
        moneyMat2.alpha = 1;
        moneyMat2.diffuseColor = new BABYLON.Color3(0.64, 0.74, 0.6);
        moneyMat2.visibility = 0;
        
        money = BABYLON.MeshBuilder.CreateBox('money', sizeOpts[orient], scene);
        money.material = moneyMat;
        
        money2 = BABYLON.MeshBuilder.CreateBox('money2', sizeOpts[orient], scene);
        money2.material = moneyMat2;
        // money.position.y = 1;
        money.position.x = -20;
        money2.position.x = -20;
        
        buildStacks();
        
        /******************************
          Compare Mesh Render Handling        
        ******************************/
        BABYLON.SceneLoader.ImportMesh("", "meshes/", selectedMesh, scene, function(addedMeshes) {

        });
        
        // create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
        var ground = BABYLON.Mesh.CreateGround('ground1', 100, 100, 2, scene);        // return the created scene
        return scene;

    }

    /************************
      Money Stack Handling        
    ************************/
    
    function buildStacks() {
        var compareSize = averageMale.height.in;
        var billNum = compareSize / billSize['thick'];
        
        for( var i= 0; i< billNum; i++) {
            var newBill;
            if (billNum>1){
                money2.visibility = 1;
            }
            if (i%2) {
                newBill = money.createInstance("money-" + i);
            } else {
                newBill = money2.createInstance("money2-" + i);
            }
            newBill.position.y += billSize['thick'] * i;
        }
    }
});