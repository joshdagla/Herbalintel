# 🌿 Herbalintel — Intelligent Ayurvedic Diagnosis Assistant

Herbalintel is an AI-powered Ayurvedic diagnosis system designed to intelligently predict common respiratory and viral illnesses based on symptoms and vital metrics. It then provides curated Ayurvedic medicine recommendations along with their dosage, ingredients, precautions, and visuals — offering a seamless blend of **ancient healing wisdom** and **modern AI**.

## 🚀 Features

- 🧠 **Machine Learning-Based Diagnosis**  
  Predicts diseases based on symptoms, heart rate, body temperature, oxygen saturation, and blood pressure using models like SVM, Random Forest, and XGBoost.

- 🌿 **Ayurvedic Medicine Recommendation**  
  Auto-suggests specific Ayurvedic remedies based on diagnosis, complete with image, ingredients, dosage, and safety information.

- 🖥️ **Modern Web App**  
  Built using **React (Vite)** for frontend and **FastAPI** for the backend with a clean, mobile-responsive UI and smooth user interactions.

- 🧪 **Model Comparison & Performance**  
  Trained on symptom datasets with class balancing, multi-output classification, and real-time predictions.

- ✨ **Rich UI/UX**  
  Sleek, modern design with animations, dropdowns, icons, and interactive result cards.

## 🏥 Diseases Covered & Medicines

| Disease        | Suggested Ayurvedic Medicine |
|----------------|------------------------------|
| Common Cold    | Giloy                        |
| Viral Fever    | Amritarishta                 |
| Flu            | Tulsi Tablets                |
| Bronchitis     | Sitopaladi Churna            |
| Pneumonia      | Mulethi                      |

Each medicine card includes:
- 📦 **Ingredients**
- 📏 **Dosage**
- ⚠️ **Precautions**
- 🖼️ **Visual Representation**

## 💻 Tech Stack

### 🔬 Backend (FastAPI)
- Python (v3.10+)
- FastAPI
- scikit-learn, SVM with Multioutput Classification
- Joblib for model serialization

### 🌐 Frontend (React)
- React + Vite
- Tailwind CSS
- React Router + Smooth Scroll
- Fetch API Integration

### ⚙️ Dev & Deployment
- Conda for environment management
- Render for Backend Hosting
- Vercel for Frontend Deployment
- GitHub for Version Control

### 🌍 Live Demo
🔗 Web App: https://herbalintel.vercel.app

🛑 Disclaimer: This application is intended for informational purposes only. The diagnosis and Ayurvedic suggestions are based on AI predictions and are not a substitute for professional medical advice. Always consult a certified healthcare professional before making health decisions.


