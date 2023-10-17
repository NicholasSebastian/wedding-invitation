import Image from 'next/image';
import Title from '@/components/title';
import Countdown from '@/components/countdown';
import Portrait from '@/components/portrait';
import CommentsForm from '@/components/comments-form';
import Comments from '@/components/comments';
import Donations from '@/components/donations';
import Gallery from '@/components/gallery';
import config from "./config.json";
import type { FC } from 'react';

const crenulations = (
  <Image 
    src="/crenulations.svg" 
    alt="Crenulations"
    className="absolute top-1 left-1 opacity-10"
    style={{ transform: "rotateZ(90deg)" }}
    width={240}
    height={240} />
);

const Home: FC = () => {
  return (
    <main className="">
      <section 
        className="bg-center bg-cover relative h-screen"
        style={{ backgroundImage: "url(/landscape1.jpg)" }}>
        <div 
          className="flex flex-col items-center justify-center absolute inset-0"
          style={{ backdropFilter: "brightness(0.7) grayscale(0.2)" }}>
          <div className="font-serif text-xl absolute top-1">
            {config.wedding.shortdate}
          </div>
          <div className="text-white text-center font-dance">
            <div className="text-xl">
              The Wedding Of
            </div>
            <h1 className="text-6xl">
              {config.couple.fiance.name} & {config.couple.fiancee.name}
            </h1>
          </div>
          <div className="absolute bottom-8">▼</div>
        </div>
      </section>
      <section className="bg-gray-100 flex flex-col justify-center items-center h-80 relative">
        {crenulations}
        <Title prefix="10 December 2023" title="We Are Getting Married" />
        <Countdown />
      </section>
      <section className="grid sm:grid-cols-2">
        <Portrait
          name={`${config.couple.fiance.name} ${config.couple.fiance.surname}`}
          instagram={config.couple.fiance.instagram}
          src="/fiance.jpg"
          alt="Fiance">
          <div>The {config.couple.fiance.title} of</div>
          <div>Mr. {config.couple.fiance.father} & Ms. {config.couple.fiance.mother}</div>
        </Portrait>
        <Portrait
          name={`${config.couple.fiancee.name} ${config.couple.fiancee.surname}`}
          instagram={config.couple.fiancee.instagram}
          src="/fiancee.jpg"
          alt="Fiancee">
          <div>The {config.couple.fiancee.title} of</div>
          <div>Mr. {config.couple.fiancee.father} & Ms. {config.couple.fiancee.mother}</div>
        </Portrait>
      </section>
      <section className="bg-gray-100 flex flex-col items-center py-12 relative">
        {crenulations}
        <Title prefix="Watch a sneakpeek of" title="Our Love Story" />
        <div className="text-black text-sm mb-5">
          <q>{config.quote}</q>
        </div>
        <video controls autoPlay muted loop className="w-11/12 sm:w-9/12 md:w-7/12 lg:w-6/12">
          <source src='/video.mp4' type='video/mp4' />
        </video>
      </section>
      <section 
        className="bg-center bg-cover relative h-56"
        style={{ backgroundImage: "url(/landscape2.jpg)" }}>
        <div 
          className="flex flex-col items-center justify-center absolute inset-0"
          style={{ backdropFilter: "brightness(0.7) grayscale(0.2)" }}>
          <div className="text-sm tracking-wider uppercase">Come join us to</div>
          <div className="text-4xl font-dance">Celebrate Our Love</div>
        </div>
      </section>
      <section className="bg-gray-100 flex flex-col items-center py-12 relative">
        {crenulations}
        <Title prefix="Here are the details of" title="Our Wedding Event" />
        <div className="w-full px-5 md:w-9/12 md:flex items-center">
          <div className="relative w-full" style={{ aspectRatio: 1.5 }}>
            <Image fill src="/venue.jpg" alt="Hotel Raffles Jakarta" />
          </div>
          <div className="text-black w-full z-10 md:bg-white md-ml-negative md:p-4 md:shadow-md">
            <div className="font-dance text-2xl mt-3 mb-1 md:mt-0 md:mb-2">
              {config.wedding.location}
            </div>
            <div className="text-sm">
              <span className="bg-red-500 rounded-full w-3 h-3 inline-block mr-2" />
              <span>{config.wedding.date}, {config.wedding.time}</span>
            </div>
            <div className="text-sm">
              <span className="bg-red-500 rounded-full w-3 h-3 inline-block mr-2" />
              <span>{config.wedding.address}</span>
            </div>
          </div>
        </div>
      </section>
      <section 
        className="bg-center bg-cover relative h-96"
        style={{ backgroundImage: "url(/landscape4.jpg)" }}> 
        <div 
          className="flex flex-col items-center justify-center absolute inset-0"
          style={{ backdropFilter: "brightness(0.7) grayscale(0.2)" }}>
          <div className="font-dance text-4xl text-center">Send Your Wishes</div>
          <hr className="w-16 bg-black my-6 mx-auto" />
          <CommentsForm />
        </div>
      </section>
      <section className="bg-gray-100 py-12 relative"> 
        {crenulations}
        <Title prefix="Some of your heartfelt" title="Prayers and Wishes" />
        <div className="bg-white shadow-md h-96 w-11/12 sm:w-9/12 md:w-7/12 lg:w-6/12 mx-auto relative">
          <Comments />
        </div>
      </section>
      <section className="bg-gray-200 py-12">
        <Title prefix="Feeling extra generous?" title="Wedding Gift" />
        <Donations />
      </section>
      <section 
        className="bg-center bg-cover relative h-56"
        style={{ backgroundImage: "url(/landscape3.jpg)" }}>
        <div 
          className="flex flex-col items-center justify-center absolute inset-0"
          style={{ backdropFilter: "brightness(0.7) grayscale(0.2)" }}>
          <div>Kindly tag our instagram on our wedding day:</div>
          <a href={config.hashtag.url} className="underline">
            {config.hashtag.text}
          </a>
          <div>Your presence and prayers will bring joy to us.</div>
          <div className="font-dance text-3xl mt-2">Thank You</div>
        </div>
      </section>
      <section className="bg-gray-100 flex flex-col items-center pt-12 pb-1">
        <Title prefix="Behold" title="Our Gallery" />
        <Gallery />
      </section>
      <footer className="flex flex-col items-center py-6">
        <a href={config.credits.link} rel="nofollow" className="text-center text-xs">
          <div>Made by {config.credits.name}</div>
          <div>{config.credits.description}</div>
        </a>
      </footer>
    </main>
  )
}

export default Home;
