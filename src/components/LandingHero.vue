<template>
    <div v-if="!loggedIn" class="l-hero">
        <!-- -->
        <LandingNav :app_name="domain_name"/>
        <div id="copy-img-array">
            <div class="box-w-shdw-lg"><img src="https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"></div>
            <div class="box-w-shdw-lg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSknSFEYRdxLDm-d2tzrJx4lDIbsSg_Y1LzMQOGZh9sydGgEJGlg"></div>
        </div>
        <div id="blurb-hd">
            <br><span class="subheading">You have skills. People have problems. Get paid to solve them.</span><br>
            <p class="sh-blurb">Using Wage, you can store contract history and client connections. Wage is a decentralized marketplace for micro_contracts that runs on trust and ⚡ Blockstack ensures your data will never be lost. </p>
        </div>
        <div id="cta-hd">
            <button v-on:click="login()" id="sib-1" type="submit">Get Started with Blockstack</button>
            <a class="signupbtn" href="https://browser.blockstack.org/sign-up">Or, you can sign up here.</a>
        </div>
        <LandingFooter />
        <!-- -->
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import LandingNav from '@/components/LandingNav.vue'
import LandingFooter from '@/components/LandingFooter.vue'

export default {
    name: 'LandingHero',
    components: { LandingNav, LandingFooter, },
    props: {},
    data: function () {
        return {
            counter: 0,
            domain_name: "Wage.pm",
        }
    },
    computed: {
        ...mapState(['loggedIn'])
    },
    methods: {
        ...mapActions(['login'])
    },
}
</script>

<style scoped lang="scss">

body {
    font-size: 17px;
    background-image: linear-gradient(#f4f4f4 40%, #eeeeee 60%);
    max-width: 600px !important;
    height: 80% !important;
    padding: 12px 118px !important;
}

@media only screen and (max-width: 600px)  {
  body {
    /* max-width: 600px; */
      height: 80%;
      padding: 30px 84px; 
  }
}

@font-face {
    font-family: apercuMed;
    src: url('../assets/_fonts/Apercu\ Medium.otf');
}

@font-face {
    font-family: apercuReg;
    src: url('../assets/_fonts/Apercu\ Regular.otf');
}

@font-face {
    font-family: apercuMono;
    src: url('../assets/_fonts/Apercu\ Mono.otf');
}

.l-hero {

}

#copy-img-array {
    display: inline-flex;
    margin-bottom: -20px;
    .box-w-shdw-lg {
        overflow: hidden; 
        cursor: pointer; 
        margin: 30px 12px; 
        border-radius: 9px; 
        height: 150px; 
        width: 110px; 
        box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);
        img {
            left: 30%;width: 102%;height: 101%;
        }
    }
}

#blurb-hd {
    span.subheading {
        font-family: apercuReg;
        font-size: 32px;
        line-height: 1.35;
    }
    p {
        font-family: apercuReg;
        font-size: 15px;
        letter-spacing: -.35px;
    }
    .sh-blurb {
        color: #797979;
    }
}

#cta-hd {
    a {
        color: #211f6d;
        font-weight: 600;
        text-decoration: none;
        transition: color 0.2s ease;
    }

    a:hover { color: blue;}
    .signupbtn {padding-left: 6px;}

    button {
        color: white;
        font-size: 18px;
        background-color: blue;
        padding: 19px 34px;
        border-radius: 44px;
        cursor: pointer;
        transform: translateY(2px);
        transition: background-color 0.2s ease;
    }
    button:hover {
        background-color: #211f6d;
    }
}

@media only screen and (max-width: 600px)  {

    p {font-size: 14px;width: 110%;}

    .signupbtn {
        padding-top: 20px;
        display: block;
        padding-left: 39px;
    }
}
</style>
