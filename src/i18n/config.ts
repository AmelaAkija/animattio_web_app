import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const savedLanguage = localStorage.getItem('language') || 'en';
i18n
  .use(initReactI18next)
  .init({

    lng: savedLanguage,
    fallbackLng: "en",

    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          sign_in: "Sign in",
          sign_up: "Sign up",
          about: "About",
          settings: "Settings",
          log_out: "Log out",
          login_page: "Log in",
          signup_page: "Sign up",
          name: "name",
          last_name: "last name",
          email: "e-mail address",
          pwz: "pwz number",
          password: "password",
          repeat_password: "repeat password",
          message_login:"Don't have an account yet? Sign up",
          message_signup: "Already have an account? Sign in",
          message_game: "Please select a game mode",
          message_parameter: "Please select a parameter",
          message_contact: "Please select an option if contact information changed",
          game_mode:"game mode",
          mode1: "Mode 1",
          mode2: "Mode 2",
          parameter: "Parameter",
          add_patient: "Add Patient",
          see_patients: "See patients",
          profile: "Profile",
          patient_profile: "Patient profile",
          doctor_profile: "Doctor profile",
          patient_info: "Patient's information",
          doctor_info: "Doctor's information",
          results: "Results",
          stats: "Statistics",
          notes:"Notes",
          new_results: "New results:",
          patient_id: "Patient ID",
          mode: "Mode",
          date: "date",
          see_more: "See more",
          date_of_birth: "date of birth",
          seizure: "first seizure - age",
          additional_info: "additional information",
          contact_info: "contact information",
          parent_contact_info: "parent contact information",
          meds:"medication description",
          freq: "seizure frequency",
          pharmacological:"pharmacological treatment",
          phone: "phone number",
          option: "please select an option",
          see_patient_profile: "See patient's profile",
          search: "search...",
          all: "All",
          Omission: "Omission error",
          Comission: "Comission error",
          Hit_rate: "Hit rate",
          Reaction_time: "Reaction time",
          omission: "omission error",
          comission: "comission error",
          hit_rate: "hit rate",
          reaction_time: "reaction time",
          start_typing:"Start typing...",
          save:"Save changes",
          start_date: "Select a start date",
          end_date: "Select an end date",
          title:"title",
          doctor_login: "Doctor logged in",
          access_denied: "Access denied. Only doctors can log in",
          all_fields: "All fields must be filled.",
          password_match:"Passwords do not match.",
          password_length: "Password must be at least 8 characters long.",
          password_capital:"Password must contain at least one uppercase letter.",
          password_number:"Password must contain at least one number.",
          change: "Edit login data",
          no_data: "No data provided",
          data_update: "Data updated successfully",
          message_changes: "To change personal data, fill the fields and click",
          message_credential: "To change login data click",
          close: "Close",
        },
      },
      pl: {
        translation: {
          sign_in: "Zaloguj się",
          sign_up: "Zarejestruj się",
          about: "O aplikacji",
          settings: "Ustawienia",
          log_out: "Wyloguj się",
          login_page: "Logowanie",
          signup_page: "Rejestracja",
          name: "imię",
          last_name: "nazwisko",
          email: "adres e-mail",
          pwz: "numer pwz",
          password: "hasło",
          repeat_password: "powtórz hasło",
          message_login:"Nie masz jeszcze konta? Zarejestruj się",
          message_signup: "Masz już konto? Zaloguj się",
          message_game: "Proszę wybrać tryb gry",
          message_parameter: "Proszę wybrać parametr",
          message_contact: "Proszę wybrać opcję, jeśli dane kontaktowe uległy zmianie",
          game_mode:"tryb gry",
          mode1: "Tryb 1",
          mode2: "Tryb 2",
          parameter: "Parametr",
          add_patient: "Dodaj pacjenta",
          see_patients: "Lista pacjentów",
          profile: "Profil",
          patient_profile: "Profil pacjenta",
          doctor_profile: "Profil lekarza",
          patient_info: "Dane pacjenta",
          doctor_info: "Dane lekarza",
          results: "Wyniki",
          stats: "Statystyki",
          notes:"Notatki",
          new_results: "Nowe wyniki:",
          patient_id: "ID pacjenta",
          mode: "Tryb",
          date: "data wykonania",
          see_more: "Zobacz więcej",
          date_of_birth: "data urodzenia",
          seizure: "napad drgawkowy - wiek",
          additional_info: "dodatkowe informacje",
          contact_info: "dane kontaktowe",
          parent_contact_info: "dane kontaktowe rodzica",
          meds: "opis zażywanych leków",
          freq: "częstotliwość występowania napadów",
          pharmacological:"leczenie farmakologiczne",
          phone: "numer telefonu",
          option: "proszę wybrać opcję",
          see_patient_profile: "Zobacz profil pacjenta",
          search: "szukaj...",
          all: "Wszystko",
          Omission: "Błąd omission",
          Comission: "Błąd comission ",
          Hit_rate: "Procent trafień",
          Reaction_time: "Czas reakcji",
          omission: "błąd omission",
          comission: "błąd comission",
          hit_rate: "procent trafień",
          reaction_time: "czas reakcji",
          start_typing:"Zacznij pisać...",
          save:"Zapisz zmiany",
          start_date: "Wybierz datę początkową",
          end_date: "Wybierz datę końcową",
          title:"tytuł",
          doctor_login: "Zalogowano jako lekarz",
          access_denied: "Brak dostępu. Tylko lekarz może się zalogować",
          all_fields: "Proszę wypełnić wszystkie pola.",
          password_match:"Hasła nie są identyczne.",
          password_length: "Hasło musi zawierać przynajmniej 8 znaków.",
          password_capital:"Hasło musi zawierać przynajmniej jedną wielką literę.",
          password_number:"Hasło musi zawierać przynajmniej 1 liczbę.",
          change: "Edytuj dane logowania",
          no_data: "Brak danych",
          data_update: "Dane zaaktualizowano pomyślnie",
          message_changes: "Aby zmienić dane osobiste, wprowadź nowe dane i kliknij",
          message_credential: "Aby zmienić dane logowania kliknij",
          close: "Zamknij",

        },
      },
    },
  });

export default i18n;