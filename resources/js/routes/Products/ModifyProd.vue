<template>
    <div>
        <form name="myform" @submit.prevent="updateProduct" id="myForm">
            <div class="form-group">
                <label for="product_name">Product Name</label>
                <input id="currentProdName" type="text" class="form-control" v-model="form.name" >
                
            </div>
            <div class="form-group">
                <label for="product_cost">Product Price $</label>
                <input type="number" min="0.01" step="0.01" max = "100000000" class="form-control" v-model="form.price" >
            </div>

            <div class="form-group">
                <label for="product_description">Product Description</label>
                <textarea id="currentDescription" cols="30" rows="10" class="form-control" v-model="form.description" ></textarea>
            </div>

            <div class="form-group">
                <button class="btn btn-primary btn-sm btn-flat" type="submit">Submit Changes</button>
            </div>
            <div>
                <!-- <button
                            class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                            @click="goBack()"
                        >Add To Cart</button> 
                -->
                <input type="button" value="Go Back" onclick="history.back(-1)" />
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name:"update-product",
        data(){
            return {
                form:{
                    name:"",
                    price:0,
                    description:""
                }
            }
        },
        mounted() {
            this.showProduct()
        },
        methods : {
            /*ModifyProduct() {
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
            },*/
            updateProduct() 
            {
                var formData = new FormData(document.getElementById("myForm"));
                let instance = this;
                var id = this.product.id;
                

                this.axios.post(`http://localhost:8000/api/products/update/${this.product.id}`, this.form)
                    .then(response => 
                    {
                        console.log("updated " + this.product.id)
        
                        instance.$store.dispatch('getProducts'); //inefficient way to repopulate view database to changes, should look into pusher / ajax
                        instance.$router.push("/");
                    })
                    .catch(function (error) 
                    {
                        console.log(error);
                    });
                /*this.axios
                    .patch(`http://localhost:8000/api/products/update/${this.$route.params.id}`, this.product)
                    .then((res) => {
                        console.log("updating value")
                        instance.$router.push({ name: 'products.index' });
                    })
                    .catch(function (error) {
                        console.log(error);

                });*/
            },
            showProduct()
            {
                this.form.name = this.product.name;
                this.form.price = this.product.price;
                this.form.description = this.product.description;
            }
        },
        computed: {
            products() {
                return this.$store.state.products;
            },
            product() {
                return this.products.find(product => product.slug === this.$route.params.slug);
            },
            setCurrentValues() {
                return {
                    form: new Form({
                        name: this.product.name,
                        price: this.product.price,
                        description: this.product.description,
                    })
    }


            }
        }
    }
</script>

<style scoped>

</style>