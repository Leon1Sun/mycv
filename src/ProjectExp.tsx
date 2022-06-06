import ReactMarkdown from 'react-markdown'
const exps = [
  {
    name: 'Zeta Potal',
    desc: 'eBay - DAP',
    range: '2021/08 -',
    detail: '+ 背景：由于Zeta不断的迭代导致原本项目越来越庞大，并且有外部开发者希望接入，希望能够动态的接入外部模块，我们希望能够将项目按模块拆分，由对应的开发团队自己管理自己的开发内容。\n'
    + '+ 工作内容：针对Zeta的微前端解决方案。采用Module Federation对业务进行解耦作为micro app，再在前端入口进行集成，最大化减少不必要资源。并对采用webpack的工程升到5.x版本，以此来使用Module Federation。除此之外还开发后台服务对新分离出来的模块进行管理。'
  },
  {
    name: 'Zeta',
    desc: 'eBay - DAP',
    range: '2018/05 -',
    detail: '+ 项目介绍： Zeta是ebay内部供数据工程师和数据分析师使用的工作台。提供了类似WEB IDE的功能，包括提交SQL，制作图表，并集成了其他数据工程师日常开发工具。类似Zepplin，现在已经作为开源项目发布社区[Github](https://github.com/eBay/Zeta) \n'
    + '+ 技术选型：使用Vue@2.X + Typescript开发的前端工程。 \n'
    + '+ 工作内容：主要负责前端架构、代码审查，作为前端负责人长期维护该项目。\n'
    + '  * 全局的Router,store,tracking, exception hanlder等公用模块的设计与维护\n'
    + '  * SQL IDE：部分websocket与后台通信，codemirror + handsontable 作为前台编辑器展示的组件，以及自定义的数据展示功能\n'
    + '  * 接入Zeppelin，并对其进行二次开发\n'
    + '  * 公司内部申请开源，进行一些脱敏的工作\n'
    + '  * 一些其他的业务端到端实现以及性能优化\n'
  },
  {
    name: '跑团系统WEB版',
    desc: '东软',
    range: '2015/03 - 2017/03',
    detail: '+ 项目简介：app 内跑团模块的功能，做成 web 版，在微信公众号中增加入口 \n'
    + '+ 技术选型：angularJs 1.X angular-mobile WX-API \n'
    + '+ 工作内容：前端页面的开发，因为内容较多，且业务上耦合度高，所以使用 angularJs，觉得对比下来路由功能和数据绑定能够提高开发的效率'
  },
  {
    name: '机顶盒适配手机App 专利项目',
    desc: '银河电子',
    range: '2014/07 - 2015/03',
    detail: '+ 项目简介：针对 Android 手机开发的应用，在机顶盒上运行时，使用遥控器无法获得良好的用户体验。针对这个问题对机顶盒的 framework 层进行二次开发，提高遥控器操作的灵活性。'
  }
]
const ProjectExp = ({ exp }: any) => {
  return <p className="project-exp">
    <div className="project-exp-info">
      {exp.name}
      <div className="low">
        {exp.desc}
      </div>
      <div className="low">
        <i>{exp.range}</i>
      </div>
    </div>
    <div className="project-exp-detail">
      <ReactMarkdown className='md'>{exp.detail}</ReactMarkdown>
    </div>
  </p>
}
const ProjectExpWrapper = () => {
  return <section>
    <h3 className="sub-title">主要项目经历</h3>
    <article>
      {exps.map((exp) => (<ProjectExp exp={exp}/>))}
    </article>
  </section>
}
export default ProjectExpWrapper