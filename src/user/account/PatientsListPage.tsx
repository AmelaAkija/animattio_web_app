import React, { useEffect, useState } from 'react';
import './PatientsListPage.css';
import PatientsList from '../../ui-components/patient/PatientsListComponent';
import { useTranslation } from 'react-i18next';
import apiClient from '../../services/apiClient';
import debounce from 'lodash.debounce';
import { toast } from 'react-toastify';
import axios from 'axios';
// Patient object
interface Patient {
  patientUsername: string;
  gender: string;
  age: number;
  type: string;
}

const SeePatientsPage: React.FC = () => {
  const { t } = useTranslation();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchType, setSearchType] = useState(''); // Selected search filter type
  const [searchValue, setSearchValue] = useState('');
  const [ageRange, setAgeRange] = useState({ min: '', max: '' }); // // Default min and max age range
  const doctorId = localStorage.getItem('doctorUsername');

  const fetchPatients = async (searchValueOverride?: string) => {// Fetch patients based on the selected search filter
    setLoading(true);
    let url = `https://backend-animattio-59a791d90bc1.herokuapp.com/patients/get-all-patients?doctorId=${doctorId}`;
    // Sets endpoint parameters or uses default values
    if (searchType === 'age') {
      const minAge = ageRange.min ? Number(ageRange.min) : 6;
      const maxAge = ageRange.max ? Number(ageRange.max) : 18;
      // Min age should be lower than max age
      if (minAge > maxAge) {
        toast.error(t('maxMin'));
        setLoading(false);
        return;
      }

      url = `https://backend-animattio-59a791d90bc1.herokuapp.com/patients/get-patients-by-age?doctorId=${doctorId}&minAge=${minAge}&maxAge=${maxAge}`;
    } else if (searchType === 'gender' && searchValue) {
      url = `https://backend-animattio-59a791d90bc1.herokuapp.com/patients/get-patients-by-gender?doctorId=${doctorId}&gender=${searchValue}`;
    } else if (searchType === 'username' && (searchValueOverride || searchValue)) {
      const usernameToSearch = searchValueOverride || searchValue;
      url = `https://backend-animattio-59a791d90bc1.herokuapp.com/patients/get-patients-by-username?doctorId=${doctorId}&username=${usernameToSearch}`;
    } else if (searchType === 'type' && searchValue) {
      url = `https://backend-animattio-59a791d90bc1.herokuapp.com/patients/get-patients-by-type?doctorId=${doctorId}&type=${searchValue}`;
    }

    try {
      const response = await apiClient.get(url);

      if (response.status !== 200) {
        throw new Error('Unexpected status code');
      }

      const data: Patient[] = response.data; // // Parses response data
      setPatients(data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 404) {
          toast.error(t('noPatientsFound'));
        } else {
          toast.error(t('errorFetchingPatients'));
        }
      } else {
        toast.error(t('unexpectedError'));
        console.error('Unexpected error:', error);
      }
      setPatients([]);
      console.error('Error fetching patients:', error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchPatients = debounce((value: string) => { // Debouncing is to ensure function is only executed after a specific delay,
    // and only if no new event occurs during that delay
    fetchPatients(value);
  }, 300);

  useEffect(() => {
    if (searchType === 'username' && searchValue) { // Debouncing for username search where user types constantly
      debouncedFetchPatients(searchValue);
    } else {
      fetchPatients();
    }

    return () => {
      debouncedFetchPatients.cancel();
    };
  }, [searchType, searchValue, ageRange]);
  // Dropdown for age selection
  const generateAgeOptions = () => {
    const options = [];
    for (let i = 9; i <= 18; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <div className="patients-list-container">
      <div className="searchContainer">
        <select
          className="searchType"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="">{t('choose_search_type')}</option>
          <option value="username">{t('patientUsername')}</option>
          <option value="gender">{t('gender')}</option>
          <option value="age">{t('age')}</option>
          <option value="type">{t('type')}</option>
        </select>

        {searchType === 'username' && (
          <input
            type="text"
            className="searchInput"
            placeholder={t('enter_username')}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        )}

        {searchType === 'gender' && (
          <select
            className="searchInput"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          >
            <option value="">{t('choose_gender')}</option>
            <option value="male">{t('male')}</option>
            <option value="female">{t('female')}</option>
          </select>
        )}

        {searchType === 'age' && (
          <div className="ageRange">
            <select
              className="ageInput"
              value={ageRange.min}
              onChange={(e) => setAgeRange({ ...ageRange, min: e.target.value })}
            >
              <option value="">{t('min_age')}</option>
              {generateAgeOptions()}
            </select>
            <select
              className="ageInput"
              value={ageRange.max}
              onChange={(e) => setAgeRange({ ...ageRange, max: e.target.value })}
            >
              <option value="">{t('max_age')}</option>
              {generateAgeOptions()}
            </select>
          </div>
        )}

        {searchType === 'type' && (
          <select
            className="searchInput"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          >
            <option value="">{t('choose_type')}</option>
            <option value="epilepsy">{t('epilepsy')}</option>
            <option value="no epilepsy">{t('noEpilepsy')}</option>
          </select>
        )}
      </div>
      <div className="patients-container">
        {loading ? <p>{t('loading')}</p> : <PatientsList patients={patients} />}
      </div>
    </div>
  );
};

export default SeePatientsPage;
