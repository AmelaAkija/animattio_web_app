import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const savedLanguage = localStorage.getItem('language') || 'en';
i18n
  .use(initReactI18next)
  .init({

    lng: savedLanguage, // Sets the initial language for the application
    fallbackLng: "en", // Default language

    debug: true, // logs helpful information to the console (missing translation keys)
    interpolation: {
      escapeValue: false, //  prevents escaping of characters like < and > in translations
    },
    resources: {
      en: {
        translation: {
          mobile_username:"ID in mobile app",
          sign_in: "Sign in",
          sign_up: "Sign up",
          about: "About",
          settings: "Settings",
          log_out: "Log out",
          login_page: "Log in",
          signup_page: "Sign up",
          name: "name",
          last_name: "last name",
          email: "E-mail address",
          pwz: "pwz number",
          password: "Password",
          repeat_password: "repeat password",
          message_login:"Don't have an account yet? Sign up",
          message_signup: "Already have an account? Sign in",
          message_test: "Please select a test mode",
          message_parameter: "Please select a parameter",
          message_contact: "Please select an option if contact information changed",
          test_mode:"test mode",
          mode1: "Mode 1",
          mode2: "Mode 2",
          parameter: "Parameter",
          add: "Add",
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
          message_note:"Note added successfully",
          add_note:"Add note",
          add_title:"Add title",
          see_note: "See details",
          content:"content",
          no_notes: "No notes available",
          created_at:"date",
          username:"Username",
          username2:"username",
          age:"Age",
          gender: "Gender",
          no_filtered_notes:"No notes match",
          see_notes: "See notes",
          epilepsy: "Epilepsy",
          type: "Type",
          loading: "Loading...",
          patient_update_success: "Patient updated successfully",
          patient_update_failure: "Failed to update patient",
          endDate: "End date",
          reactionTime: "Reaction Time (ms)",
          addPatient: "Add patient",
          seePatients:"See patients",
          userProfile:"User profile",
          noEpilepsy:"No Epilepsy",
          logOutMessage: "User successfully logged out",
          errorLogOutMessage: "Couldn't log out user",
          addPatientMessage: "Patient added successfully",
          errorAddPatientMessage: "Error while adding patient",
          errorPatientExistsMessage: "Patient with this username already exists",
          selectGender: "select gender",
          male:"male",
          female:"female",
          interval: "Interval",
          meanReactionTime: "Mean Reaction Time (ms)",
          SD: "Standard Deviation (ms)",
          errorOmission: "Error of Omission (%)",
          errorCommission: "Error of Commission (%)",
          patientResult: "Patient Result",
          normative: "Normative result",
          seeDoctorProfile: "See doctor's profile",
          noDataForMonth: 'No data available for the selected date range',
          startMonth: 'Start month',
          endMonth: 'End month',
          Commission: "Commission error",
          noDataForDate:'No data available for the selected date range',
          startDailyDate: 'Start date',
          endDailyDate: 'End date',
          monthlyGraph: "Monthly graph",
          dailyGraph: 'Daily graph',
          addDoctor: "Add doctor",
          seeDoctors:"See doctors",
          normativeCommission: "Normative commission error",
          normativeOmission: "Normative omission error",
          errorLogin:"Invalid credentials",
          choose_search_type: "Search",
          enter_username:"Enter username",
          choose_gender: "Choose gender",
          choose_type: "Choose type",
          min_age: "min",
          max_age: "max",
          maxMin: "Max age cannot be less than Min age",
          ageValues: "Age values must be between 6 and 18",
          noPatientsFound: "No patients found",
          errorFetchingPatients: "An error occurred while fetching patients",
          unexpectedError: "An unexpected error occurred",
          selectAge: "Select age",
          selectType: "Select type",
          errorRequiredFieldsMessage: "Please fill in all the required fields",
          logOut: "You have been logged out. Please log in again",
          updateFail: "Failed to update login credentials",
          updateSuccess: "Login credentials updated successfully",
          addDoctorSuccess: "Doctor added successfully",
          doctorExists: "Doctor already exists",
          deleteWindow: "Are you sure you want to delete the account?",
          deleteSuccess: "Account deleted successfully",
          deleteFail: "Failed to delete account",
          delete: "Delete",
          cancel: "Cancel",
          doctorProfile: "Doctor profile",
          stimuliCount: "Number of stimuli's",
          nonStimuliCount: "Number of non-stimuli's",
          omissionsCount: "Number of omissions",
          commissionCount: "Number of commissions",
          omissionPercentage: "Percentage of omission error",
          commissionPercentage: "Percentage of commission error",
          patientUsername: "Patient",
          confirm_delete_title: "Confirm Deletion",
          confirm_delete_message: "Are you sure you want to delete the patient?",
          patient_delete_success: "Patient deleted successfully",
          patient_delete_failure: "Failed to delete patient",
          doctor: "Doctor",
        },
      },
      pl: {
        translation: {
          doctor: "Lekarz",
          confirm_delete_title: "Potwierdź usunięcie",
          confirm_delete_message: "Czy na pewno chcesz usunąć pacjenta?",
          patient_delete_success: "Poprawnie usunięto pacjenta",
          patient_delete_failure: "Nie udało się usunąć pacjenta",
          add: "Dodaj",
          omissionsCount: "Liczba błędów pominięcia",
          commissionCount: "Liczba błędów fałszywego rozpoznania",
          omissionPercentage: "Procent błędu pominięcia",
          commissionPercentage: "Procent błędu fałszywego rozpoznania",
          nonStimuliCount: "Liczba bodźców nieistotnych",
          stimuliCount: "Liczba bodźców istotnych",
          delete: "Usuń",
          deleteFail: "Nie udało się usunąć konta",
          deleteSuccess: "Konto usunięte pomyślnie",
          deleteWindow: "Czy na pewno chcesz usunąć konto?",
          doctorExists: "Lekarz o podanej nazwie jest w bazie danych",
          addDoctorSuccess: "Lekarz dodany pomyślnie",
          updateSuccess: "Dane logowania zostały pomyślnie zaktualizowane",
          updateFail: "Nie udało się zaktualizować danych logowania",
          logOut: "Zostałeś wylogowany/a. Zaloguj się ponownie",
          selectType: "Wybierz typ",
          errorRequiredFieldsMessage: "Proszę wypełnić wszystkie wymagane pola",
          selectAge: "Wybierz wiek",
          unexpectedError: "Wystąpił nieoczekiwany błąd",
          errorFetchingPatients: "Wystąpił błąd podczas pobierania pacjentów",
          noPatientsFound: "Nie znaleziono pacjentów w podanym zakresie",
          ageValues: "Wprowadzane wartości muszą być w zakresie 6-18",
          maxMin: "Maksymalny wiek nie może być mniejszy niż minimalny",
          min_age: "min",
          max_age: "max",
          choose_type: "Wybierz typ",
          choose_gender: "Wybierz płeć",
          enter_username:"Wpisz nazwę użytkownika",
          choose_search_type: "Wyszukaj",
          errorLogin:"Niepoprawne dane",
          normativeCommission: "Normatywny błąd fałszywego rozpoznania",
          normativeOmission: "Normatywny błąd pomienięcia",
          seeDoctors:"Lista lekarzy",
          addDoctor: "Dodaj lekarza",
          dailyGraph: 'Wykres dzienny',
          monthlyGraph: "Wykres miesięczny",
          startDailyDate: 'Data początkowa',
          endDailyDate: 'Data końcowa',
          noDataForDate:'Brak danych dla wybranego zakresu dat',
          startMonth: 'Pierwszy miesiąc',
          endMonth: 'Ostatni miesiąc',
          noDataForMonth: 'Brak danych dla wybranego zakresu dat',
          seeDoctorProfile: "Zobacz profil lekarza",
          errorCommission: "Błąd fałszywego rozpoznania (%)",
          patientResult: "Wynik pacjenta",
          normative: "Wynik normatywny",
          errorOmission: "Błąd pomienięcia (%)",
          interval: "Interwał",
          meanReactionTime: "Średni czas reakcji (ms)",
          SD: "Odchylenie standardowe (ms)",
          male:"męska",
          female:"żeńska",
          cancel: "Anuluj",
          selectGender: "wybierz płeć",
          errorPatientExistsMessage: "Pacjent o podanej nazwie użytkownika już istnieje",
          errorAddPatientMessage: "Nie udało się dodać pacjenta",
          addPatientMessage: "Pomyślnie dodano pacjenta",
          errorLogOutMessage: "Nie udało się wylogować użytkownika",
          logOutMessage: "Pomyślnie wylogowano użytkownika",
          noEpilepsy:"Brak padaczki",
          addPatient: "Dodaj pacjenta",
          seePatients:"Zobacz listę pacjentów",
          userProfile:"Profil użytkownika",
          doctorProfile: "Profil lekarza",
          reactionTime: "Czas reakcji (ms)",
          endDate: "Data ukończenia",
          patient_update_success: "Zaktualizowano dane użytkownika",
          patient_update_failure: "Nie udało się zaktualizować użytkownia",
          mobile_username:"ID w aplikacji mobilnej",
          age:"Wiek",
          gender: "Płeć",
          sign_in: "Zaloguj się",
          sign_up: "Zarejestruj się",
          about: "O aplikacji",
          settings: "Ustawienia",
          log_out: "Wyloguj się",
          login_page: "Logowanie",
          signup_page: "Rejestracja",
          name: "imię",
          last_name: "nazwisko",
          email: "Adres e-mail",
          pwz: "numer pwz",
          password: "Hasło",
          type: "Typ",
          patientUsername: "Pacjent",
          repeat_password: "Powtórz hasło",
          message_login:"Nie masz jeszcze konta? Zarejestruj się",
          message_signup: "Masz już konto? Zaloguj się",
          message_test: "Proszę wybrać tryb testu",
          message_parameter: "Proszę wybrać parametr",
          message_contact: "Proszę wybrać opcję, jeśli dane kontaktowe uległy zmianie",
          test_mode:"tryb testu",
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
          Omission: "Błąd pominięcia",
          Commission: "Błąd fałszywego rozpoznania",
          Hit_rate: "Procent trafień",
          Reaction_time: "Czas reakcji",
          omission: "Błąd pominięcia",
          commission: "Błąd fałszywego rozpoznania",
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
          username:"Nazwa użytkownika",
          username2:"nazwa użytkownika",
          message_note:"Pomyślnie dodano notatkę",
          add_note:"Dodaj notatkę",
          add_title:"Dodaj tytuł",
          see_note: "Zobacz szczegóły",
          content:"treść",
          no_notes: "Brak notatek",
          created_at:"data",
          no_filtered_notes:"Brak notatek spełniających kryteria wyszukiwania",
          see_notes: "Zobacz listę notatek",
          epilepsy: "Padaczka",
          loading: "Ładowanie..."

        },
      },
    },
  });

export default i18n;