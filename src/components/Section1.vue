<template>
    <div class="section section1">
        <p id="text1">Top triangle</p>
        <div class="triangle">
            <div class="top-triangle"></div>
        </div>
    </div>
</template>

<script>  export default {
    name: "Section1",
  }
</script>

<style scoped>
    .top-triangle {
        width: 0;
        height: 0;
        border-left: 125px solid transparent;
        border-right: 125px solid transparent;
        border-top: 125px solid blue;

    }
    .section1 {
        top: 0;
        right: 100%;
    }

    #text1 {
        position: absolute;
        right: 50%;
        top: -20%;
        transform: translateX(50%);
    }
</style>