<template>
  <div class="page-body">
    <div class="first-game-wrap">
      <div class="first-game-title">
        <img src="/image/lang/zh-cn/title_txt01.png">
      </div>
      <div class="page-content">
        <div v-for="(item, index) in gameList" :key="index" :class="['first-game-item', `first-game-item0${index + 1}`]">
          <div class="game-wrap">
            <a v-for="(game, gIndex) in item.games" :key="gIndex" href="#">{{ game }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="first-platform-wrap">
      <div class="first-platform-title">
        <img src="/image/lang/zh-cn/title_txt02.png">
      </div>
      <div class="page-content">
        platform
      </div>
    </div>
    <div class="first-mobile-wrap">
      <div class="page-content">
        <div class="first-mobile-left">
          <div class="first-mobile-title">
            <img src="/image/lang/zh-cn/title_txt03.png">
          </div>
          <div class="first-mobile-subtitle">
            <div class="mobile-subtitle-item">
              <div class="item-icon item-icon01"></div>
              <div class="item-text">随时随地</div>
            </div>
            <div class="mobile-subtitle-item">
              <div class="item-icon item-icon02"></div>
              <div class="item-text">安全高效</div>
            </div>
            <div class="mobile-subtitle-item">
              <div class="item-icon item-icon03"></div>
              <div class="item-text">操作简易</div>
            </div>
          </div>
          <div class="first-mobile-desc">
            <p>最顶尖的手机投注APP希望您始终能感受到品牌对专业的执着！</p>
            <p>全球最热独家研发体育平台，业界赔率最高，每天超过千场运动类赛事，多种类玩法让您场场精彩，观看球赛更加刺激有趣，由专业的信息管理团队提供，最准确的实时体育赛事结果与再现投注服务，各类球赛火热开打中!!</p>
          </div>
          <div class="first-mobile-download">
            <div class="qrcode-wrap">
              <img src="/image/not-use/lang/zh-cn/qrcode_a.png">
            </div>
            <div class="support-wrap">
              <p>支持IOS&Android全移动设备</p>
              <img src="/image/first_mobile04.png">
            </div>
          </div>
        </div>
        <div class="first-mobile-right">
          <img src="/image/first_mobile01.png">
        </div>
      </div>
    </div>
    <div class="first-info-wrap" ref="infoWrap">
      <div class="first-info-title">
        <img src="/image/lang/zh-cn/title_txt04.png">
      </div>
      <div class="page-content">
        <div class="info-top">
          <div class="info-top-item info-top-item01"><span>{{ numbers[0] }}</span></div>
          <div class="info-top-item info-top-item02"><span>{{ numbers[1] }}</span></div>
          <div class="info-top-item info-top-item03"><span>{{ numbers[2] }}</span></div>
          <div class="info-top-item info-top-item03"><span>{{ numbers[3] }}</span></div>
        </div>
        <div class="info-bottom">
          <div v-for="(item, index) in infoList" :key="index" class="info-bottom-item">
            <div class="bottom-item-title">{{ item.title }}</div>
            <div class="bottom-item-desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'first'});

// first-game
const gameList = [
  { games: ['BB体育', 'New bb体育', '波音体育', '沙巴体育', '皇冠体育', '熊猫体育'] },
  { games: ['糖果缤纷乐', 'Crash', '糖果派对', '麻将胡了', '金瓶梅2', '森林舞会'] },
  { games: ['炸金花', '极速百家乐', '龙虎斗', '21点', '抢庄牛牛', '通比牛牛'] }
];

// first-info: bottom
const infoList = [
  {
    title: '极致体验',
    desc: '使用当今最先进的财务系统，保证存款秒速到账，提款3分钟内到账，同时支持超过38家银行。我们承诺每天提款无上限，随时服务，风雨无阻！'
  },
  {
    title: '通信安全',
    desc: '全站使用全球最先进的GlobalTrust SSL 高级加密算法，从用户接入的瞬间已经使用独立的加密信道与您的计算机链接，为您的资金与信息安全保驾护航。'
  },
  {
    title: '多类平台',
    desc: 'casino澳门新葡京对于优质第三方娱乐平台的引入，从未停止，为的是给您不同的感官娱乐体验。'
  },
  {
    title: '多款游戏',
    desc: '提供从5000场体育赛事，到真人娱乐，数字彩到老虎机的各类游戏，满足您多样的娱乐需求。'
  }
];

// first-info: top
const targetNumbers = [60, 50, 90, 55];
const numbers = ref([0, 0, 0, 0]);
const infoWrap = ref(null);
let animated = false;

const animateNumber = (index, target) => {
  let current = 0;
  const interval = setInterval(() => {
    if (current < target) {
      current += Math.ceil(Math.random() * 5);
      if (current > target) current = target;
      numbers.value[index] = current;
    } else {
      clearInterval(interval);
    }
  }, 50);
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        targetNumbers.forEach((target, index) => {
          setTimeout(() => {
            animateNumber(index, target);
          }, index * 200);
        });
      }
    });
  });

  if (infoWrap.value) {
    observer.observe(infoWrap.value);
  }
});
</script>