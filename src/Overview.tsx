import IMGSRC from './assets/img.jpg'
const Overview = () => {
  return <header className='overview'>
    <article className='overview-info'>
      <h2>孙天瑞</h2>
      <ul>
        <li>邮箱: <a href="mailto:qq51156809@163.com">qq51156809@163.com</a></li>
        <li>手机: 15000037503</li>
        <li>苏州大学  2014级软件工程</li>
      </ul>
    </article>
    <div>
      <img style={{ width: '120px' }} src={IMGSRC} />
    </div>
  </header>
}
export default Overview