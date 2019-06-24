import dynamic from 'dva/dynamic';
// 引入路由
const SortQuestions =  dynamic({
  component: () => import('@/views/Main/Questions/Type'),
});
const ViewQuestions =  dynamic({
  component: () => import('@/views/Main/Questions/View'),
});
const AddQuestions =  dynamic({
  component: () => import('@/views/Main/Questions/Add'),
});
const Default =  dynamic({
    component: () => import('@/views/Main/Questions/Default'),
  });
const EditQuestions =  dynamic({
    component: () => import('@/views/Main/Questions/EditQuestions'),
  });

//用户管理
const userAdd =  dynamic({
    component: () => import('@/views/Main/User/Add'),
  });
const userShow =  dynamic({
    component: () => import('@/views/Main/User/Show'),
  });

//考试管理
const ExamAdd =  dynamic({
    component: () => import('@/views/Main/Exam/Add'),
  });
const ExamShow =  dynamic({
    component: () => import('@/views/Main/Exam/List'),
  });
const Edit =  dynamic({
component: () => import('@/views/Main/Exam/Edit'),
});
//班级管理
const Grade =  dynamic({
    component: () => import('@/views/Main/Class/Class'),
  });
const Classroom =  dynamic({
    component: () => import('@/views/Main/Class/Classroom'),
  });
const Student =  dynamic({
component: () => import('@/views/Main/Class/Student'),
});

//阅卷管理
const Approved =  dynamic({
    component: () => import('@/views/Main/Marking/Approved'),
});
export default { 
  routes: [{
    name: 'router.questions',
    children: [{
      name: 'router.questions.add',
      id: 'main-addQuestions',
      path: '/questions/add',
      component: AddQuestions
    },{
      name: 'router.questions.view',
      id: 'main-watchQuestions',
      path: '/questions/view',
      component: ViewQuestions
    },{
      name: 'router.questions.type',
      id: 'main-questionsType',
      path: '/questions/type',
      component: SortQuestions
    },{
    // name: 'router.questions.type',
    id: "main-editQuestions",
    path: "/questions/editQuestions",
    component: EditQuestions
    },{
        // name: 'router.questions.type',
        id: "main-questionsDetail",
        path: '/questions/default',
        component: Default
        }]
  },{
    name: 'router.user',
    children: [{
      name: 'router.user.add',
      id: "main-addUser",
      path: '/user/add',
      component: userAdd
    },{
      name: 'router.user.show',
      id: "main-showUser",
      path: '/user/show',
      component: userShow
    }]
  },{
    name: 'router.exam',
    children: [{
      name: 'router.exam.add',
      id: "main-addExam",
      path: '/exam/add ',
      component: ExamAdd
    },{
      name: 'router.exam.list',
      id: "main-examList",
      path: '/exam/list',
      component: ExamShow
    },{
        // name: 'router.exam.add',
        id:"main-examEdit",
        path: '/exam/edit',
        component: Edit
      }]
  },{
    name: 'router.class',
    children: [{
      name: 'router.class.grade',
      id: "main-grade",
      path: '/class/grade ',
      component: Grade
    },{
    name: 'router.class.classroom',
    id: "main-room",
    path: "/class/classroom",
    component: Classroom
  },{
        name: 'router.class.student',
        id:"main-student",
        path: '/class/student',
        component: Student
      }]
  },{
    name: 'router.marking',
    children: [{
      name: 'router.marking.approved',
      id: "main-examPaperClassList",
      path: '/marking.approved',
      component: Approved
    }]
  }]
}
