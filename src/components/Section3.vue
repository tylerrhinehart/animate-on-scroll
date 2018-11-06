<template>
    <div class="section section3">
        <p id="text3">Bottom triangle</p>
        <div class="triangle rotate-180">
            <div class="bottom-triangle"></div>
        </div>
    </div>
</template>

<script>
  import ScrollMagic from 'scrollmagic';

  export default {
    name: 'HelloWorld',
    props: ['controller']
  }
</script>

<style scoped>
    .bottom-triangle {
        width: 0;
        height: 0;
        border-left: 125px solid transparent;
        border-right: 125px solid transparent;
        border-top: 125px solid green;
    }
    .section3 {
        top: 100%;
        left: 100%;
    }
    #text3 {
        position: absolute;
        right: 50%;
        bottom: -20%;
        transform: translateX(50%);
    }
</style>
