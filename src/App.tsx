import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './ui-components/navbar/Navbar';
import LoginPage from './authentication/LoginPage';
import SignupPage from './authentication/SignupPage';
import AddPatientPage from './user/account/AddPatientPage';
import SeePatientsPage from './user/account/PatientsListPage';
import DoctorProfilePage from './user/doctor-profile/DoctorProfilePage';
import PatientProfilePage from './user/patient-profile/PatientProfilePage';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import ResultsPage from './user/patient-profile/ResultsPage';
import DoctorsListPage from './admin/DoctorsListPage';
function App() {
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
      <Navbar />
      <Routes>
        {/*<Route path="/" element={<MainPage />} />*/}

        <Route path="/" element={<LoginPage />} />
        <Route path="/add-doctor" element={<SignupPage />} />
        <Route path="/see-doctors" element={<DoctorsListPage />} />
        <Route path="/add-patient" element={<AddPatientPage />} />
        <Route path="/see-patients" element={<SeePatientsPage />} />
        <Route path="/doctor-profile" element={<DoctorProfilePage />} />
        <Route path="/doctor-profile/:username" element={<DoctorProfilePage />} />
        <Route path="/patient-profile/:username" element={<PatientProfilePage />} />
        <Route path="/test-results/:testId" element={<ResultsPage />} />



      </Routes>
      </I18nextProvider>
    </Router>
  );
}

export default App;
