// import dynamic from 'dva/dynamic';
// // 引入路由
// const SortQuestions =  dynamic({
//   component: () => import('@/views/Main/Questions/Type'),
// });
// const ViewQuestions =  dynamic({
//   component: () => import('@/views/Main/Questions/View'),
// });
// const AddQuestions =  dynamic({
//   component: () => import('@/views/Main/Questions/Add'),
// });
// import Default from "./Questions/Default"
// import EditQuestions from "./Questions/EditQuestions"

// //用户管理
// import userAdd from "./User/Add"
// import userShow from "./User/Show"
// //考试管理
// import ExamAdd from "./Exam/Add"
// import ExamShow from "./Exam/List"
// import Edit from "./Exam/Edit"
// export default {
//   routes: [{
//     name: 'router.questions',
//     children: [{
//       name: 'router.questions.add',
//       id: 'main-addQuestions',
//       path: '/questions/add',
//       component: AddQuestions
//     },{
//       name: 'router.questions.view',
//       id: 'main-watchQuestions',
//       path: '/questions/view',
//       component: ViewQuestions
//     },{
//       name: 'router.questions.type',
//       id: 'main-questionsType',
//       path: '/questions/type',
//       component: SortQuestions
//     }]
//   },{
//     name: 'router.user',
//     children: [{
//       name: 'router.user.add',
//       id: "main-addUser",
//       path: '/user/add',
//       component: userAdd
//     },{
//       name: 'router.user.show',
//       id: "main-showUser",
//       path: '/user/show',
//       component: userShow
//     }]
//   },{
//     name: 'router.exam',
//     children: [{
//       name: 'router.exam.list',
//       id: "main-examList",
//       path: '/exam/list',
//       component: ExamShow
//     },{
//       name: 'router.exam.add',
//       id: "main-addExam",
//       path: '/exam/add ',
//       component: ExamAdd
//     }]
//   }]
// }
