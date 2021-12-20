// import StudentLayout from "./students/Layout";
import auth from "@/router/middleware/auth"
import student from "@/router/middleware/student"
import tutor from "@/router/middleware/tutor"
import admin from "@/router/middleware/admin"

const protectedRoutes = [
    {
        // Student
        path:'/student',
        component:() => import('./students/Layout'),
        children: [
            {
                path:'dashboard',
                component: () => import('./students/Index'),
                meta:{
                    middleware: [auth,student]
                }
            },
            {
                path:'classroom',
                component: () => import('./students/Classroom'),
                meta:{
                    middleware: [auth,student]
                }
            },
            {
                path:'pricing',
                component: () => import('./students/Pricing'),
                meta:{
                    middleware: [auth,student]
                }
            },
        ]


    },


    {
        // Tutor
        path:'/tutor',
        component:() => import('./tutor/Layout'),
        children: [
            {
                path:'dashboard',
                component: () => import('./tutor/Index'),
                meta:{
                    middleware: [auth,tutor]
                }
            },
            {
                path:'classroom',
                component: () => import('./tutor/Classroom'),
                meta:{
                    middleware: [auth,tutor]
                }
            },
        ]
    },


    {
        // Admin
        path:'/admin',
        component:() => import('./admin/Layout'),
        children: [
            {
                path:'dashboard',
                component: () => import('./admin/Index'),
                meta:{
                    middleware: [auth,admin]
                }
            },
            {
                path:'classes',
                component: () => import('./admin/Class'),
                meta:{
                    middleware: [auth,admin]
                }
            },
            {
                path:'tutor',
                component: () => import('./admin/Tutor'),
                meta:{
                    middleware: [auth,admin]
                },
                
            },
            {
                path:'learner',
                component: () => import('./admin/Learner'),
                meta:{
                    middleware: [auth,admin]
                }
            },
        ]
    }
];

export default protectedRoutes;