const
    weBelieveTitle = document.getElementById("we-beleive-title"),
    weBelieveText = document.getElementById("we-beleive-text"),
    aboutUsTitle = document.getElementById("about-us-title"),
    aboutUsText = document.getElementById("about-us-text"),
    languagePicker = document.getElementById("lang");
    
function setLanguage(e) {
    e = e ? e : languagePicker;
    
    let english = {
        weBelieve: {
            title: "We Believe",
            text: `We believe that every business deserves a unique and impactful logo that sets them apart from the competition. 
            Our team of talented designers is dedicated to understanding your vision, your values, and your audience, in order to create a logo that truly represents who you are.
    <br><br>
    
            We believe in delivering excellence. Quality is at the core of everything we do. From the initial concept to the final artwork, we strive for perfection in every detail. Your satisfaction is our top priority, and we won't rest until we've exceeded your expectations.`
        },
        aboutUs: {
            title: "About Us",
            text: `
            At our core, we possess a remarkable skill set and creativity that allows us to craft captivating and unique designs. We specialize in creating logos and styles tailored to meet the specific needs of businesses, individuals, or bands. Our objective is to create visually appealing and attention-grabbing designs that will serve as a powerful tool in attracting customers. Whether it's a logo for a business or any other design requirement, we are dedicated to providing a compelling visual identity that resonates with our clients' goals and effectively communicates their message.
            
            
            
            Whether you're in need of stunning illustrations, digital art pieces, or eye-catching graphic designs, I'm here to bring your ideas to life. With my artistic expertise and dedication to delivering high-quality work, I strive to provide designs that not only meet your needs but exceed your expectations.
            
            
            
            From creating beautiful book covers to designing logos that perfectly represent your brand, I am committed to delivering personalized and visually striking designs. Your satisfaction is my top priority, and I work closely with clients to ensure that every detail is captured and every vision is realize`
        }
    },
        hebrew = {
            weBelieve: {
                title: "אני מאמין",
                text: `אנחנו מאמינים כי לכל עסק מגיע לוגו ייחודי ומשפיע, המפריד אותו מהמתחרים ומושך לקוחות. צוות המעצבים המוכשר שלנו מתעסק בהבנת הצרכים, הערכים והקהל, על מנת ליצור לוגו שמייצג את מי שאתה באמת.
                <br><br>
                
                אנחנו מאמינים במסירות למצוינות. איכות היא בלב כל מה שאנחנו עושים. מהרעיון הראשוני ועד ליצירת העבודה הסופית, אנחנו שואפים למושלמות בכל פרט..`
            },
            aboutUs: {
                title: "קצת עלינו",
                text: `אנו מתמחים בעיצוב ויצירת לוגואים, סגנונות ועיצובים לכל מטרה (עסקית, פרטית, פנאי...). המטרה שלנו היא ליצור עיצוב מושך ללקוחות המחפשים עיצוב לעסק שלהם או לכל מטרה אחרת. אנו מתמחים ביצירת עיצובים ויזואליים מרהיבים וייחודיים שייתן ערך מוסף ויעזור למשוך לקוחות. באמצעות לוגואים לעסקים או כל עיצוב אחר, אנו מחויבים לספק זהות חזותית מושכת המתאימה למטרות הלקוחות שלנו ומעבירה ביעילות את המסר שלהם.`
            }
        }

        if(e.value == "English") {
            weBelieveTitle.innerHTML = english.weBelieve.title;
            weBelieveText.innerHTML = english.weBelieve.text;
            aboutUsTitle.innerHTML = english.aboutUs.title;
            aboutUsText.innerHTML = english.aboutUs.text;
        }else {
            weBelieveTitle.innerHTML = hebrew.weBelieve.title;
            weBelieveText.innerHTML = hebrew.weBelieve.text;
            aboutUsTitle.innerHTML = hebrew.aboutUs.title;
            aboutUsText.innerHTML = hebrew.aboutUs.text;

        }
}