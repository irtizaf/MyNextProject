
import Link from 'next/link';
import Image from 'next/image';
export default function YourComponent () { 
 return  <> <Image
    src="/image/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  /> </>
};
