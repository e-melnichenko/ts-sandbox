type EmailLocaleIds = 'welcome_email' | 'email_heading';
type FooterLocaleIds = 'footer_title' | 'footer_sendoff';

type AllLocaleIds = `${EmailLocaleIds | FooterLocaleIds}_id`;
type Lang =  'en' | 'ru' | 'ua'
type LocaleMessageIds = `${Lang}_${AllLocaleIds}`

// intrinsic string manipulation types
type Greeting = 'hi';
type ShoutyGreeting = Uppercase<Greeting> // 'HI'

type Intrinsic = Uppercase<any> | Lowercase<any> | Capitalize<any> | Uncapitalize<any>;
