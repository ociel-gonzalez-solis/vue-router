<template>
  <h1>
    Pokemon <span>{{ id }}</span>
    <div v-if="pokemon">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </div>
  </h1>
</template>

<script>
export default {
  props: {
    id: {
      type    : Number,
      required: true,
    },
  },
  data() {
    return {
      // id: null,
      pokemon: null,
    };
  },
  created() {
    // const { id } = this.$route.params;
    // console.log(+id);
    // this.id = id;
    // console.log(this.$attrs);
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        );
        const res = await pokemon.json();
        console.log(res);
        this.pokemon = res;
      } catch (error) {
        this.$router.push(`/`);
        console.log("No hay nada que hacer aqui");
      }
    },
  },
  watch: {
    id() {
      this.getPokemon();
    },
  },
};
</script>

<style>
</style>