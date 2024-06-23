import Image from "next/image";

export default function Home() {
  const icons = [
    {
      name: 'GitHub',
      url: 'https://github.com/shanjathurshan'
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shanjathurshan/'
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/shan_jathurshan/'
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/shanjathurshan01'
    },
    {
      name: 'twitter',
      url: 'https://x.com/shan_jathurshan'
    },
    {
      name: 'tiktok',
      url: 'https://www.tiktok.com/@shanjathu'
}
  ];

  return (
    <main className="flex max-w-[1024px] min-h-screen flex-col items-center p-8 pt-24 md:p-24 m-auto">


      <div className="text-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full border-[3px] border-primary-200 m-auto"
          src="/shan.png"
          alt="Next.js Logo"
          width={140}
          height={37}
          priority
        />
        <h1 className="text-[38px] font-bold text-primary-50 pt-4">Shan Jathurshan</h1>
        <h2 className="text-[24px] text-primary-100">Software Engineer</h2>


        <div className="pt-5 text-left">
          <h3 className=" text-primary-50 w-24 border border-primary-100 rounded-md text-center">About me!</h3>
          <p className="text-[18px] text-primary-100 pt-3">
            Hey there :), I’m a  <span className="text-primary-200 font-medium">26</span> year old Software Engineer, freelancer and an Entrepreneur based in Sri Lanka.
            I’ve taken coding seriously since  <span className="text-primary-200 font-medium">2018</span>, and have been freelancing since <span className="text-primary-200 font-medium">2019</span>.
            Recently, however, I’ve grown a knack for giving back to community.
            I like contributing to open source as a web developer,
            which is probably the reason why you’ve ended up here.</p>
        </div>
      </div>

      <div className="pt-16 mb-10 flex text-center lg:mb-0 lg:w-full justify-center">

        {icons.map((icon) => (
          <div key={icon.name} className="lg:col-span-1">
            <a
              href={icon.url}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={`/${icon.name}.png`} alt={`${icon.name} Logo`} width={30} height={37} className="inline-block transition-transform group-hover:scale-[1.1] motion-reduce:transform-none" />
            </a>
          </div>
        ))}       

      </div>
    </main>
  );
}
