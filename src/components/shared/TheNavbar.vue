<template>
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">

            <a class="uk-navbar-item uk-logo" href="#">Algorithms</a>

            <div class="uk-navbar-item">
                <input class="uk-input uk-form-width-xsmall" type="number" v-model="amount">
                <button class="uk-margin-small-left uk-button uk-button-default" @click.prevent="handleChangeAmount">Select</button>
            </div>

            <div class="uk-navbar-item">
                <select class="uk-input uk-select uk-form-width-medium" name="algorithm" v-model="algorithm" @change="handleChangeAlgorithm">
                    <option v-for="algorithm in algorithms" :key="algorithm.id">
                        {{ algorithm.name }}
                    </option>
                </select>
            </div>

            <div class="uk-navbar-item">
                <button class="uk-button uk-button-primary" @click.prevent="handleStart">Start</button>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {

        name: 'the-navbar',

        data () {
            return {
                amount: 100,
                algorithm: 'Quick sort',
                algorithms: [
                    { id: 1, name: 'Quick sort' },
                    { id: 2, name: 'Bubble sort' },
                    { id: 3, name: 'Selection sort' },
                    { id: 4, name: 'Insertion sort' },
                    { id: 5, name: 'Cocktail shaker sort' },
                ]
            }
        },

        methods: {

            /**
             * Emit the new amount to the parent component.
             */
            handleChangeAmount () {
                this.amount > 700
                    ? this.amount = 700
                    : this.amount < 50
                        ? this.amount = 50
                        : null
                this.$emit('amount', this.amount)
            },

            /**
             * Emit the algorithm to the parent component.
             */
            handleChangeAlgorithm () {
                this.$emit('algorithm', this.algorithm)
            },

            /**
             * Start the algorithm
             */
            handleStart () {
                this.$emit('start', true)
            }

        }

    }
</script>

<style>
.uk-form-width-xsmall {
    width: 75px !important;
}
</style>
