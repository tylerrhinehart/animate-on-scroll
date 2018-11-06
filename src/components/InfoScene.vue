<template>
    <div class="section section6">
        <h2>Info and Stuff</h2>
        <div class="info-columns">
            <div class="column-left">
                <div v-for="(img, index) in images" :id="`info-image${index}`" :style="`background-image: url(${img})`" :key="index" class="info-image"></div>
            </div>
            <div class="column-right">
                <ul class="info-items">
                    <li class="info-item" v-for="(item, index) in items" :id="`info-item${index}`" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "InfoScene",
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
      infoScene() {
        const tl = new this.$gsap.TimelineMax();

        const img = document.getElementById('info-image');

        for (var i = 1; i < this.items.length; i++) {
          tl.to(`#info-item${i}`, 1, {opacity: 1, ease: Linear.easeNone, delay: 1.5}, `imageInfo${i}`)
            .to(`#info-image${i}`, 1, {opacity: 1, ease: Linear.easeNone, delay: 1.5}, `imageInfo${i}`)
        }

        const scene = new this.$scrollmagic.Scene({
          triggerElement: '.infoScene',
          triggerHook: .3,
          duration: '100%'
        })
          .setPin('.infoScene')
          .setTween(tl);

        this.$ksvuescr.$emit('addScene', 'infoScene', scene)
      },
    },
    mounted() {
      this.$nextTick(this.infoScene);
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