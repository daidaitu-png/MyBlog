{
  name:'Page',
  attributes:{
    title:'MyBlog System',
  },
  children:[
    {
      name:'Banner',
      attributes:{
        title:'Vue3系统入门与项目实战',
        description:'	TS在构建大型应用上的优势，以及与JS的完美互通，让TS未来一片光明，在慕课网人气讲师dell老师带你从0到1系统学习，把TS真正应用到框架和项目中，在框架中学，在项目中学，在老师指导中学！',
        showSmallPic:true,
        smallPicUrl:'',
        bgUrl:'',
        bgHeight:'100px'
      },
      children:[]
    },{
      name:"List",
      attributes:{},
      children:[
        {
          name:"Item",
          attributes:{
            title:'SpringBoot+Vue3 项目实战',
            description:'未来，在线协同办公将成为企业常态化的工作方式。本课程选用市面上少有的，界面美观，功能模块齐全的大型在线办公系统。项目采用了当下最流行的前后端分离架构及技术（ Java、SSM、Vue3.0 ），课程作为全面提升前后端技术水平的不二选择，也很适合作为简历的加分项。'
            imageUrl:'',
            link:''
          },
          children:[]
        },
        {
          name:"Item",
          attributes:{
            title:'SpringBoot+Vue3 项目实战',
            description:'未来，在线协同办公将成为企业常态化的工作方式。本课程选用市面上少有的，界面美观，功能模块齐全的大型在线办公系统。项目采用了当下最流行的前后端分离架构及技术（ Java、SSM、Vue3.0 ），课程作为全面提升前后端技术水平的不二选择，也很适合作为简历的加分项。'
            imageUrl:'',
            link:''
          },
          children:[]
        }
      ]
    },{
      name:"Footer",
      attributes:{
        copyright:'',
        record:''
      },
      children:[
        {
          name:"Item",
          attributes:{
            title:'SpringBoot+Vue3 项目实战',
            link:''
          },
          children:[]
      ]
    }
  ]
}
