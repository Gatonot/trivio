<script>
  import AppCard from '@/components/AppCard.vue'

  export default {
    name: 'HomeView',
    components: {
      AppCard
    }
  }
</script>

<template>
  <section class="home container">
    <app-card class="home-info">
      <h2 class="home-title">
        Something about us
      </h2>
      <p class="home-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eum impedit excepturi veniam dolorum, numquam vitae dignissimos omnis dolores doloremque recusandae, modi quaerat illum? Totam esse laborum officiis suscipit amet accusamus doloribus explicabo nisi dolorum illo omnis eaque repellat, minus aut inventore reprehenderit. Cumque, accusantium perferendis placeat excepturi consequatur soluta ipsa dolorum earum quia alias fugiat blanditiis, minus quam pariatur officiis libero? Repudiandae maiores reprehenderit ab error veniam eaque aliquid atque nesciunt, laudantium quis molestiae voluptatum nulla expedita quaerat voluptatibus nobis? Quae amet illum neque voluptates nihil, pariatur repellat explicabo laborum dolores. Consequatur aliquam, quaerat tenetur aliquid ullam voluptate nisi.
      </p>
      <p class="home-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eum impedit excepturi veniam dolorum, numquam vitae dignissimos omnis dolores doloremque recusandae, modi quaerat illum? Totam esse laborum officiis suscipit amet accusamus doloribus explicabo nisi dolorum illo omnis eaque repellat, minus aut inventore reprehenderit. Cumque, accusantium perferendis placeat excepturi consequatur soluta ipsa dolorum earum quia alias fugiat blanditiis, minus quam pariatur officiis libero? Repudiandae maiores reprehenderit ab error veniam eaque aliquid atque nesciunt, laudantium quis molestiae voluptatum nulla expedita quaerat voluptatibus nobis? Quae amet illum neque voluptates nihil, pariatur repellat explicabo laborum dolores. Consequatur aliquam, quaerat tenetur aliquid ullam voluptate nisi.
      </p>
      </app-card>   
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/variables.scss';

  .home {
    margin-top: 50px;

    &-info {
      border: 10px solid #dce5fa;
    }
    &-title {
      margin-bottom: 36px;
    }
    &-text {
      font-size: 16px;
      margin-top: 20px;
      line-height: 26px;
      letter-spacing: 0.01em;
    }
  }
</style>