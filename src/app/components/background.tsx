import Image from 'next/image';
import Mars from '../images/mars_background.jpeg';

const Background = () => {
  return (
    <div>
      {/* Added a Mars Bacground, since it's the background then it must be z-index, therefore
        everything else needs to be index greater inorder to no tbe overtaken by the background */}
      <Image className="w-full h-full z-0" src={Mars} alt="Mars Picture" />
    </div>
  );
};
export default Background;
