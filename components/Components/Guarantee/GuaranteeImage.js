import Image from 'next/image';
import image from '../../../resources/garantia.png'

const GuaranteeImage = () => {
  return <Image src={image} alt='garantia de satisfação' width={200} height={200}/>;
};

export default GuaranteeImage;
