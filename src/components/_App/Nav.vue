<template>
    <div class="a-nav">
        <div class="bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg"><h2>Wage</h2></div>
                    <div class="col-lg-2"><p>Hello, {{ user ? user.username : "Without Name" }}</p></div>
                        <div class="col-lg-2 avatar" v-if="profilePictureExists(user)">
                            <img class="avatar-image" src=""/>
                        </div>
                        <div class="col-lg-2 avatar" v-else>
                            <img class="avatar-image" src="../../assets/imgs/_states/noProfilePicture.png"/>
                        </div>
                    <div>Resources</div>
                    <div>Action</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as blockstack from 'blockstack';
import { mapState, } from 'vuex';

export default {
    name: 'AppNav',
    computed: {
        ...mapState(['user'])
    },
    methods: {
        profilePictureExists: function(user) {
            let person = new blockstack.Person(user)
            if(person.avatarUrl()) {
                document.getElementById('avatar-image').setAttribute('src', person.avatarUrl())
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .a-nav {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        .bar {
            padding: 0.92857143em 0;
            background: #252525;
            /* nah: max-width: 1140px; */
            .container {  
                width: 100%;
                padding-right: 15px;
                padding-left: 15px;
                margin-right: auto;
                margin-left: auto; 
                .row {
                    display: inline-flex;
                    flex-wrap: wrap;
                    margin-left: -15px;
                    margin-right: -15px;
                    color: #FFF;

                    .col-lg {
                        flex: 0 0 8.333%;
                        max-width: 8.333%;
                        float: none;
                        padding: 0 20px;
                    }
                    .col-lg-2 {
                        flex: 0 0 33.3%;
                        max-width: 33.333%;
                    }
                }
            }
        }
    }


</style>
