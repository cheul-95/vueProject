<template>
  <header class="header">
    <div class="header-container">
      <a href="/">
        <h1 class="sr-only">이상철 개발자 포토폴리오</h1>
        <img class="logo" src="./../assets/scleelogo.png">
      </a>
      <nav id="list_pc">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#employment">Employment History</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button class="mobile-menu-btn" id="list_mobile"></button>
    </div>  
  </header>
  <aside>
  <!-- 네비게이션 점들 -->
    <div class="nav-dots">
        <div class="nav-dot active" onclick="showContent(1)"></div>
        <div class="nav-dot" onclick="showContent(2)"></div>
        <div class="nav-dot" onclick="showContent(3)"></div>
        <div class="nav-dot" onclick="showContent(4)"></div>
        <div class="nav-dot" onclick="showContent(5)"></div>
    </div>
  </aside>
</template>
<script>
export default {
  name: 'AppHeader'
}
</script>
<style scoped>
.logo{
  width :  6.6rem;
  height : 2.3rem;
  padding : 0.5rem 0 0 2rem;
}
 /* 헤더 컨테이너 스타일 - 로고 왼쪽, 메뉴 오른쪽 */
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip-path: inset(50%);
	border: 0;
	clip: rect(0 0 0 0);
}
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background:#283618; /* 연한 파란빛 아이보리 */
  padding: 0.5rem 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

nav ul {
  display: flex;
  justify-content: right;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0px 2em ;
}

nav ul li a {
  color:#FEFAE0;
  font-weight: 600;
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
  transition: color 0.3s ease, border-color 0.3s ease;
}

nav ul li a:hover {
  color:#DDA15E;
  cursor: pointer;
}
/* 모바일 메뉴 컨테이너를 오른쪽 정렬 */
#list_mobile {
    display: none;
    text-align: right; /* 또는 display: flex; justify-content: flex-end; */
}

.mobile-menu-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 15px;
    position: relative;
    width: 40px;
    height: 40px;
    margin-left: auto; /* 오른쪽으로 밀기 */
}

/* 가운데 줄 */
.mobile-menu-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 2px;
    background-color: #FEFAE0;
    border-radius: 1px;
}

/* 위아래 줄 */
.mobile-menu-btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 2px;
    background-color: #FEFAE0;
    border-radius: 1px;
    box-shadow: 
        0 -6px 0 #FEFAE0,
        0 6px 0 #FEFAE0;
}

/* 768px 이하에서만 적용 */
@media screen and (max-width: 768px) {
    #list_pc {
        display: none;
    }
    
    #list_mobile {
        display: flex;
        justify-content: flex-end; /* 오른쪽 정렬 */
    }
}
/* 태블릿 이하 크기에서 숨김 (768px 이하) */
@media screen and (max-width: 768px) {
    #list_pc {
        display: none;
    }
}
/* 태블릿 이상 크기에서 숨김 (768px 이하) */
@media screen and (min-width: 768px) {
    #list_mobile {
        display: none;
    }
}

/* 네비게이션 */
.nav-dots {
    position: fixed;
    right: 30px;
    top: 50%;
    transform: translateY(-100%);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.nav-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}
.nav-dot.active {
    background: #9c1e22;
    /* border-color: white; */
    transform: scale(1.2);
}

</style>
