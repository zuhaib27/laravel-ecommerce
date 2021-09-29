module.exports = [
    {
        path: '/',
        name: 'products.index',
        component: () => import('./routes/Products/Index.vue')
    },
    {
        path: '/product/:slug',
        name: 'products.show',
        component: () => import('./routes/Products/Show.vue')
    },
    {
        path: '/checkout',
        name: 'order.checkout',
        component: () => import('./routes/Order/Checkout.vue')
    },
    {
        path: '/summary',
        name: 'order.summary',
        component: () => import('./routes/Order/Summary.vue')
    },
    {
        path: '/add-product',
        name: 'products.add',
        component: () => import('./routes/Products/AddProd.vue')
    },
    /*{
        path: '/delete-product',
        name: 'products.delete',
        component: () => import('./routes/Products/DeleteProd.vue')
    },*/
    {
        path: '/product/:slug/modify',
        name: 'products.modify',
        component: () => import('./routes/Products/ModifyProd.vue')
    },
    {
        path: '/vendor/register',
        name: 'vendor.register',
        component: () => import('./routes/Vendor/VendorRegister.vue')
    }

]
//lazy loads vue for quicker load times for slower internet speeds