module.exports = {

    methods: {

        /**
         * Timeout promise to visualize the algorithms.
         */
        sleep (value = 100) {
            return new Promise(resolve => setTimeout(resolve, value))
        },

        /**
         * Set a specific array index.
         */
        set (array, index, value) {
            array.splice(index, 1, value)
        },

        /**
         * Switch 2 array indexes.
         */
        swap (array, indexA, indexB) {
            var x = array[indexA]
            this.set(array, indexA, array[indexB])
            this.set(array, indexB, x)
        },

        /**
         * Randomize the original array.
         */
        randomizeArray () {
            this.array = []

            for (let i = 0; i < this.amount; i++) {
                let number = Math.round(Math.random() * (this.amount - 1) + 1)

                this.array.push(number)
            }

            $(".uk-list li").css('background-color', 'white')
        },

        /**
         * Quicksort algorithm.
         */
        async quicksort (items, left, right) {
            let index

            index = this.partition(items, left, right)
            await this.sleep(250)

            if (left < index - 1) {
                this.quicksort(items, left, index - 1)
            }
            if (index < right) {
                this.quicksort(items, index, right)
            }

            setTimeout(() => {
                this.sortingComplete()
            }, 2100)
        },

        /**
         * Bubblesort algorithm.
         */
        async bubblesort (array, left, right) {
            for (let i = array.length - 1; i >= 0; i--) {
                for (let j = 1; j <= i; j++) {

                    if (array[j - 1] > array[j]) {
                        this.swap(array, j - 1, j)
                        await this.sleep(1)
                    }
                }
            }

            this.sortingComplete()
        },

        /**
         * Selection sort algorithm.
         */
        async selectionsort (array, left, right) {
            let min, temp

            for (let i = 0; i < array.length; i++) {
                min = i
                for (let j = i + 1; j < array.length; j++) {
                    if (array[j] < array[min]) {
                        min = j
                    }
                }

                this.swap(array, i, min)
                await this.sleep()
            }

            this.sortingComplete()
        },

        /**
         * Insertion sort algorithm.
         */
        async insertionsort (array, left, right) {
            let i, j, item

            for (i = 1; i < array.length; i++) {
                item = array[i]
                j = i

                while (j > 0 && array[j - 1] > item) {
                    array[j] = array[j - 1]
                    j--
                }

                this.set(array, j, item)
                await this.sleep()
            }

            this.sortingComplete()
        },

        /**
         * Cocktail shaker sort algorithm.
         */
        async cocktailshakersort (array, left, right) {
            let sorted = true
            while (sorted) {
                for (let i = 0; i < array.length - 1; i++) {
                    if (array[i] > array[i + 1]) {
                        let temp = array[i]
                        array[i] = array[i + 1]
                        this.set(array, i + 1, temp)
                        await this.sleep(2)
                        sorted = true
                    }
                }

                if (!sorted)
                    break

                sorted = false

                for (let j = array.length - 1; j > 0; j--) {
                    if (array[j-1] > array[j]) {
                        let temp = array[j]
                        array[j] = array[j - 1]
                        this.set(array, j - 1, temp)
                        await this.sleep(2)
                        sorted = true
                    }
                }
            }

            this.sortingComplete()
        },

        /**
         * Effect that finishes the sorting.
         */
        sortingComplete () {
            $(".uk-list li").each((index) => {
                ((that, i) => {
                    var t = setTimeout(() => { $("#"+index).css('background-color', 'green'); }, 7 * i);
                })(this, index);
            });
        },

        /**
         * Cuts the array in half and compares the middle value.
         */
        partition (items, left, right) {
            let pivot = items[Math.floor((right + left) / 2)]
            let i = left
            let j = right

            while (i <= j) {

                while (items[i] < pivot) {
                    i++
                }

                while (items[j] > pivot) {
                    j--
                }

                if (i <= j) {
                    this.swap(items, i, j)
                    i++
                    j--
                }

            }

            return i;
        },

    },

}
