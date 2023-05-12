'use client';
import { SafeUser } from '@/app/types';
import useCountries from '@/app/hooks/useCountries';
import Heading from '../Heading';
import Image from 'next/image';
import HeartButton from '../HearButton';

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  imageSrc,
  locationValue,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);
  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="w-full overflow-hidden h-[60vh] rounded-xl relative z-[-10]">
        <Image 
        alt='Image'
        src={imageSrc}
        fill
        className="object-cover w-full"
        />
        <div className='absolute top-5 right-5'>
        <HeartButton
        listingId={id}
        currentUser={currentUser}
        />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
