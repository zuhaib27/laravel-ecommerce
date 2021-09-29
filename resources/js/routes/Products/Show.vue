<template>
    <section class="text-gray-700 body-font overflow-hidden" v-if="product">
        <div class="container px-12 py-24 mx-auto">
            <div class="lg:w-3/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/640x640">
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2
                        class="text-sm title-font text-gray-500 tracking-widest uppercase inline-block mr-2"
                        v-for="category in product.categories"  :key="category.id"
                        v-text="category.name"
                    ></h2>
                    <h1
                        class="text-gray-900 text-3xl title-font font-medium mb-2"
                        v-text="product.name"
                    ></h1>
                    <p
                        class="leading-relaxed"
                        v-text="product.description"
                    ></p>
                    <div class="flex mt-6 pt-4 border-t-2 border-gray-200">
                        <span
                            class="title-font font-medium text-2xl text-gray-900"
                            v-text="formatCurrency(product.price)"
                        ></span>
                        <button
                            class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                            @click="$store.commit('addToCart', product)"
                        >Add To Cart</button>
                        <!-- ADD CHECK TO SEE IF USER IS ADMIN 
                         <section class="text-gray-700 body-font overflow-hidden" v-if="admin"> -->
                            <!--<button
                            class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                            @click="$store.commit('deleteProduct', product)"
                        >Delete</button> -->
                            <!-- added deleteCategory method in below button click -->
                            <!--<a @click="deleteProduct(product.id)" class="btn btn-danger btn-xs">Delete Product</a> -->
                            
                            <button class="flex ml-auto text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded" 
                                v-on:click="redirectModifyProd(product.slug)">Modify<span class="fa fa-trash"></span></button>
                        
                            <button class="btn btn-danger btn-sm" v-on:click="deleteProduct(product)">Delete<span class="fa fa-trash"></span></button>
                        <!-- </section> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        
        methods: {
            formatCurrency(amount) {
                amount = (amount / 100);
                return amount.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' });
            },
            
            deleteProduct(product) {
                if (!window.confirm(`Are you sure you want to delete ${product.name}`)) {
                    return;
                }
                var id = product.id;
                let instance = this;
                
                
                //return http().delete(`api/products/delete/${id}`);
                
                //axios.delete('api/products/delete', {params: {'id': id}}) //NOT WORKING :(
                axios.delete('http://localhost:8000/api/products/delete/'+id)
                    .then(function (response) {
                        alert(response.data.message);
                        instance.$store.dispatch('getProducts'); //inefficient way to repopulate view database to changes, should look into pusher / ajax
                        instance.$router.push("/");
                    }).catch(function (error) {
                        console.log(error);
                    });//*/

                /*this.$http.delete('/products/delete/'+id).then(
                    function(response) {
                        //this.$products.$remove(product);
                        alert(response.data.message);
                        console.log(response.data);
                        console.log("deleted");
                        instance.$router.push("/");
                    }).catch(function (error) {
                        console.log(error);
                    });//*/
                
            },
            redirectModifyProd(slug){
                 this.$router.push({path: "/product/"+slug+"/modify"});
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
