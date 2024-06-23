import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div className=" text-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full border-[6px] border-primary-50 m-auto"
          src="/shan.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h1 className="text-[38px] font-bold text-primary-50">Shan Jathurshan</h1>
        <h2 className="text-[28px] text-primary-100">Software Engineer</h2>
        <p className="text-[18px] text-primary-100 pt-5">Hey there :), I’m a 26 year old Software Engineer, freelancer and an Entrepreneur based in Sri Lanka. 
          I’ve taken coding seriously since 2018, and have been freelancing since 2019. 
          Recently, however, I’ve grown a knack for giving back to community. 
          I like contributing to open source as a web developer, 
          which is probably the reason why you’ve ended up here.</p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
        
      </div>
    </main>
  );
}
