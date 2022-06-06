import ReactMarkdown from 'react-markdown'
const workList = [
  {
    company: 'ebay - Data Analyst Platform', 
    jobTitle: 'MTS1 Engineer',
    range: '2017/04 - ',
    description: '工作内容主要偏向前端。数据部门负责内部数据平台相关工具开发，以及内部报表系统。\n'
    + '1. 内部数据工作平台（Zeta）前端架构设计，包括SQL IDE，pivot table，Zeppelin & Jupyter外部系统接入 \n'
    + '1. Zeta 前端微服务架构及相关服务，让原本工程有能力加入外部模块，减少各个业务模块开发成本 \n'
    + '1. 报表等数据可视化平台 \n',
  },
  {
    company: '东软集团（上海）',
    jobTitle: '软件工程师',
    range: '2015/03 - 2017/03',
    description: '负责跑步APP（微跑）后台，及APP内嵌网页开发。\n'
    + '1. APP 接口开发功能维护 \n'
    + '1. 内嵌网页开发，包括协同客户端实现源生功能 \n'
    + '1. 后端日志解析，运维管理 \n'
    + '1. weex进行混合开发 \n'
  },
  {
    company: '江苏银河电子股份有限公司',
    jobTitle: '软件工程师',
    range: '2014/07 - 2015/03',
    description: '机顶盒应用层APP开发。包括负责一项机顶盒操作的专利，以及LANCHER的开发。',
  }
]
const WorkExp = ({ workExp }: any) => {
  return <p className="work-exp">
        <div className="work-exp-info">
          <div>{workExp.jobTitle}</div>
          <div className="low">{workExp.company}</div>
          <div className="low"><i>{workExp.range}</i></div>
        </div>
        <div className="work-exp-detail">
        <ReactMarkdown className='md'>{workExp.description}</ReactMarkdown>
          {/* {workExp.description}
          {workExp.descriptionList ? <ul>{workExp.descriptionList.map((item: any) => <li>{item}</li>)}</ul> : null} */}
        </div>
      </p>
}
const WorkExpWrapper = () => {
  return <section className="work-exp-wrapper">
    <h3 className="sub-title">工作经历</h3>
    <article>
      {workList.map((work) => (<WorkExp workExp={work}/>))}
    </article>
  </section>
}
export default WorkExpWrapper