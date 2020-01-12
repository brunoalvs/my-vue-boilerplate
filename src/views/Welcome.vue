<template>
  <div class="home">
    <div class="hello">
      <h1>my Vue Boilerplate</h1>
      <p>Temos texto, e podemos utilizar buttons e inputs.</p>
      <Button>myButtion</Button>
      <ButtonOutlined>ButtonOutlined</ButtonOutlined>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { Button, ButtonOutlined } from '../components/atoms/buttons'

export default {
  name: 'home',
  components: {
    Button,
    ButtonOutlined
  }
}
</script>
