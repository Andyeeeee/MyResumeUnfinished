<template>
  <div id="TitlePic">
    <div class="clock-numbrt">
      <div class="d-flex colck-box">
        <div class="click">
          <div id="hour"></div>
          <div id="minutes"></div>
          <div id="second"></div>
        </div>
      </div>
      <div id="time"></div>
    </div>
    <a href="https://github.com/Andyeeeee" class="git">
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

      hour.style.transform = `rotate(${date.getHours() * 30 + 0}deg)`
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
