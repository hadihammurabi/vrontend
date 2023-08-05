<template>
  <top-bar></top-bar>
  <nav id="bar-left">
    <div><router-link to="/">Home</router-link></div>
    <div><router-link to="/book">Books</router-link></div>
    <div><router-link to="/about">About</router-link></div>
    <div><router-link to="/auth">Login</router-link></div>
  </nav>
  <main id="main">
    <router-view></router-view>
  </main>
</template>

<style scoped>
#bar-left {
  width: 240px;
  top: 56px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);
  height: calc(100% - 56px);
  position: fixed;
  left: 0;
}

#main {
  margin-left: 240px;
  margin-top: 56px;
}
</style>

