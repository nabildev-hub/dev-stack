import {use, useState} from 'react'
import type { Itechnologies } from '../../types/technologies';
import TechnologiesCard from './TechnologiesCard';
import YourStack from './YourStackCard';
import { toast } from "react-toastify";

interface TechnologiesProps {
    technologyPromise: Promise<Itechnologies[]>;
  }

const Technologies = ({  technologyPromise }:TechnologiesProps) => {
    const technologies = use(technologyPromise)
    const [selectedStack, setSelectedStack] = useState<Itechnologies[]>([]);

     const handleAdd = (technology: Itechnologies) => {
    setSelectedStack((prev) => [...prev, technology]);
     toast.success(`${technology.name} added to your stack!`, {
    position: "top-right",
    autoClose: 2000,
    theme: "light", })
    
  };

 const handleRemove = (id: string) => {
  const technology = selectedStack.find((tech) => tech.id === id);

  setSelectedStack((prev) =>
    prev.filter((tech) => tech.id !== id)
  );

  if (technology) {
    toast.info(`${technology.name} removed from your stack!`, {
      position: "bottom-right",
      autoClose: 2000,
      theme: "light",
    });
  }
};

 const handleRemoveAll = () => {
  if (selectedStack.length === 0) return;

  setSelectedStack([]);

  toast.info("All technologies removed from your stack!", {
    position: "bottom-right",
    autoClose: 2000,
    theme: "light",
  });
};

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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
         <div className="lg:col-span-9">

      <TechnologiesCard technologies={technologies} 
       selectedStack={selectedStack}
            onAdd={handleAdd}
      />
      
         </div>
          <div className="lg:col-span-3">

      <YourStack
            selectedStack={selectedStack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
          </div>
      </div>
    </div>
  );
};

export default Technologies
