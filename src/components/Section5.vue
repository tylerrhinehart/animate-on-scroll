<template>
    <div class="section section5">
        <!--<div class="square">-->
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/S8ky_uKTw98?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <!--</div>-->
    </div>
</template>

<script>
  export default {
    name: "Section5",
  }
</script>

<style scoped>
    .section5 {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        opacity: 0;
        width: 50vw;
        height: 28.25vw;
    }
    .square {
        width: 100%;
        height: 100%;
    }
</style>