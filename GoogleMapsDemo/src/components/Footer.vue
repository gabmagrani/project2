<template>
  <!-- footer + newsletter ============================== -->
  <footer >
<div class="p-10 font-sanrif text-gray-900 flex justify-between mt-20">

  <!--   left -->
  <div class="md:w-1/2 ">

    <h3 class="text-lg mb-2">Join the Newsletter</h3>
    <form class="flex">
      <input type="email" class="w-full bg-gray-200 rounded-l py-3 px-4 outline-none focus:bg-gray-200">
      <button class=" text-white rounded-r px-4 input">Join</button>
    </form>

  </div>

  <!--   right -->
  <div class="flex items-center">
    Copyright &copy;  2021 - Infinity <br>
    </div>
 
  </div>
  
   
 
  </footer>
</template>


<script>
export default {
  name: "Footer",
};
</script>

<style>

.input{
  background: #28527a;
}
</style>
