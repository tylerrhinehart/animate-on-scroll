<template>
    <div id="app">


            <triangle-scene></triangle-scene>


        <div class="infoScene" id="infoScene">
            <info-scene></info-scene>
        </div>
        <!--<div id="scene2" style="height:1px"></div>-->


        <!--<div class="info">-->
        <!--info and stuff here-->
        <!--</div>-->

        <!--<div class="flightPath">-->
        <!--<div id="trigger"></div>-->
        <!--<div id="target">-->
        <!--<img id="plane" src="./assets/example_bezier.png">-->
        <!--<img id="plane2" src="./assets/example_bezier.png">-->
        <!--<div style="height:120vh"></div>-->
        <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
  import TriangleScene from './components/TriangleScene.vue';
  import InfoScene from './components/InfoScene.vue';

  export default {
    name: 'app',
    data() {
      return {
      }
    },
    methods: {
      triangleScene() {
        const sections = 4;

        // Create a new Timeline (equivalent to new TimelineMax())
        const tl = new this.$gsap.TimelineMax()

        let ww = window.innerWidth;
        let wh = window.innerHeight;

        // tl.add('topBottom', 1);
        // tl.add('leftRight', 2);

        for (var i = 0; i < 4; i++) { // For each panel in this.panels array:
          let animTo;
          switch (i) { // Set animFrom value, depending on the index i of the item
            case 0:
              animTo = {x: (ww / 2) + 117.5, y: (wh / 2) - 125, opacity: 1, scale: 1.5, ease: Linear.easeNone};
              break; // First panel is already visible on page load, so no animation
            case 1:
              animTo = {x: -((ww / 2) + 117.5), y: (wh / 2) - 125, opacity: 1, scale: 1.5, ease: Linear.easeNone};
              break;
            case 2:
              animTo = {x: -((ww / 2) + 117.5), y: -((wh / 2) + 125), opacity: 1, scale: 1.5, ease: Linear.easeNone};
              break;
            case 3:
              animTo = {x: (ww / 2) + 117.5, y: -((wh / 2) + 125), opacity: 1, scale: 1.5, ease: Linear.easeNone};
              break;
          }
          if (i % 2 === 1) {
            tl.to(`.section${i + 1}`, 1.5, animTo, 'topBottom')
              .to(`#text${i + 1}`, 1, {opacity: 1, ease: Linear.easeNone}, 'topBottom');
          } else {
            tl.to(`.section${i + 1}`, 1.5, animTo, 'leftRight')
              .to(`#text${i + 1}`, 1, {opacity: 1, ease: Linear.easeNone}, 'leftRight');
          }
        }

        // tl.add('fade', 4);
        tl.to('.section5', .2, {zIndex: 1, ease: Linear.easeNone});
        tl.to('.section5', 1, {opacity: 1, ease: Linear.easeNone}, 'fade')
        // .to('.section5', 1, {width: '50vw', height: '28.25vw'})
          .to(`#text1`, .75, {opacity: 0, ease: Linear.easeNone}, 'fade')
          .to(`#text2`, .75, {opacity: 0, ease: Linear.easeNone}, 'fade')
          .to(`#text3`, .75, {opacity: 0, ease: Linear.easeNone}, 'fade')
          .to(`#text4`, .75, {opacity: 0, ease: Linear.easeNone}, 'fade');


        // create scene and set its params
        const scene = new this.$scrollmagic.Scene({
          triggerElement: '.pinContainer',
          triggerHook: 'onLeave',
          duration: `${sections * 25}%`
        })
          .setPin('.pinContainer')
          .setTween(tl);

        this.$ksvuescr.$emit('addScene', 'triangleScene', scene);
      },
      // infoScene() {
      //   const tl = new this.$gsap.TimelineMax();
      //
      //
      //
      //   const scene = new this.$scrollmagic.Scene({
      //     triggerElement: '.infoScene',
      //     triggerHook: .3,
      //     duration: '100%'
      //   })
      //     .setPin('.infoScene')
      //
      //   this.$ksvuescr.$emit('addScene', 'infoScene', scene)
      // },
      flightPathScene() {
        let target = document.getElementById('target');
        let trigger = document.getElementById('trigger');
        let plane = document.getElementById('plane');
        let plane2 = document.getElementById('plane2');

        let path1 = {
          entry: {
            curviness: 1.25,
            autoRotate: true,
            values: [
              {x: 100, y: -20},
              {x: 300, y: 10},
              {x: 500, y: 10},
              {x: 700, y: 10},
              {x: 960, y: 10},
            ]
          }
        };

        let ww = window.innerWidth;

        let path2 = {
          entry: {
            curviness: 1.25,
            autoRotate: true,
            values: [
              {x: -100, y: -20},
              {x: -300, y: 10},
              {x: -500, y: 10},
              {x: -700, y: 10},
              {x: -960, y: 10},
            ]
          },
          // looping: {
          //   curviness: 1.25,
          //   autoRotate: true,
          //   values: [
          //     {x: -510, y: 60},
          //     {x: -620, y: -60},
          //     {x: -500, y: -100},
          //     {x: -380, y: 20},
          //     {x: -500, y: 60},
          //     {x: -580, y: 20},
          //     {x: -620, y: 15},
          //   ]
          // },
          // leave: {
          //   curviness: 1.25,
          //   autoRotate: true,
          //   values: [
          //     {x: ww - 660, y: 20},
          //     {x: ww - 800, y: 130},
          //     {x: ww - 300, y: -100},
          //   ]
          // }
        };

        const tl1 = new this.$gsap.TimelineMax()
          .to(plane, 1.2, {css: {bezier: path1.entry}, ease: Power1.easeInOut})
          // .to(plane, 2, {css: {bezier: path1.looping}, ease: Power1.easeInOut})
          // .to(plane, 1, {css: {bezier: path1.leave}, ease: Power1.easeInOut})
          .to(plane2, 1.2, {css: {bezier: path2.entry}, ease: Power1.easeInOut})
        // .to(plane2, 2, {css: {bezier: path2.looping}, ease: Power1.easeInOut})
        // .to(plane, 1, {css: {bezier: path.leave}, ease: Power1.easeInOut});

        // const tl2 = new this.$gsap.TimelineMax()
        //   .to(plane2, 1.2, {css: {bezier: path2.entry}, ease: Power1.easeInOut});

        const scene1 = new this.$scrollmagic.Scene({
          triggerElement: trigger,
          duration: 500,
          offset: 0
        })
          .setPin(target)
          .setTween(tl1);

        // const scene2 = new this.$scrollmagic.Scene({
        //   triggerElement: trigger,
        //   duration: 500,
        //   offset: 100
        // })
        //   .setPin(target)
        //   .setTween(tl2);

        this.$ksvuescr.$emit('addScene', 'flightPathScene', scene1)
        // this.$ksvuescr.$emit('addScene', 'flightPathScene', scene2)
      }
    },
    mounted() {
      // this.$nextTick(this.triangleScene);
      // this.$nextTick(this.flightPathScene);
    },
    destroyed() {
      // Destroy ScrollMagic when our component is removed from DOM
      this.$ksvuescr.$emit('destroy')
    },
    components: {
      TriangleScene,
      InfoScene
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #fff;
        background: darkslategrey;
    }

    .section {
        position: absolute;
        opacity: 0;
    }

    .triangle {
        width: 250px;
        height: 250px;
    }

    .rotate-180 {
        transform: rotate(180deg);
    }

    body {
        margin: 0;
    }

    .pinContainer {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
    }

    .infoScene {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
    }

    .info {
        height: 75vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: lightblue;
        font-size: 3rem;
    }

    .section p {
        opacity: 0;
    }

    .hide-text p {
        opacity: 0 !important;
    }

    .flightPath {
        overflow: hidden;
        position: relative;
    }

    #trigger {
        min-height: 1px;
        background: #000;
    }

    #plane {
        position: absolute;
        left: -100px;
    }

    #plane2 {
        position: absolute;
        right: -100px;
    }
</style>
