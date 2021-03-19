<template>
  <section class="mx-14" id="destination">
    <div class="container mx-auto ">
      <div class="flex flex-wrap justify-left  mb-24">
        <div class="w-full lg:w-6/12 ">
          <h2 class="text-4xl font-semibold font-serif uppercase">
            DESTINATIONS
          </h2>
        </div>

        <!-- DESTINATIONS Card Wrapper -->

        <div
          class=" mt-8  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  gap-16  pb-8 mr-14"
        >
        <router-link to='/destinations'>
          <div
            class="relative overflow-hidden transition duration-300 ease-out transform rounded shadow-md w-60 h-72 hover:shadow-lg hover:scale-105 cursor-pointer"
          >
          
            <img
              class="  object-cover w-60 h-72"
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />
            
            <div
              class="absolute font-extrabold text-lg -mt-16 text-white  px-4 "
            >
              <span class="">London,England</span>
              <span class="block text-white-500">2019</span>
            </div>
          </div>
          </router-link>
         <!--2-->
         <router-link to='/destinations'>
          <div
            class= "relative overflow-hidden transition duration-300 ease-out transform rounded shadow-md w-60 h-72 hover:shadow-lg hover:scale-105 cursor-pointer"
          >
            <img
              class=" object-cover w-60 h-72"
              src="https://images.unsplash.com/photo-1547131303-543b40443e96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
              alt=""
            />
            <div class="absolute font-extrabold text-lg -mt-16 text-white  px-4 ">
              <div class="">
               
                 <span class=""> Lausane, Switzerland</span>
              <span class="block text-white-500">2019</span>
              </div>
            </div>
          </div>
          </router-link>
       <!--3-->
       <router-link to='/destinations'>
          <div
            class="relative overflow-hidden transition duration-300 ease-out transform rounded shadow-md w-60 h-72 hover:shadow-lg hover:scale-105 cursor-pointer"
          >
            <img
              class="object-cover w-60 h-72"
              src="https://images.unsplash.com/photo-1478827387698-1527781a4887?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />

            <div class="absolute font-extrabold text-lg -mt-16 text-white  px-4 ">
              <div class="">
                
                 <span class="">Torres del Paine National Park, Chile</span>
              <span class="block text-white-500">2018</span>
              </div>
            </div>
          </div>
          </router-link>
        <!--4-->
        <router-link to='/destinations'>
          <div
            class="relative overflow-hidden transition duration-300 ease-out transform rounded shadow-md w-60 h-72 hover:shadow-lg hover:scale-105 cursor-pointer"
          >
            <img
              class="object-cover w-60 h-72"
              src="https://images.unsplash.com/photo-1575468434276-dcd2e5d4550f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />
            <div class="absolute font-extrabold text-lg -mt-16 text-white  px-4 ">
              <div class="">
                
                 <span class="">Angra dos Reis,Brazil</span>
              <span class="block text-white-500">2013</span>
              </div>
            </div>
          </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Previews",
};
</script>

<style scoped>
.border-destination {
  width: 230px;
  height: 5px;
  display: inline-block;
  margin-top: 2px;
  left: 50%;
}
</style>
