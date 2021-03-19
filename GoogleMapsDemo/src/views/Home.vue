<template>
  <div class="home">
    <SideBar />
    <Slider  />
    <Previews />
    <GoogleMap :markers="markers" :center="center" />
    <Footer class="flex-shrink-0" />
    
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue'
import Previews from '@/components/Previews.vue'
import SideBar from '@/components/SideBar.vue'
import Slider from '@/components/Slider.vue'
import Footer from '@/components/Footer.vue'




export default {
  name: 'Home',
  components: {
    GoogleMap,
    Previews,
    SideBar,
    Slider,
    Footer,
    
  },
  data() {
    return {
      center: { lat: 53.551086, lng: 9.993682 },
      markers: [
        {
          id: 'hello',
          position: {
            lat: 51.093048, lng: 6.842120
          },
        },
        {
          id: 'hamburg',
          position: {
            lat: 53.551086, lng: 9.993682
          },
        },
        {
         id: 'london',
          position: {
            lat: 51.509865, lng: -0.118092
          },
        },
        {
         id: 'angra dos reis',
          position: {
            lat: -23.00667, lng: -44.31806
          },
        }, 
        {
           id: 'lausanne',
           position: {
            lat: 6.60455, lng: 46.517051
          },
        },
        {
          id: 'chile',
          position: {
          lat: -71.72228, lng: -46.540901
          },
        },
      ]
    }
  }
}
</script>