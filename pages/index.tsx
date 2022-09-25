import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen py-2">
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="px-10 space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{' '}
          is a place to write, read and connect
        </h1>
        <h2 className="">
          It's easy and free to test your thinking on any topic and correct with
          millions of readers
        </h2>
      </div>

      <img
        className="hidden md:inline-flex h-32 lg:h-ful"
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        alt="Medium logo"
      />
    </div>
  );
};

export default Home;
