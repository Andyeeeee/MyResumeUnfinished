<template>
  <div id="TitlePic">
    <div class="d-sm-flex  align-center  justify-space-evenly">

      <div class="d-none d-md-block">天氣、溫度</div>

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

      <div class="d-none d-sm-block">
        <div class="calendar">
          <div class="title">
            <h1 class="green small" id="calendar-year">Year</h1>


            <a href="" id="prev"><v-icon icon="mdi-arrow-left-bold"></v-icon></a>
            <span class="green" id="calendar-title">Month</span>
            <a href="" id="next"><v-icon icon="mdi-arrow-right-bold"></v-icon></a>
          </div>
          <div class="body">
            <div class="lightgrey body-list">
              <ul>
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
                <li>日</li>
              </ul>
            </div>
            <div class="darkgrey body-list">
              <ul id="days">
              </ul>
            </div>
          </div>
        </div>
      </div>
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

    /*月曆*/

    const monthOlympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthNormal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthName = [
      "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
    ];

    const holder = document.getElementById("days");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const ctitle = document.getElementById("calendar-title");
    const cyear = document.getElementById("calendar-year");

    const myDate = new Date();
    let myYear = myDate.getFullYear();
    let myMonth = myDate.getMonth();
    const myDay = myDate.getDate();

    function dayStart(month, year) {
      const tmpDate = new Date(year, month, 1);
      return tmpDate.getDay();
    }

    function daysMonth(month, year) {
      const tmp = year % 4;
      return tmp === 0 ? monthOlympic[month] : monthNormal[month];
    }

    function refreshDate() {
      let str = "";
      const totalDay = daysMonth(myMonth, myYear);
      const firstDay = dayStart(myMonth, myYear);
      let myclass;
      for (let i = 1; i < firstDay; i++) {
        str += "<li></li>";
      }
      for (let i = 1; i <= totalDay; i++) {
        if ((i < myDay && myYear === myDate.getFullYear() && myMonth === myDate.getMonth()) ||
          myYear < myDate.getFullYear() ||
          (myYear === myDate.getFullYear() && myMonth < myDate.getMonth())) {
          myclass = " class='lightgrey'";
        } else if (i === myDay && myYear === myDate.getFullYear() && myMonth === myDate.getMonth()) {
          myclass = " class='green greenbox'";
        } else {
          myclass = " class='darkgrey'";
        }
        str += "<li" + myclass + ">" + i + "</li>";
      }
      holder.innerHTML = str;
      ctitle.innerHTML = monthName[myMonth];
      cyear.innerHTML = myYear;
    }
    refreshDate();

    prev.onclick = function (e) {
      e.preventDefault();
      myMonth--;
      if (myMonth < 0) {
        myYear--;
        myMonth = 11;
      }
      refreshDate();
    };
    next.onclick = function (e) {
      e.preventDefault();
      myMonth++;
      if (myMonth > 11) {
        myYear++;
        myMonth = 0;
      }
      refreshDate();
    };
  }
}
</script>


<!-- 1小時20度
    半小時 10度
    15分鐘5度
    3分鐘1度
-->
<style>
/*排版*/
.calendar {
  width: 350px;
  /* height: 350px; */
  /* background: #ffffff00; */
  /* box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1); */
  text-align: center;
  /* border: #565656 1px solid; */
}

.body-list ul {
  width: 100%;
  font-family: arial;
  font-weight: bold;
  font-size: 14px;
}

.body-list ul li {
  width: 14.28%;
  height: 36px;
  line-height: 36px;
  list-style-type: none;
  display: block;
  box-sizing: border-box;
  float: left;
  text-align: center;
}

/*顏色*/

.lightgrey {
  color: #a8a8a8;
  /*浅灰色*/
}

.darkgrey {
  color: #565656;
  /*深灰色*/
}

.green {
  color: #6ac13c;
  /*绿色*/
}

.greenbox {
  border: 1px solid #6ac13c;
  background: #e9f8df;
  /*浅绿色背景*/
}
</style>