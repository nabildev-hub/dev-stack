
import React from "react";
import type { Itechnologies } from "../../types/technologies";
 interface YourStackProps {
  selectedStack: Itechnologies[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}
const YourStack = ({ selectedStack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div className="sticky top-22 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm h-fit hover:shadow-md transition-all duration-300">
      <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
      <p className="text-sm text-slate-500 mt-1 mb-4">
        {selectedStack.length > 0
          ? `${selectedStack.length} Technology Selected`
          : "No technologies selected yet."}
      </p>

      {/* Conditional Rendering */}
      {selectedStack.length === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-xl py-8 px-4 text-center">
          <p className="text-sm text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div>
          <div className="space-y-4 mb-6 overflow-y-auto">
            {selectedStack.map((tech) => (
              <div
                key={tech.id }
                className="flex items-center justify-between border border-slate-200 rounded-lg bg-slate-50 rounded-lg py-2 px-3"
              >
                <div className="flex items-center gap-2">
                  <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{tech.name}</h4>
                    <span className="text-[10px] text-slate-400">{tech.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove( tech.id)}
                  className="text-slate-400 hover:text-red-500 cursor-pointer p-1"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full border border-red-100 text-red-500 hover:bg-red-50 font-semibold py-2 px-4 rounded-xl text-sm transition-colors cursor-pointer"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;