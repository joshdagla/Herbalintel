import React from "react";

const ResultCard = ({ result, onReset }) => {
  const { diagnosis, severity, medicine } = result;

  return (
    <div className="mt-10 p-6 rounded-3xl bg-white/80 backdrop-blur shadow-2xl border border-green-200 transition-all duration-300">
      <h2 className="text-3xl font-bold text-green-700 mb-2 text-center">
        🌿 Diagnosis Result
      </h2>

      <div className="text-center text-lg text-gray-700 mb-6">
        <p className="font-semibold">
          <span className="text-green-600">Diagnosis:</span> {diagnosis}
        </p>
        <p className="font-semibold">
          <span className="text-green-600">Severity:</span> {severity}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <img
          src={`/medicines/${medicine.image}`}
          alt={medicine.name}
          className="w-36 h-36 rounded-xl shadow-md object-contain border border-gray-200"
        />

        <div className="text-sm text-gray-800 space-y-2">
          <h3 className="text-xl font-semibold text-green-800">{medicine.name}</h3>
          <p><strong>Contents:</strong> {medicine.contents}</p>
          <p><strong>Dosage:</strong> {medicine.dosage}</p>
          <p><strong>Precautions:</strong> {medicine.precautions}</p>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={onReset}
          className="px-8 py-3 rounded-lg bg-slate-900 text-white font-semibold tracking-wide shadow-lg hover:shadow-[0_8px_30px_rgba(34,197,94,0.7)] hover:translate-y-[-2px]transition-transform duration-300 ease-in-out"
          >
          🔃 Diagnose Again
        </button>
      </div>
          <p className="mt-4 text-xs text-gray-400 text-center italic">
      ⚠️Disclaimer: These predictions are just machine predictions and for informational use only. Please consult a qualified medical professional before following any recommendations.
        </p>
    </div>
  );
};

export default ResultCard;
