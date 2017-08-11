<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" :src="seller.avatar">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span><span
                        class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count" @click="showDetail">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
            <span class="bulletin-title"></span><span
                class="bulletin">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background">
            <img :src="seller.avatar" width="100%" height="100%">
        </div>
        <div v-show="detailShow" class="detail">
            <div class="detail-wrapper clearfix">
                <div class="detail-main">
                    <h1 class="name">{{seller.name}}</h1>
                    <div class="star-wrapper">
                        <v-star :size="48" :score="seller.score"></v-star>
                    </div>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">优惠信息</div>
                        <div class="line"></div>
                    </div>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">商家公告</div>
                        <div class="line"></div>
                    </div>
                    <h3 class="bulletin-text">{{seller.bulletin}}</h3>
                </div>
            </div>
            <div class="detail-close" @click="closeDetail">
                <i class="icon-close"></i>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import star from '../star/Star.vue';
    export default {
        props: {
            seller: {
                type: Object
            }
        },
        data() {
            return {
                detailShow: false
            };
        },
        methods: {
            showDetail() {
                this.detailShow = true;
            },
            closeDetail() {
                this.detailShow = false;
            }
        },
        created() {
            this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
        },
        components: {
            'v-star': star
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"
    .header
        color: #fff
        position: relative
        background-color: rgba(7, 17, 27, 0.5);
        .content-wrapper
            padding: 24px 12px 18px 24px
            position: relative
            .avatar
                display: inline-block
                img
                    border-radius: 2px
            .content
                display: inline-block
                margin: 2px 0 0 16px
                position: absolute
                .title
                    font-size: 0
                    font-weight: blod
                    height: 18px
                    line-height: 18px
                    .brand
                        display: inline-block
                        width: 30px
                        height: 18px
                        bg_image(brand)
                        background-size: 30px 18px
                        background-repeat: no-repeat
                        vertical-align: top
                    .name
                        display: inline-block
                        margin-left: 6px
                        font-size: 16px
                .description
                    font-size: 12px
                    line-height: 12px
                    margin: 8px 0 10px 0
                .support
                    font-size: 0
                    .icon
                        display: inline-block
                        width: 12px
                        height: 12px
                        background-size: 12px 12px
                        background-repeat: no-repeat
                        vertical-align: top
                        &.decrease
                            bg_image(decrease_1)
                        &.discount
                            bg_image(discount_1)
                        &.guarantee
                            bg_image(guarantee_1)
                        &.invoice
                            bg_image(invoice_1)
                        &.special
                            bg_image(special_1)
                    .text
                        display: inline-block
                        margin-left: 4px
                        line-height: 12px
                        font-size 10px
            .support-count
                right 12px
                bottom: 18px
                padding: 0 8px
                border-radius: 14px
                position: absolute
                background: rgba(0, 0, 0, 0.2)
                height: 24px
                line-height: 24px
                .count
                    vertical-align: top
                    font-size 12px
                .icon-keyboard_arrow_right
                    font-size: 10px
        .bulletin-wrapper
            height: 28px
            line-height: 28px
            padding: 0 22px 0 12px
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            background-color: rgba(7, 17, 27, 0.2);
            position: relative
            .bulletin-title
                width: 22px
                height: 12px
                margin-top: 7px
                bg_image: (bulletin)
                background-size: 22px 12px
                background-repeat: no-repeat
                display: inline-block
                vertical-align: top
            .bulletin
                margin 0 4px
                font-size: 10px
                vertical-align: top
            .icon-keyboard_arrow_right
                position: absolute
                font-size: 10px
                top: 8px
                right: 12px
        .background
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            z-index: -1
            filter: blur(10px)

        .detail
            width: 100%
            height: 100%
            top: 0
            left: 0
            overflow: auto
            position: fixed
            z-index: 100
            background: rgba(7, 17, 27, 0.8)
            .detail-wrapper
                min-height: 100%
                width: 100%
                .detail-main
                    margin-top: 64px
                    padding-bottom: 64px
                    .name
                        line-height: 16px
                        text-align: center
                        font-size: 16px
                        font-weight: 700
                    .star-wrapper
                        text-align: center
                        margin-top: 16px
                        padding: 2px 0
                    .title
                        display: flex
                        width: 80%
                        margin 30px auto 24px auto
                        .line
                            flex: 1
                            position: relative
                            top: -6px
                            border-bottom 1px solid rgba(255, 255, 255, 0.2)
                        .text
                            padding: 0 12px
                            font-size: 14px
            .detail-close
                position: relative
                width: 32px
                height: 32px
                margin: -64px auto 0 auto
                clear: both
                font-size: 32px
</style>
