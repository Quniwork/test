<template>
  <header class="page-header">
    <div class="header">
      <div class="header-top">
        <div class="page-content">
          <div class="header-logo">
            <a href="/">
              <img src="/image/logo.png" alt="logo" />
            </a>
          </div>
          <div class="mainnav-wrap">
            <nav class="ele-navbar">
              <ul class="ele-navbar-list">
                <li v-for="item in navItems" :key="item.id" class="ele-navbar-link-wrap">
                  <a v-if="item.value !== 'more'" :href="item.link" class="ele-navbar-link" :class="{ active: item.active }">
                    <p class="ele-navbar-title">
                      {{ item.title }}
                    </p>
                  </a>
                  <a v-else href="#" class="ele-navbar-more">
                    <img src="/image/sub.png" alt="more" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="header-middle">
        <div class="page-content">
          <div v-for="(group, index) in headerCommonLinks" :key="index" class="common-link-group">
            <div class="group-icon" :class="`group-icon0${index + 1}`"></div>
            <div v-for="link in group" :key="link[0]" class="ele-common-link">
              <a :href="link[1]">{{ link[0] }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="page-content">
          <div class="login-wrap">
            <form @submit.prevent="handleLogin">
              <div class="login-left">
                <label class="ele-login-unit">
                  <input
                    id="js-username"
                    title="请输入4-15个字元, 仅可输入英文字母以及数字的组合!!"
                    name="username"
                    type="text"
                    maxlength="15"
                    pattern="[a-zA-Z0-9]{4,15}"
                    required="required"
                    class="ele-login-input"
                    v-model="username"
                    @focus="handleFocus('username')"
                    @blur="handleBlur('username')"
                    @input="handleInput('username')"
                  />
                  <p class="ele-login-placeholder" :style="{ opacity: usernamePlaceholderOpacity }">账号</p>
                  <span class="ele-acc-unicod">@520</span>
                </label>
                <label class="ele-login-unit">
                  <input
                    title="请填写 6-12 位大小写英数字"
                    :type="passwordType"
                    name="password"
                    autocomplete="off"
                    maxlength="12"
                    pattern="[a-zA-Z0-9]{6,12}"
                    required="required"
                    class="ele-login-input"
                    v-model="password"
                    @focus="handleFocus('password')"
                    @blur="handleBlur('password')"
                    @input="handleInput('password')"
                  />
                  <p class="ele-login-placeholder" :style="{ opacity: passwordPlaceholderOpacity }">密码</p>
                  <a href="#" class="ele-show-password black" @click.prevent="togglePasswordVisibility" :class="isPasswordVisible ? 'open' : 'close'">
                  </a>
                </label>
                <button type="submit" class="ele-login-submit">登入</button>
                <a href="#" class="ele-join-btn">会员注册</a>
                <div class="login-line">/</div>
                <a href="#" class="ele-login-forget">忘记密码</a>
              </div>
            </form>
          </div>
          <div class="lang-wrap">
            <div class="ele-lang-wrap">
              <div
                v-for="lang in langs"
                :key="lang.code"
                :title="lang.title"
                :data-title="lang.code"
                class="ele-lang-option"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const langs = ref([
  { code: 'zh-tw', title: '繁体中文' },
  { code: 'zh-cn', title: '简体中文' },
  { code: 'en', title: 'English' }
])

const navItems = ref([
  { value: 'home', title:'首頁', link:'#', active:true },
  { value: 'sports', title:'体育赛事', link:'/sports', active:false },
  { value: 'live', title:'視訊直播', link:'/live', active:false },
  { value: 'casino', title:'电子游艺', link:'/casino', active:false },
  { value: 'lottery', title:'彩票遊戲', link:'/lottery', active:false },
  { value: 'card', title:'棋牌游戏', link:'/card', active:false },
  { value: 'promotion', title:'优惠活动', link:'/promotion', active:false },
  { value: 'mobile', title:'手机下注', link:'#', active:false },
  { value: 'more', title:'更多', link:'#', active:false }
])

const headerCommonLinks = ref([
  [['微信/支付寶','#'], ['網銀/銀聯','#']],
  [['时时返水','#'], ['免费试玩','#']],
  [['代理合作','#'], ['代理注册','#']],
  [['VIP查询','#'], ['优惠大厅 ','#']],
  [['联系我们','#'], ['关于我们','#']]
])

const username = ref('');
const password = ref('');
const isPasswordVisible = ref(false);

const usernamePlaceholderOpacity = ref(1);
const passwordPlaceholderOpacity = ref(1);

const handleFocus = (field) => {
  if (field === 'username' && username.value.trim() === '') {
    usernamePlaceholderOpacity.value = 0.5;
  }
  if (field === 'password' && password.value.trim() === '') {
    passwordPlaceholderOpacity.value = 0.5;
  }
};

const handleBlur = (field) => {
  if (field === 'username') {
    usernamePlaceholderOpacity.value = username.value.trim() === '' ? 1 : 0;
  }
  if (field === 'password') {
    passwordPlaceholderOpacity.value = password.value.trim() === '' ? 1 : 0;
  }
};

const handleInput = (field) => {
  if (field === 'username') {
    usernamePlaceholderOpacity.value = username.value.trim() !== '' ? 0 : 0.5;
  }
  if (field === 'password') {
    passwordPlaceholderOpacity.value = password.value.trim() !== '' ? 0 : 0.5;
  }
};

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const passwordType = computed(() => (isPasswordVisible.value ? 'text' : 'password'));

const showBalance = ref(false);
let hideTimer = null;
const startHideTimer = () => {
  hideTimer = setTimeout(() => {
    showBalance.value = false;
  }, 300);
};

const cancelHideTimer = () => {
  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }
  showBalance.value = true;
};
</script>