<template>
  <div>        
    <div v-for="product in foundProducts">
      <div>
        name: {{ product.name }} //
        category: {{ product.category }} //
        price: {{ product.price }} 
      </div>
      <br>
    </div>

  </div>
</template>

<script>
export default {
  props: ['foundProducts'],
  data() {
    return {

    }
  }
}
</script>

<style>

</style>
