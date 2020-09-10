/**************************
  COUNTDOWN COMPONENT
 **************************/
Vue.component('countdown', {
  template: `
  <section class="countdown">
    
    <div v-show="!expired" class="timer">
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.days }}</p>
        <p class="label">days</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.hours }}</p>
        <p class="label">hours</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.minutes }}</p>
        <p class="label">minutes</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.seconds }}</p>
        <p class="label">seconds</p>
      </div>
      <p class="text">for launch</p>
    </div>

    <div v-show="expired" class="expired-timer timer">
      <div class="box">
        <div class="spacer"></div>
        <p class="value">FRAT is live</p>
        <p class="label">Redirecting now</p>
      </div>
    </div>
   
  </section>
`,
  
 data() {
   return{
     deadline: 'Sept 15, 2020 08:00:00',
     days: 'HI',
     hours: 'TH',
     minutes: 'ER',
     seconds: 'E!',
     expired: false 
   };
 },
  
 computed: {
   theTime(){
     var ctx = this;
         
     // Countdown loop    
     var x =  setInterval(function(){
       
       // Difference between the 2 dates
       var countDownDate = new Date(ctx.deadline).getTime(),
           now = new Date().getTime(),
           diff = countDownDate - now,

           // Time conversion to days, hours, minutes and seconds
           tdays = Math.floor(diff / (1000 * 60 * 60 * 24)),
           thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
           tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
           tseconds = Math.floor((diff % (1000 * 60)) / 1000);
       
       // Keep 2 digits
       ctx.days = (tdays < 10) ? '0' + tdays : tdays;
       ctx.hours = (thours < 10) ? '0' + thours : thours;
       ctx.minutes = (tminutes < 10) ? '0' + tminutes : tminutes;
       ctx.seconds = (tseconds < 10) ? '0' + tseconds : tseconds;

       // Check for time expiration
       if(diff < 0){
         clearInterval(x);
         ctx.expired = true;
       }
       if(tdays <= 0 && tminutes <= 0 && thours <= 0 && tminutes <= 0)
       {
         window.location.replace("/welcome");
       }
     }, 1000);
     
     // Return data
     return {
       days: ctx.days,
       hours: ctx.hours,
       minutes: ctx.minutes,
       seconds: ctx.seconds
     };
   }
 }
});



/**************************
  ROOT COMPONENT
 **************************/
var app = new Vue({
  el: '#app'
});