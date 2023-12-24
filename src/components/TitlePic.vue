<template>
  <div id="TitlePic">
    <div class="d-flex  align-center  justify-xl-space-evenly">

      <div class="">天氣、溫度</div>

      <div class="clock-numbrt">
        <div class="d-flex colck-box">
          <div class="click">
            <div id="hour"></div>
            <div id="minutes"></div>
            <div id="second"></div>
            <div class="twelve-six">
              <div class="twelve">12</div>
              <div class="six clock-number-change-way">6</div>
            </div>
            <div class="one-seven">
              <div class="one">1</div>
              <div class="seven clock-number-change-way">7</div>
            </div>
            <div class="two-eight">
              <div class="two">2</div>
              <div class="eight clock-number-change-way">8</div>
            </div>
            <div class="teee-night">
              <div class="tree">3</div>
              <div class="night clock-number-change-way">9</div>
            </div>
            <div class="four-ten">
              <div class="four">4</div>
              <div class="ten clock-number-change-way">10</div>
            </div>
            <div class="five-eleven">
              <div class="five">5</div>
              <div class="eleven clock-number-change-way">11</div>
            </div>
          </div>
        </div>
        <div id="time"></div>
      </div>
      <div class="date">月曆</div>
    </div>
    <a href="https://github.com/Andyeeeee" class="git" target="_blank">
      <button>gitub</button></a>
  </div>
</template>
<script>

export default {
  mounted() {
    // 在mounted生命周期钩子中执行您的JavaScript代码

    setInterval(() => {
      const date = new Date()

      const hour = document.getElementById('hour')
      const minutes = document.getElementById('minutes')
      const second = document.getElementById('second')

      hour.style.transform = `rotate(${(date.getHours() * 30) + (date.getMinutes() * 0.5)}deg)`
      minutes.style.transform = `rotate(${date.getMinutes() * 6 + 0}deg)`
      second.style.transform = `rotate(${date.getSeconds() * 6 + 0}deg)`

      // if (date.getHours() >= 18 || date.getHours() <= 6) {
      // treeshandow.style.display = 'none';
      // `skewX(270deg)`
      // }

      // treeshandow.style.transform = `skewX(${date.getHours() * -15 + 0}deg)`;
    }, 1000)

    function updateTime() {
      const now = new Date()
      let hour = now.getHours()
      const minute = now.getMinutes()
      const second = now.getSeconds()
      const ampm = hour >= 12 ? 'PM' : 'AM'
      hour = hour % 12
      hour = hour || 12
      const timeString = `${hour}:${minute}:${second} ${ampm}`
      document.getElementById('time').textContent = timeString
    }
    setInterval(updateTime, 1000)
  }
}
</script>


<!-- 1小時20度
    半小時 10度
    15分鐘5度
    3分鐘1度
-->
