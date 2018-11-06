<template>
    <div class="section section2">
        <p id="text2">Right triangle</p>
        <div class="triangle rotate-180">
            <div class="right-triangle"></div>
        </div>
    </div>
</template>

<script>
  import ScrollMagic from 'scrollmagic';

  export default {
    name: "Section2",
    props: ['controller']
  }
</script>

<style scoped>
    .right-triangle {
        width: 0;
        height: 0;
        border-top: 125px solid transparent;
        border-bottom: 125px solid transparent;
        border-left: 125px solid red;
    }
    .section2 {
        top: 0;
        left: 100%;
    }
    #text2 {
        position: absolute;
        right: -40%;
        top: 50%;
        transform: translateY(-50%);
    }
</style>