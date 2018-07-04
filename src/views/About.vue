<script>
export default {
    data () {
        return {
            imgUrl: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530276163439&di=c35165f55bd2322af59f6fdb114bb0a5&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ffc1f4134970a304eb5088f73ddc8a786c9175c14.jpg`
        }
    }
}
</script>

<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div aspectratio emlice-top>
            <div aspectratio-content>
                <img :src="imgUrl" alt="">                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
[emlice-top] {
    width: 60vw;
    margin: 10px auto
}
[emlice-top] {
    aspect-ratio: '1000:1500'
}
img { width: 100% }
</style>
