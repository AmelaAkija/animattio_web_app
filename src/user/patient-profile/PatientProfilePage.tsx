import React, { forwardRef, useState } from 'react';
import './PatientProfilePage.css';
import useResponsive from '../../ui-components/useResponsive';
import { Button, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import NotesList from '../../ui-components/note/NoteListComponent';
import TestsList from '../../ui-components/test/TestListComponent';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const notes = [
  {
    title: 'First Note',
    date: '2024-09-10',
    patient: 'John Doe'
  },
  {
    title: 'Second Note',
    date: '2024-09-11',
    patient: null
  },
  {
    title: 'Third Note',
    date: '2024-09-12'
  },
  {
    title: 'Fourth Note',
    date: '2024-09-13',
    patient: 'Jane Smith'
  }
];

const tests = [
  {
    id: 'pIqWxP87HaZjuosGDgIk1nw0x2W2',
    mode: 'mode2',
    timestamp: 'September 2, 2024 at 8:51:18 PM UTC+2'
  },
  {
    id: 'pIqWxP87HaZjuosGDgIk1nw0x2W2',
    mode: 'mode2',
    timestamp: 'September 2, 2024 at 8:51:18 PM UTC+2'
  }
];
const StartDateInput = forwardRef<HTMLInputElement, { value: string; onClick: () => void }>(
  ({ value, onClick }, ref) => (
    <div className="arrow-wrapper" onClick={onClick}>
      <input
        ref={ref}
        value={value}
        readOnly
        className="calendar-input"
        placeholder="Select a start date"
      />
      <div className="arrow">&#9662;</div>
    </div>
  )
);
const EndDateInput = forwardRef<HTMLInputElement, { value: string; onClick: () => void }>(
  ({ value, onClick }, ref) => (
    <div className="arrow-wrapper" onClick={onClick}>
      <input
        ref={ref}
        value={value}
        readOnly
        className="calendar-input"
        placeholder="Select an end date"
      />
      <div className="arrow">&#9662;</div>
    </div>
  )
);
function PatientProfilePage() {
  const { isMobile: mobile, isTablet: tablet, isLaptop: laptop } = useResponsive();
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  const [infoClicked, setInfoClicked] = useState(false);
  const [notesClicked, setNotesClicked] = useState(false);
  const [statsClicked, setStatsClicked] = useState(true);
  const [resultClicked, setResultClicked] = useState(false);

  const handleInfoClick = () => {
    setInfoClicked(!infoClicked);
  };
  const handleNotesClick = () => {
    setNotesClicked(!notesClicked);
  };
  const handleStatsClick = () => {
    setStatsClicked(!statsClicked);
  };
  const handleResultClick = () => {
    setResultClicked(!resultClicked);
  };
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <div className="patient-profile-container">
      <div className="patient-profile-first-column">
        {laptop && <h1 className="patient-profile-laptop">Patient's profile:</h1>}
        {mobile && <h1 className="patient-profile-mobile">Patient's profile:</h1>}
        {tablet && <h1 className="patient-profile-tablet">Patient's profile:</h1>}
        <div className="patient-button-container">
          <button
            className="patient-button"
            onClick={handleInfoClick}
            style={{
              backgroundColor: infoClicked ? '#FFC267' : '#FBE3BE'
            }}>
            <text className="patient-text-button">Patient's information:</text>
          </button>
        </div>

        <div className="patient-button-container">
          <button
            className="patient-button"
            onClick={handleResultClick}
            style={{
              backgroundColor: resultClicked ? '#FFC267' : '#FBE3BE'
            }}>
            <text className="patient-text-button">Results:</text>
          </button>
        </div>
        <div className="patient-button-container">
          <button
            className="patient-button"
            onClick={handleStatsClick}
            style={{
              backgroundColor: statsClicked ? '#FFC267' : '#FBE3BE'
            }}>
            <text className="patient-text-button">Statistics:</text>
          </button>
        </div>
        <div className="patient-button-container">
          <button
            className="patient-button"
            onClick={handleNotesClick}
            style={{
              backgroundColor: notesClicked ? '#FFC267' : '#FBE3BE'
            }}>
            <text className="patient-text-button">Notes:</text>
          </button>
        </div>
        {notesClicked && <NotesList notes={notes}></NotesList>}
        {resultClicked && <div className="space"></div>}
        {resultClicked && <TestsList tests={tests} />}

        {statsClicked && (
          <div className="stats-dropdown-container">
            <label className="patient-small-text-button" style={{ color: '#2A470C' }}>
              {' '}
              Game mode:
              <select
                id="gamemode"
                value={selectedOption}
                onChange={handleSelectChange}
                className="stats-dropdown">
                <option value="" disabled>
                  Please select a game mode
                </option>
                <option value="mode1">Mode 1</option>
                <option value="mode2">Mode 2</option>
              </select>
            </label>
          </div>
        )}
        {statsClicked && (
          <div className="stats-dropdown-container">
            <label className="patient-small-text-button" style={{ color: '#2A470C' }}>
              {' '}
              Parameter:
              <select
                id="parameter"
                value={selectedOption}
                onChange={handleSelectChange}
                className="stats-dropdown">
                <option value="" disabled>
                  Please select a parameter
                </option>
                <option value="omissionParameter">Omission error</option>
                <option value="comissionParameter">Comission error</option>
                <option value="hitRateParameter">Hit rate</option>
                <option value="reactionParameter">Reaction time</option>
              </select>
            </label>
          </div>
        )}
      </div>

      {/*column 2*/}
      {/**/}
      {/**/}
      <div className="patient-profile-second-column">
        {infoClicked && (
          <div className="patient-info-input-container">
            <div className="patient-input-wrapper">
              <label htmlFor="name" className="patient-input-label">
                Name:
              </label>
              <TextField
                id="name"
                variant="standard"
                name="name"
                className="info-input"
                InputProps={{
                  disableUnderline: true
                }}
              />
            </div>
            <div className="space"></div>
            <div className="patient-input-wrapper">
              <label htmlFor="lastName" className="patient-input-label">
                Last name:
              </label>
              <TextField
                id="lastNname"
                variant="standard"
                name="lastName"
                className="info-input"
                InputProps={{
                  disableUnderline: true
                }}
              />
            </div>
            <div className="space"></div>

            <div className="patient-input-wrapper">
              <label htmlFor="pesel" className="patient-input-label">
                PESEL:
              </label>
              <TextField
                id="pesel"
                variant="standard"
                name="pesel"
                className="info-input"
                InputProps={{
                  disableUnderline: true
                }}
              />
            </div>

            <div className="space"></div>
            <div className="patient-input-wrapper">
              <label htmlFor="dateOfBirth" className="patient-input-label">
                Date of birth:
              </label>
              <TextField
                id="dateOfBirth"
                variant="standard"
                name="dateOfBirth"
                className="info-input"
                InputProps={{
                  disableUnderline: true
                }}
              />
            </div>

            <div className="space"></div>
            <div className="patient-input-wrapper">
              <label htmlFor="age" className="patient-input-label">
                First seizure - age:
              </label>
              <TextField
                id="age"
                variant="standard"
                name="age"
                className="info-input"
                InputProps={{
                  disableUnderline: true
                }}
              />
            </div>

            <div className="space"></div>
            <div className="patient-input-wrapper">
              <label htmlFor="freq" className="patient-input-label">
                Seizure frequency:
              </label>
              <TextField
                id="freq"
                variant="standard"
                name="freq"
                className="info-input"
                InputProps={{
                  disableUnderline: true
                }}
              />
            </div>
            <div className="space"></div>

            <label className="patient-small-text-button" style={{ color: '#FFFBEE' }}>
              {' '}
              Parent contact information
              <select
                id="contact-method"
                value={selectedOption}
                onChange={handleSelectChange}
                className="patient-info-dropdown">
                <option value="" disabled>
                  Please select an option
                </option>
                <option value="phone">Phone number</option>
                <option value="email">E-mail address</option>
              </select>
            </label>
            <div className="space"></div>
            <div className="patient-input-wrapper">
              <label htmlFor="contact" className="patient-input-label">
                Contact information:
              </label>
              <TextField
                id="contact"
                variant="standard"
                name="contact"
                className="info-input"
                InputProps={{
                  disableUnderline: true
                }}
              />
            </div>

            <div className="space"></div>
            <div className="patient-input-wrapper">
              <label htmlFor="additional" className="patient-input-label">
                Additional information:
              </label>
              <TextField
                id="additional"
                variant="standard"
                name="additional"
                className="info-input"
                InputProps={{
                  disableUnderline: true
                }}
              />
            </div>
          </div>
        )}
        {resultClicked && <div className="big-space"></div>}
        {resultClicked && (
          <div className="patient-info-input-container">
            <div className="patient-input-wrapper">
              <label htmlFor="date" className="patient-input-label">
                Date:
              </label>
              <input id="dateOfGame" name="dateOfGame" className="info-input" readOnly />
            </div>
            <div className="space"></div>
            <div className="patient-input-wrapper">
              <label htmlFor="mode" className="patient-input-label">
                Game mode:
              </label>
              <input id="mode" name="mode" className="info-input" readOnly />
            </div>
            <div className="space"></div>

            <div className="patient-input-wrapper">
              <label htmlFor="omission" className="patient-input-label">
                Omission error:
              </label>
              <input id="omission" name="omission" className="info-input" readOnly />
            </div>

            <div className="space"></div>
            <div className="patient-input-wrapper">
              <label htmlFor="comission" className="patient-input-label">
                Comission error:
              </label>
              <input id="comission" name="comission" className="info-input" readOnly />
            </div>

            <div className="space"></div>
            <div className="patient-input-wrapper">
              <label htmlFor="reactionTime" className="patient-input-label">
                Reaction time:
              </label>
              <input id="reactionTime" name="reactionTime" className="info-input" readOnly />
            </div>
          </div>
        )}

        {notesClicked && (
          <div className="patient-notes-input-container">
            <div className="patient-notes-typing-input-container">
              <TextField
                id="notes"
                className="full-size"
                multiline
                rows={15}
                maxRows={15}
                variant="standard"
                InputProps={{
                  disableUnderline: true
                }}
                placeholder="Start typing..."></TextField>
            </div>
          </div>
        )}
        {notesClicked && (
          <div className="patient-note-button-container">
            <Button
              variant="contained"
              endIcon={<SaveIcon />}
              style={{ backgroundColor: '#2a470c' }}>
              Save
            </Button>
          </div>
        )}
        {statsClicked && (
          <div className="dates">
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)}
              dateFormat="yyyy/MM/dd"
              customInput={
                <StartDateInput
                  onClick={() => {}}
                  value={selectedDate ? selectedDate.toDateString() : ''}
                />
              }
              calendarClassName="calendar"
            />
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)}
              dateFormat="yyyy/MM/dd"
              customInput={
                <EndDateInput
                  onClick={() => {}}
                  value={selectedDate ? selectedDate.toDateString() : ''}
                />
              }
              calendarClassName="calendar"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientProfilePage;
