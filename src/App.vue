<template>
    <div>
        <v-header :seller="seller"></v-header>
        <div class="tab border-1px">
            <div class="item-tab">
                <router-link to="/goods">商品</router-link>
            </div>
            <div class="item-tab">
                <router-link to="/ratings">评价</router-link>
            </div>
            <div class="item-tab">
                <router-link to="/seller">商家</router-link>
            </div>
        </div>
        <keep-alive>
            <router-view :seller="seller"></router-view>
        </keep-alive>
    </div>
</template>

<script type="text/ecmascript-6">
    import {urlParse} from './common/js/utils';
    import header from './components/header/Header.vue';
    const ERROR_OK = 0;
    export default {
        data() {
            return {
                seller: {
                    id: (() => {
                        let queryParam = urlParse();
                        return queryParam.id;
                    })()
                }
            };
        },
        created() {
            this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
                response = response.body;
                if (response.errorCode === ERROR_OK) {
                    this.seller = Object.assign({}, this.seller, response.data);
                    // console.log(this.seller);
                }
            });
        },
        components: {
            'v-header': header
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./common/stylus/mixin.styl"
    .tab
        display: flex
        width: 100%
        height: 40px
        line-height: 40px
    //border-bottom: 1px solid rgba(7, 17, 21, 0.1)
        border-1px(rgba(7, 17, 21, 0.1))
        .item-tab
            flex: 1
            text-align: center
            & > a
                font-size: 14px
                color: rgb(75, 85, 93)
                &.active
                    color: rgb(240, 20, 20)
</style>
