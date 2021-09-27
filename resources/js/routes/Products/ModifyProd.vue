<template>
    <div>
        <form name="myform" @submit.prevent="ModifyProduct" id="myForm">
            <div class="form-group">
                <label for="product_name">Product Name</label>
                <input id="currentProdName" type="text" class="form-control" v-model="product.name">
                
            </div>
            <div class="form-group">
                <label for="product_cost">Product Price $</label>
                <input type="number" min="0.01" step="0.01" max = "100000" class="form-control" name="price" placeholder="Enter Product Price">
            </div>

            <div class="form-group">
                <label for="product_description">Product Description</label>
                <textarea name="description" id="" cols="30" rows="10" class="form-control" placeholder="Enter Product Description"></textarea>
            </div>

            <div class="form-group">
                <button class="btn btn-primary btn-sm btn-flat" type="submit">Submit Changes</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddProduct",

        data () {
            return {
                product : [],
            }
        },

        methods : {
            ModifyProduct() {
                var formData = new FormData(document.getElementById("myForm"));
                let instance = this;
                axios.post('api/product/modify', formData)
                    .then(function (response) {
                        console.log(formData);
                        instance.$router.push("/");
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            updateProduct() {
                this.axios
                    .patch(`http://localhost:8000/api/products/${this.$route.params.id}`, this.product)
                    .then((res) => {
                        this.$router.push({ name: 'home' });
                    });
            }
        },
        computed: {
            products() {
                return this.$store.state.products;
            },
            product() {
                return this.products.find(product => product.slug === this.$route.params.slug);
            }
        }
    }
</script>

<style scoped>

</style>