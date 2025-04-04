import Image from 'next/image';

export default function SteamWishlistButton() {
  return (
    <a
      href='https://store.steampowered.com/app/3094540/Cavescape/'
      target='_blank'
      rel='noreferrer noopener'
      title='Wishlist on Steam'
    >
      <Image
        src='/steambutton.png'
        alt='Wishlist on Steam'
        width={1920}
        height={1080}
        className='w-52 invert dark:invert-0'
      />
    </a>
  );
}
