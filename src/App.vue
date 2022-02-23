<template>
  <ul>
    <li>
      <router-link :to="{ path: '/' }">HOME</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'About' }">About</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<scrpt></scrpt>
