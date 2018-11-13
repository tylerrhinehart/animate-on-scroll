<template>
    <div class="helmetContainer">
        <div id="helmet"></div>
    </div>
</template>

<script>
  // import * as THREE from 'three';

  export default {
    name: "Helmet3D",
    data() {
      return {
        parent: null,
        helmet1: null,
        helmet2: null,
        helmet3: null,
      }
    },
    methods: {
      initHelmet() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('helmet').appendChild(renderer.domElement);

        camera.position.z = 25;

        var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        keyLight.position.set(-100, 0, 100);

        var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        fillLight.position.set(100, 0, 100);

        var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        backLight.position.set(100, 0, -100).normalize();

        scene.add(keyLight);
        scene.add(fillLight);
        scene.add(backLight);

        this.parent = new THREE.Object3D();

        this.helmet1 = new THREE.Object3D();
        this.helmet1.position.x = 18;
        this.helmet1.position.y = 7;

        this.helmet2 = new THREE.Object3D();
        this.helmet2.position.x = -18;
        this.helmet2.position.y = 7;

        this.helmet3 = new THREE.Object3D();
        // parent.position.x = 7;
        this.helmet3.position.y = -14;

        this.parent.add(this.helmet1);
        this.parent.add(this.helmet2);
        this.parent.add(this.helmet3);

        scene.add(this.parent);

        var loader = new THREE.GLTFLoader();

        loader.load('/assets/3DModels/StormTrooper/scene.gltf', function (gltf) {
          this.helmet1.add(gltf.scene);
        }.bind(this));
        loader.load('/assets/3DModels/StormTrooper/scene.gltf', function (gltf) {
          this.helmet2.add(gltf.scene);
        }.bind(this));
        loader.load('/assets/3DModels/StormTrooper/scene.gltf', function (gltf) {
          this.helmet3.add(gltf.scene);
        }.bind(this));

        var animate = function () {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };

        animate();

        var scrollPos = 0;

        function rotateOnScroll(obj) {
          var rotation = 0.1;
          if (window.pageYOffset > scrollPos) {
            rotation *= -1;
          }
          scrollPos = window.pageYOffset;

          obj.rotation.y += rotation;
        }

        // window.addEventListener('scroll', function (e) {
        //   rotateOnScroll(parent);
        // })
      },
      helmetScene() {
        const tl = new this.$gsap.TimelineMax();

        tl.to(this.helmet1.position, 1, {x: 0, y: 0, ease: Linear.easeNone});
        tl.to(this.helmet2.position, 1, {x: 0, y: 0, ease: Linear.easeNone});
        tl.to(this.helmet3.position, 1, {x: 0, y: 0, ease: Linear.easeNone});
        tl.to(this.parent.position, 1, {z: 15, ease: Linear.easeNone});
        tl.to(this.parent.rotation, 1.5, {y: (2 * Math.PI), ease: Linear.easeNone});

        const scene = new this.$scrollmagic.Scene({
          triggerElement: '.helmetContainer',
          triggerHook: 'onLeave',
          duration: '100%'
        })
          .setPin('.helmetContainer')
          .setTween(tl);

        this.$ksvuescr.$emit('addScene', 'helmetScene', scene);
      }
    },
    mounted() {
      this.initHelmet();

      this.helmetScene();
    }
  }
</script>

<style scoped>
.helmetContainer {
    /*opacity: 0;*/
    /*z-index: 0;*/
}
</style>