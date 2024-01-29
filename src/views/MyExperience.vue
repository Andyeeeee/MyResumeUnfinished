<template>
  <div id="MyExperience">

    <v-container>
      <h1>我的經歷</h1>
      <h1>主要選寫工作經歷</h1>


      <div class="d-flex flex-column flex-sm-row flex-wrap  justify-space-around ">

        <div class="card-box">

          <div>

            <div>2023/3/1</div>
            <div>2圖片</div>
            <div>食品檢驗人員</div>

          </div>
          <div>

            <div>2023/3/1</div>
            <div>2圖片</div>
            <div>窗簾業務</div>

          </div>
          <div>

            <div>2023/3/1</div>
            <div>uber</div>
            <div>參加職訓局網也前端課程</div>

          </div>


        </div>

        <div class="card-box">


          <div>

            <div>2021</div>
            <div>職訓期間非工作經歷</div>
            <div>工讀</div>

          </div>
          <div>

            <div>2023</div>
            <div>2圖片</div>
            <div>工讀</div>

          </div>

        </div>



      </div>


    </v-container>
  </div>
  <section>
    <ul class="d-flex exp justify-space-around" style="list-style: none;">
      <li>
        <img src="../assets/Experience/food.png" alt="">
      </li>
      <li>
        <img src="../assets/Experience/food2.jpg" alt="">
      </li>
      <li>
        <img src="../assets/Experience/uber.png" alt="">
      </li>
      <li>
        <img src="../assets/Experience/windows.jpg" alt="">
      </li>
    </ul>
  </section>
</template>

<script setup>
</script>
<style>
.card {
  text-align: center;
  width: 500px;
  height: 200px;
  border: 1px solid black;
  background-image: url('../assets/Tree.png');
  background-size: contain;
}

.exp img {
  width: 100px;
  border-radius: 25%;
}
</style>