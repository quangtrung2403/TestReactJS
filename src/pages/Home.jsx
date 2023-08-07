import { useLogRender } from "@/hook/useLogRender";
import './HomePage.scss';

const Home = () => {
  useLogRender("Home");
  return (
    <div className="home-content">
      <div className='novalidate'>
        <div className='avatar-homepage'>
          <div className='homepage-image'>
            <div className='image__rizer'></div>
            <div className='map-image'></div>
            <div className='content-image'></div>
          </div>
        </div>
      </div>
      <div className='dialog-text text-center'>
        Copyright © 2021 Cục Bản đồ, Quân đội nhân dân Việt Nam
      </div>
    </div>
  )
};
export default Home;
