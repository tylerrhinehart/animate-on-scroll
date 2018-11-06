<template>
    <div class="section section4">
        <p id="text4">Left triangle</p>
        <div class="triangle">
            <div class="left-triangle"></div>
        </div>
    </div>
</template>

<script>
  import ScrollMagic from 'scrollmagic';

  export default {
    name: "Section4",
    props: ['controller']
  }
</script>

<style scoped>
    .left-triangle {
        width: 0;
        height: 0;
        border-top: 125px solid transparent;
        border-bottom: 125px solid transparent;
        border-left: 125px solid purple;
    }
    .section4 {
        top: 100%;
        right: 100%;
    }
    #text4 {
        position: absolute;
        left: -40%;
        top: 50%;
        transform: translateY(-50%);
    }
</style>