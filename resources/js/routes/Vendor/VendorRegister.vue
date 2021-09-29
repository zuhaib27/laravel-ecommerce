<template>
    <div>
        <form name="myform" @submit.prevent="RequestRegister" id="myForm">
            <div class="form-group">
                <label for="vendor_name">Company Name</label>
                <input type="text" class="form-control" name="name" placeholder="Enter Company Name" required>
            </div>
            <div class="form-group">
                <label for="vendor_email">Company Email</label>
                <input type="email" id="email" class="form-control" name="email" placeholder="Enter Email" required>
            </div>
            <div class="form-group">
                <label for="product_description">Company Description</label>
                <textarea name="description" id="" cols="30" rows="10" class="form-control" placeholder="Enter Company Description"></textarea>
            </div>
            <div class="form-group">
                <label for="address" class="leading-7 text-sm text-gray-600">Street Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    class="form-control"
                >
            </div>
            <div class="form-group">
                <label for="city" class="leading-7 text-sm text-gray-600">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    class="form-control"
                >
            </div>
            <div class="form-group">
                <label for="province" class="leading-7 text-sm text-gray-600">Province</label>
                <input
                    type="text"
                    id="province"
                    name="province"
                    class="form-control"
                >
            </div>
            <div class="relative">
                <label for="postal_code" class="leading-7 text-sm text-gray-600">Postal Code</label>
                <input
                    type="text"
                    id="postal_code"
                    name="postal_code"
                    class="form-control"                
                >
            </div>

            <div class="form-group">
                <button class="btn btn-primary btn-sm btn-flat" type="submit">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "RegisterVendor",

        data () {
            return {
                product : [],
            }
        },

        methods : {
            RequestRegister() {
                var formData = new FormData(document.getElementById("myForm"));
                let instance = this;
                axios.post('api/vendor/register', formData)
                    .then(function (response) {
                        console.log(formData);
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