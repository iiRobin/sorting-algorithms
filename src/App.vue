<template>
  <div id="app">
      <TheNavbar @amount="handleChangeAmount" @algorithm="handleChangeAlgorithm" @start="handleStart" />

      <div class="uk-padding">
          <transition-group tag="ul" name="list-animation" class="uk-list">
              <li :id="index" class="list-item animation-item" v-for="(item, index) in array" :key="index" :style="itemStyles(item)"></li>
          </transition-group>
      </div>
  </div>
</template>

<script>
import TheNavbar from './components/shared/TheNavbar'
import sorting from './mixins/sorting'

export default {

    name: 'app',

    components: { TheNavbar },

    mixins: [ sorting ],

    data () {
        return {
            amount: 100,
            algorithm: 'Quick sort',

            array: [],
        }
    },


    created () {
        this.randomizeArray()
    },


    methods: {

        /**
         * Change the amount of array entries.
         */
        handleChangeAmount (value) {
            this.amount = value

            this.randomizeArray()
        },

        /**
         * Change the sorting algorithm.
         */
        handleChangeAlgorithm (value) {
            this.algorithm = value
        },

        /**
         * Start the algorithm.
         */
        handleStart () {
            this[this.algorithm.toLowerCase().replace(/\s/g, '')](this.array, 0, this.array.length - 1)
        },

        /**
         * Styling for the array entries.
         */
        itemStyles (item) {
            return {
                'height': `${item * 2}px`
            }
        },

    }
}
</script>

<style>
html {
    background-color: #121212;
}

.list-item {
    background-color: #ffffff;
    border: 1px solid black;
}

.uk-list li:first-child {
    margin-top: 10px;
}

.uk-list {
    display: flex;
    align-items: flex-end;
    width: 100%;
}

.uk-list li {
    flex: 1;
    width: 0.001vw;
}

.animation-item {
    transition: all ease 0.5s;
}
</style>
