<template>
  <div id="AboutMe">
    <v-container>
      <h1>關於我</h1>
      <v-row class="align-center">
        <v-col class="v-col-12 v-col-sm-6">
          <div>

            <img src="../assets/Me.jpg" class="me" alt="">
          </div>
        </v-col>

        <v-col class="v-col-12 v-col-sm-6">
          <div class="text">
            <v-table>
              <tr>
                <td>姓名:林駿丞</td>
                <td>出生日:87.01.02</td>
                <td>血型:B</td>
              </tr>
              <tr>
                <td>最高學位:大學</td>
                <td>就讀學校:中華科技大學</td>
                <td>就讀科系:食科系</td>
              </tr>
              <tr>
                <td>國籍:台灣</td>
                <td>兵役:役畢</td>
                <td></td>
              </tr>
            </v-table>

            <br>
            <hr>
            <p>
              我是林駿丞，目前是跨領域轉職，接觸到網頁時愛上網頁自由發揮及開發特性，讓生活更簡單便利，對我來說這就是它的魅力之處。
            </p>

            <br>

            <p>
              長期目標
              程式語言可以做的事情很多，目前的我想是從樹的根底部開始爬，當介面熟練到一定的程度，我會努力往更高的領域攀爬，製作與硬體互動的相關技術，來達成自我價值的實現。
            </p>

          </div>
        </v-col>
        <!-- <div class="gifbox">
            <img src="@/assets/run.gif" class="gif" alt="">
          </div> -->



      </v-row>
      <!-- <v-row class="">
        
        
        <v-col class="v-col-12 v-col-sm-4">123</v-col>
        <v-col class="v-col-12 v-col-sm-4">123</v-col>
        <v-col class="v-col-12 v-col-sm-4">123</v-col>
      </v-row> -->

    </v-container>

    <div>我的相關連結(圖片+連結)(104履歷，cake履歷，github)</div>
    <div>line qrcode</div>
    <ul class="d-flex aboutme-resume " style="list-style: none;justify-content: space-around;">
      <li>
        <a href="">
          <img src="../assets/aboutme/104.png" alt="104" title="104">
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/aboutme/cakeresum.png" alt="cakeresume" title="cakeresume">
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/aboutme/github.png" alt="github" title="github">
        </a>
      </li>
    </ul>

  </div>
</template>
<style>
.aboutme-resume img {
  background-color: antiquewhite;
  border-radius: 50%;
  width: 100px;
}
</style>