<template>
    <div class="nav-h">
        <h3><img class="logomark-img" src="../assets/logo.png"><span>{{app_name}}</span></h3>
        <div class="notice-banner">a fee-less decentralized marketplace for micro-contracts that runs on trust and ⚡</div>
    </div>
</template>

<script>
export default {
    name: 'LandingNav',
    props: {
        app_name: String
    }
}
</script>

<style lang="scss" scoped>
 .nav-h {
    h3 {
        color: #2c3e50;
        .logomark-img {
            width: 24px;
            border-radius: 22%;
            margin-right: 9px;
            cursor: pointer;
            display: -webkit-inline-box;
            margin-top: -20px;
        }
        span {
            margin-top: -1px;
        }
    }
    .notice-banner {
        color: #444444;
        padding-left: 22px !important;
        font-size: 11px;
        font-family:apercuMono;
        background-color: #e7e7e7;
        padding: 6px;
        align-items: center;
        display: flex;
        border-radius: 16px;
    }
}
    
</style>
