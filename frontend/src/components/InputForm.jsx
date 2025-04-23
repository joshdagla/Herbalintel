import React, { useState } from 'react';
import coughIcon from '../assets/cough.png';
import documentIcon from '../assets/document_icon.png';
import heartbeatIcon from '../assets/heartbeat.png';
import bloodPressureIcon from '../assets/blood_pressure.png';
import oximeterIcon from '../assets/oximeter.png';
import thermometerIcon from '../assets/thermometer_icon.png';
import medicalExamineIcon from '../assets/medical_examine.png'; 

const symptomOptions = [
    'Runny nose',
    'Cough',
    'Fever',
    'Body ache',
    'Headache',
    'Fatigue',
    'Shortness of breath',
    'Sore throat'
];

const InputForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        symptom1: '',
        symptom2: '',
        symptom3: '',
        heartRate: '',
        bodyTemp: '',
        oxygenSaturation: '',
        bloodPressure: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            const updated = { ...prev, [name]: value };

            // Automatically clear unique error if the symptoms are valid
            const { symptom1, symptom2, symptom3 } = updated;
            if (new Set([symptom1, symptom2, symptom3]).size === 3) {
                setErrors((prevErr) => ({
                    ...prevErr,
                    symptom1: '',
                    symptom2: '',
                    symptom3: ''
                }));
            }

            return updated;
        });
        setErrors((prevErr) => ({ ...prevErr, [name]: '' }));  // clear specific error
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        Object.entries(formData).forEach(([key, value]) => {
            if (!value) validationErrors[key] = 'This field is required.';
        });

        const { symptom1, symptom2, symptom3 } = formData;
        if (symptom1 && symptom2 && symptom3) {
            const uniqueSymptoms = new Set([symptom1, symptom2, symptom3]);
            if (uniqueSymptoms.size < 3) {
                validationErrors.symptom1 = validationErrors.symptom2 = validationErrors.symptom3 = 'Symptoms must be unique.';
            }
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        onSubmit(formData);
    };

    const handleClear = () => {
        setFormData({
            symptom1: '',
            symptom2: '',
            symptom3: '',
            heartRate: '',
            bodyTemp: '',
            oxygenSaturation: '',
            bloodPressure: ''
        });
        setErrors({});
    };

    const inputFields = [
        { name: 'heartRate', placeholder: 'Heart Rate in bpm', icon: heartbeatIcon },
        { name: 'bodyTemp', placeholder: 'Body Temperature in Celsius(C)', icon: thermometerIcon },
        { name: 'oxygenSaturation', placeholder: 'Oxygen Saturation in Percentage(%)', icon: oximeterIcon },
        { name: 'bloodPressure', placeholder: 'Blood Pressure in mmHg', icon: bloodPressureIcon },
    ];

    return (
        <form onSubmit={handleSubmit} className="grid gap-5 w-full max-w-2xl mx-auto">

            {/* Symptom Dropdowns */}
            {['symptom1', 'symptom2', 'symptom3'].map((symptom, index) => (
                <div key={symptom} className="flex flex-col">
                    <div className="flex items-center border border-black rounded-xl px-4 py-2 bg-white/30 backdrop-blur-md shadow-md hover:shadow-lg">
                        <img src={[coughIcon, documentIcon, medicalExamineIcon][index]} alt="Symptom Icon" className="w-6 h-6 mr-3" />
                        <select
                            name={symptom}
                            value={formData[symptom]}
                            onChange={handleChange}
                            className="flex-grow bg-transparent outline-none text-gray-800 rounded-xl border-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white"
                        >
                            <option value="">Select {`Symptom ${String.fromCharCode(65 + index)}`}</option>
                            {symptomOptions.map((symp) => (
                                <option key={symp} value={symp}>{symp}</option>
                            ))}
                        </select>
                    </div>
                    {errors[symptom] && <span className="text-red-500 text-sm mt-1 ml-2">{errors[symptom]}</span>}
                </div>
            ))}

            {/* Other Fields */}
            {inputFields.map((field) => (
                <div key={field.name} className="flex flex-col">
                    <div className="flex items-center border border-black rounded-xl px-4 py-2 bg-white/30 backdrop-blur-md shadow-md hover:shadow-lg">
                        <img src={field.icon} alt={field.placeholder} className="w-6 h-6 mr-3" />
                        <input
                            type="text"
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className="flex-grow bg-transparent outline-none text-gray-800 rounded-xl border-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white"
                        />
                    </div>
                    {errors[field.name] && <span className="text-red-500 text-sm mt-1 ml-2">{errors[field.name]}</span>}
                </div>
            ))}

<div className="flex justify-center gap-6 mt-6">
  <button
    type="submit"
    className="px-8 py-3 rounded-lg bg-slate-900 text-white font-semibold tracking-wide shadow-lg 
               hover:shadow-[0_8px_30px_rgba(34,197,94,0.7)] hover:translate-y-[-2px]
               transition-transform duration-300 ease-in-out"
  >
    🩺 Diagnose and Recommend!
  </button>

  <button
    type="button"
    onClick={handleClear}
    className="px-8 py-3 rounded-lg bg-slate-900 text-white font-semibold tracking-wide shadow-lg 
               hover:shadow-[0_8px_30px_rgba(34,197,94,0.7)] hover:translate-y-[-2px]
               transition-transform duration-300 ease-in-out"
  >
    🔄 Clear All
  </button>
</div>

    </form>
    );
};

export default InputForm;
