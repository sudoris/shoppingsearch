<template>
  <div>     
     
      <input type="text" 
            v-model="search" 
            placeholder="search products" 
             @input="handleSearch">
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { name: "black shoes", category: "shoes", price: 10 },
        { name: "red shoes", category: "shoes", price: 15 },
        { name: "t-shirt", category: "top", price: 8 },
        { name: "polo", category: "top", price: 22 },
        { name: "uggs", category: "shoes", price: 55 },
        { name: "cashmere scarf", category: "scarves", price: 55 },
      ],
      search: "",
      filteredProducts: null
    }
  },
  methods: {
    handleSearch() {
      this.filteredProducts = this.products.filter((product) => {
        return ( product.category.match(this.search) || product.name.match(this.search) )
      })      

      this.$router.push({
        name: 'productslist',
        params: { keyword: this.search, foundProducts: this.filteredProducts }
      })      
      
    }
  },
  
}
</script>

<style>

</style>
