import React, {use} from 'react'
import type { Itechnologies } from '../../types/technologies';
import TechnologiesCard from './TechnologiesCard';

interface TechnologiesProps {
    technologyPromise: Promise<Itechnologies[]>;
  }

const Technologies = ({  technologyPromise }:TechnologiesProps) => {
    const technologies = use(technologyPromise)
  return (
      <div className="container mx-auto">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl sm:px-4">
        <h2 className="text-4xl font-bold text-black mb-2 sm:text-5xl leading-tight lg:leading-15">
          Explore the{" "}
          <span className="bg-linear-to-r from-pink-500 via-pink-600 to-purple-600 bg-clip-text text-transparent block sm:inline">
            Technologies
          </span>
        </h2>
        <p className="text-lg text-[#64748B] mb-7">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <TechnologiesCard technologies={technologies} />
    </div>
  );
};

export default Technologies
