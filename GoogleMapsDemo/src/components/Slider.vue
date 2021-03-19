<template>
  <section class="relative mx-20  pb-28" id="hero">
    <div id="hero-slider">
      <div
        class="hero-slide-item rounded-md"
        style="background-image:url('/img/header.jpg');"
      >
        <div class="hero-slider-marketing justify-left p">
          <div>
            <h3 class="text-5xl font-bold font-serif ">
              Discover Your New <br />Destination
            </h3>

            <h2 class="font-serif" id="header-subtitle">
              Hi! discover your next great adventure with us.
            </h2>
          </div>
          <!-- SEARCH FORM HEADER-->
          <form
            text-white-200
            action="../dist/destinations.html"
            method="post"
            id="add-form"
            class="demoForm"
          >
            <div class="showcase-form card ">
              <h3 class="text-gray-900 font-bold font-serif">SEARCH TRIP</h3>

              <label for="fname">Country</label>
              <input
                type="text"
                id="country-input"
                placeholder="Country name "
              />

              <label for="fname">City</label>
              <input type="text" id="city-input" placeholder="City name " />

              <label for="month">Month</label>
              <select class="p-1  text-white-500" id="month" name="month">
                <option value="destination"> Select Month </option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Slider",
};
</script>

<style>
li {
  padding-top: 5px;
}
.w-1\/4 {
  padding: 10px;
}
@media (max-width: 642px) {
  .w-full,
  .bottom {
    text-align: center;
  }
  .pl-8 {
    padding-left: 0px;
  }
}

.card {
  background: rgba(255, 255, 255, 0.2);
  color: #333;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 10px;
}
.showcase-form {
  position: relative;
  height: 300px;
  width: 300px;
  z-index: 100;
  justify-self: flex-end;
  animation: slideInFromRight 1s ease-in;
}

.showcase-form .form-control {
  margin: 20px 0;
}

.showcase-form input[type="text"],
.showcase-form input[type="month"],
select,
.showcase-form input [type="text"],
select {
  width: 100%;
  font-size: 16px;
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

label {
  color: #333;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 700;
  font-size: 14px;
}

/* Style the submit button */
button[type="submit"] {
  width: 100%;
  background-color: #28527a;
  color: white;
  padding: 10px 8px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}



#hero-slider .hero-slide-item {
  position: relative;
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}

#hero-slider .hero-slider-marketing {
  position: absolute;
  z-index: 2;
  /*text-align: center;*/
  color: #fff;
  top: 50%;
  left: 0;
  right: 0;
  margin: -100px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column;*/
}

#hero-slider .slick-dots {
  bottom: 35px;
}

#hero-slider .slick-dots li button:before {
  color: #fff;
  opacity: 1;
  padding: 2px 2px 2px 3px;
  border: 3px solid transparent;
  border-radius: 20px;
}
</style>
