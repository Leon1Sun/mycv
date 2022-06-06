import ReactMarkdown from 'react-markdown'
const SelfIntro = () => {
  const introTxt = '本科毕业7年，目前在eBay工作，主要工作内容偏前端\n'
  + ' + 熟练使用Vue/React前端框架\n'
  + ' + 熟练使用Typescript/Webpack/Eslint等工具构建工程\n'
  + ' + 掌握Jest/Mocha等测试工具\n'
  + ' + 了解并使用Jenkins进行自动化部署\n'
  + ' + 了解并使用Docker/K8S\n'
  return <section>
    <h3 className="sub-title">个人介绍</h3>
    <article>
      <ReactMarkdown className='md'>{introTxt}</ReactMarkdown>
    </article>
  </section>
}
export default SelfIntro