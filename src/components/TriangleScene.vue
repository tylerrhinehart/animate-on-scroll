<template>
    <div class="pinContainer">
        <h1>Animate On Scroll Demo</h1>
        <section1></section1>
        <section2></section2>
        <section3></section3>
        <section4></section4>
        <section5></section5>
    </div>
</template>

<script>
  import Section1 from './Section1.vue';
  import Section2 from './Section2.vue';
  import Section3 from './Section3.vue';
  import Section4 from './Section4.vue';
  import Section5 from './Section5.vue';

  export default {
    name: "TriangleScene",
    data() {
      return {
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
        ],
        images: [
          '/assets/helmet1.jpg',
          '/assets/helmet2.jpg',
          '/assets/helmet3.jpg',
          '/assets/helmet4.jpg',
        ],
        currentImage: {curImg: 0}
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
    },
    mounted() {
      this.$nextTick(this.triangleScene);

      window.addEventListener('resize', (e) => {
        this.$ksvuescr.$emit('destroy')
        this.triangleScene();
      });
    },
    components: {
      Section1,
      Section2,
      Section3,
      Section4,
      Section5,
    }
  }
</script>

<style scoped>
    .section6 {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        opacity: 1;
        width: 75%;
    }

    .info-columns {
        display: flex;
        height: 50vh;
    }

    .column-left {
        flex: 1;
        position: relative;
    }

    .column-right {
        flex: 1;
    }

    .info-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /*opacity: 0;*/
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .info-items {
        list-style: none;
        font-size: 1.5rem;
    }

    .info-items li {
        padding: .5rem 0;
        /*opacity: 0;*/
    }

    .info-image:not(:first-child) {
        opacity: 0;
    }

    .info-item:not(:first-child) {
        opacity: 0;
    }
</style>