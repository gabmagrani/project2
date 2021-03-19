<template>
<div>
     <center>
    <button @click="goHome" class="bg-gray-500 rounded-md ">Go Home</button>
   </center> 
    
  <section class="aboutBottom ">
    <div class="aboutAuthorInfo">
      <div class="authorPic  aboutAuthorPic">
        <img src="@/assets/circle-cropped.png" class="h-32"/>
      </div>
    </div>
    <p class="aboutAuthorText">
      Hi, I`m Gabriela Magrani a Jr.Web Developer!
<a href="#" class="text-gray-700 hover:text-gray-800 m-2  "><i class="fab fa-instagram"></i></a>
    <a href="#" class="text-gray-700 hover:text-gray-800 m-2  "><i class="fab fa-youtube"></i></a>
    <a href="#" class="text-gray-700 hover:text-gray-800 m-2  "><i class="fab fa-facebook-f"></i></a>
    </p>
  </section>
  <div id="aboutContainer">
    <div class="aboutArticle">
      <h2>ABOUT</h2>

      <p>
         Project for the Full-Stack Web Development-Course at the
        <a target="_blank" href="https://hamburgcodingschool.com/">Hamburg Coding School.</a>
      </p>

      <p>
       
      </p>
     
      <a href="" target="_blank">
        <i class="fab fa-github"></i>
        Check out this project on my Github
      </a>
    </div>
  </div>
  
<Footer class="flex-shrink-0" />
</div>
</template>
    
      
    


<script>
import Footer from '@/components/Footer.vue'

export default {
    name:'NewPost',
    components: {
        Footer,
    },
     methods: {
        goHome(){
            this.$router.push('/');
        }
   }
}
</script>

<style scoped>
  #aboutContainer {
    display: flex;
    justify-content: center;
    width: 100%;
    /* min-height: 800px; */
    /* margin-top: 7rem; */
  }

  .authorPic img {
    border-radius: 50%;
    float: left;
    bottom: 0;
    margin: 4px 16px 0 0;
    height: 120px;
  }

  p.author {
    color: #4a5568;
    margin-top: 0.3rem;
    display: inline-block;
  }

  .aboutAuthorInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 30%;
    padding-right: 30%;
    font-size: 0.8rem;
    color: #888;
    height: 100%;
  }

  .aboutAuthorInfo .author {
    font-size: 1.2rem;
    margin-bottom: 0;
  }

  .aboutAuthorText {
    margin-top: 0;
    padding: 0 15%;
    font-size: 0.8rem;
    color: #888;
    height: 100%;
    text-align: center;
  }

  .aboutBottom {
    margin-top: 3rem;
  }

  .aboutArticle {
    width: 90%;
    color: #333;
  }

  .aboutArticle p {
    color: #666;
  }

  .aboutArticle h2 {
    margin-bottom: 2rem;
  }

  .aboutArticle a:hover,
  .aboutAuthorText a:hover {
    text-decoration: underline;
  }

  /* ABOUT RESPONSIVE */
  /* ========================================================================== */
  @media (min-width: 640px) {
    #aboutContainer {
      flex-wrap: wrap;
      flex-direction: row;
    }
    .aboutAuthorInfo {
      flex-direction: row;
    }

    .aboutAuthorText {
      padding-left: 30%;
      padding-right: 30%;
      text-align: center;
      margin-top: 2rem;
    }

    .aboutArticle {
      width: 60%;
    }
  }
</style>
