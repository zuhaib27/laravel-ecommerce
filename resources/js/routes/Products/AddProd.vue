<template>
    <div>
        <form name="myform" @submit.prevent="AddNewProduct" id="myForm">
            <div class="form-group">
                <label for="product_name">Product Name</label>
                <input type="text" class="form-control" name="name" placeholder="Enter Product Name">
            </div>
            <div class="form-group">
                <label for="product_cost">Product Price $</label>
                <input type="number" min="0.01" step="0.01" max = "100000000" class="form-control" name="price" placeholder="Enter Product Price">
            </div>

            <div class="form-group">
                <label for="product_description">Product Description</label>
                <textarea name="description" id="" cols="30" rows="10" class="form-control" placeholder="Enter Product Description"></textarea>
            </div>

            <div class="form-group">
                <button class="btn btn-primary btn-sm btn-flat" type="submit">Add Product</button>
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
            AddNewProduct() {
                var formData = new FormData(document.getElementById("myForm"));
                let instance = this;
                axios.post('api/products/add', formData)
                    .then(function (response) {
                        console.log(formData);
                        instance.$store.dispatch('getProducts');
                        instance.$router.push("/");
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>

</style>