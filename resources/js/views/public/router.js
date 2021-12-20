import guest from "@/router/middleware/guest"

const publicRoutes = [
    {
        path:'',
        component: () => import('@/views/protected/layout/LoginLayout'),
        children: [
            {
                path:'/login',
                component: () => import('@/views/public/Login'),
                meta: {
                    middleware: [guest]
                },
            },
            {
                path:'/tutor/register',
                component: () => import('@/views/public/Account'),
                meta: {
                    middleware: [guest]
                },
            }
        ]
    }
];

export default publicRoutes;