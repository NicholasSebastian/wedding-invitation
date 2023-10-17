import Image from 'next/image';
import Title from '@/components/title';
import Countdown from '@/components/countdown';
import Portrait from '@/components/portrait';
import CommentsForm from '@/components/comments-form';
import Comments from '@/components/comments';
import Donations from '@/components/donations';
import Gallery from '@/components/gallery';
import crenulations from '@/components/crenulations';
import config from "./config.json";
import type { FC } from 'react';

import background1 from "../assets/landscape1.jpg";
import background2 from "../assets/landscape2.jpg";
import background3 from "../assets/landscape3.jpg";
import background4 from "../assets/landscape4.jpg";
import groom from "../assets/fiance.jpg";
import bride from "../assets/fiancee.jpg";
import venue from "../assets/venue.jpg"

const section1 = (
  <section className="relative h-screen">
    <Image fill
      src={background1} 
      alt="Background" 
      placeholder='blur' 
      className='object-center object-cover'
      sizes='100vw' />
    <div 
      className="flex flex-col items-center justify-center absolute inset-0 z-10"
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
);

const section2 = (
  <section className="bg-gray-100 flex flex-col justify-center items-center h-80 relative">
    {crenulations}
    <Title prefix="10 December 2023" title="We Are Getting Married" />
    <Countdown />
  </section>
);

const section3 = (
  <section className="grid sm:grid-cols-2">
    <Portrait
      name={`${config.couple.fiance.name} ${config.couple.fiance.surname}`}
      instagram={config.couple.fiance.instagram}
      src={groom}
      alt="Fiance">
      <div>The {config.couple.fiance.title} of</div>
      <div>Mr. {config.couple.fiance.father} & Mrs. {config.couple.fiance.mother}</div>
    </Portrait>
    <Portrait
      name={`${config.couple.fiancee.name} ${config.couple.fiancee.surname}`}
      instagram={config.couple.fiancee.instagram}
      src={bride}
      alt="Fiancee">
      <div>The {config.couple.fiancee.title} of</div>
      <div>Mr. {config.couple.fiancee.father} & Mrs. {config.couple.fiancee.mother}</div>
    </Portrait>
  </section>
);

const section4 = (
  <section className="bg-gray-100 flex flex-col items-center py-12 relative">
    {crenulations}
    <Title prefix="Watch a sneakpeek of" title="Our Love Story" />
    <div className="text-black text-sm mb-5">
      <q>{config.quote}</q>
    </div>
    <video controls autoPlay muted loop playsInline className="w-11/12 sm:w-9/12 md:w-7/12 lg:w-6/12">
      <source src='/video.mp4' type='video/mp4' />
    </video>
  </section>
);

const section5 = (
  <section className="relative h-56">
    <Image fill
      src={background2} 
      alt="Background" 
      placeholder='blur' 
      className='object-center object-cover'
      sizes='100vw' />
    <div 
      className="flex flex-col items-center justify-center absolute inset-0 z-10"
      style={{ backdropFilter: "brightness(0.7) grayscale(0.2)" }}>
      <div className="text-sm tracking-wider uppercase">Come join us to</div>
      <div className="text-4xl font-dance">Celebrate Our Love</div>
    </div>
  </section>
);

const section6 = (
  <section className="bg-gray-100 flex flex-col items-center py-12 relative">
    {crenulations}
    <Title prefix="Here are the details of" title="Our Wedding Event" />
    <div className="w-full px-5 md:w-9/12 md:flex items-center">
      <div className="relative w-full" style={{ aspectRatio: 1.5 }}>
        <Image fill 
          src={venue} 
          alt="Hotel Raffles Jakarta" 
          placeholder='blur' 
          sizes="(max-width: 768px) 95vw, 37vw" />
      </div>
      <div className="text-black w-full z-10 md:bg-white md-ml-negative md:p-4 md:shadow-md">
        <div className="font-dance text-2xl mt-3 mb-1 md:mt-0 md:mb-2">
          {config.wedding.location}
        </div>
        <ul className="text-sm">
          <li>{config.wedding.address}</li>
          <li><b className="text-red-500">Dress Code:</b> {config.wedding.dresscode}</li>
          <li><b className="text-red-500">Date:</b> {config.wedding.date}</li>
          <li><b className="text-red-500">Time:</b> {config.wedding.time}</li>
        </ul>
      </div>
    </div>
  </section>
);

const section7 = (
  <section className="relative h-96"> 
    <Image fill
      src={background3} 
      alt="Background" 
      placeholder='blur' 
      className='object-center object-cover'
      sizes='100vw' />
    <div 
      className="flex flex-col items-center justify-center absolute inset-0"
      style={{ backdropFilter: "brightness(0.7) grayscale(0.2)" }}>
      <div className="font-dance text-4xl text-center">Send Your Wishes</div>
      <hr className="w-16 bg-black my-6 mx-auto" />
      <CommentsForm />
    </div>
  </section>
);

const section8 = (
  <section className="bg-gray-100 py-12 relative"> 
    {crenulations}
    <Title prefix="Some of your heartfelt" title="Prayers and Wishes" />
    <div className="bg-white shadow-md h-96 w-11/12 sm:w-9/12 md:w-7/12 lg:w-6/12 mx-auto relative">
      <Comments />
    </div>
  </section>
);

const section9 = (
  <section className="bg-gray-200 py-12">
    <Title prefix="Feeling extra generous?" title="Wedding Gift" />
    <Donations />
  </section>
);

const section10 = (
  <section className="relative h-56">
    <Image fill
      src={background4} 
      alt="Background" 
      placeholder='blur' 
      className='object-center object-cover'
      sizes='100vw' />
    <div 
      className="flex flex-col items-center justify-center absolute inset-0"
      style={{ backdropFilter: "brightness(0.6) grayscale(0.2)" }}>
      <div>Kindly tag our instagram on our wedding day:</div>
      <a href={config.hashtag.url} className="underline">
        {config.hashtag.text}
      </a>
      <div>Your presence and prayers will bring joy to us.</div>
      <div className="font-dance text-3xl mt-2">Thank You</div>
    </div>
  </section>
);

const section11 = (
  <section className="bg-gray-100 flex flex-col items-center pt-12 pb-1">
    <Title prefix="Take a look at" title="Our Gallery" />
    <Gallery />
  </section>
);

const footer = (
  <footer className="flex flex-col items-center py-6">
    <a href={config.credits.link} rel="nofollow" className="text-center text-xs">
      <div>Made by {config.credits.name}</div>
      <div>{config.credits.description}</div>
    </a>
  </footer>
);

const Home: FC = () => {
  return (
    <main>
      {section1}
      {section2}
      {section3}
      {section4}
      {section5}
      {section6}
      {section7}
      {section8}
      {section9}
      {section10}
      {section11}
      {footer}
    </main>
  )
}

export default Home;
