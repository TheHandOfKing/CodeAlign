function startTime(){
    var vreme = new Date();
    var h = vreme.getHours();
    var m = vreme. getMinutes();
    var s = vreme.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("clock").innerHTML = h + ":" + m +  ":" + s;
    var t = setTimeout (startTime, 900);
}
    function checkTime(i){
       if( i < 10 ){
           i = "0" + i ;
       }
        return i;
    }
    
    function changeLan(){
        var x = document.getElementById("lnaguageSelectorIndex");
        if(x.options[x.selectedIndex].value === "English"){
        document.getElementById("pHolder").innerHTML = "<p>Save up to 30% if you are registrating by school or a company account. If not, then you can get an Annual or Personal Premium subscription for 33% off!!!</p>";
        document.getElementById("tecGetter").textContent = "The technology learning platform";
        document.getElementsByClassName("smallP")[0].textContent = "Keep up with technology with expert-led courses, assessments and tools that help you build the skills you need, when you need them. For organizations, get unprecedented insight into skills strengths and weaknesses and align learning to what matters."
        document.getElementById("optDesc").textContent= "Success Starts Here"
        document.getElementsByClassName("forShow")[0].textContent = "Personal"
        document.getElementsByClassName("forShow")[1].textContent = "Team"
        document.getElementsByClassName("forShow")[2].textContent = "Enterprise"
        document.getElementsByClassName("smallPr")[0].textContent = "Grow your skills and advance your career"
        document.getElementsByClassName("smallPr")[1].textContent = "Prepeare your team and maximize your efforts"
        document.getElementsByClassName("smallPr")[2].textContent = "Measure progress toward busines objectives"
        document.getElementsByClassName("displayLater")[0].textContent = "Course Library"
        document.getElementsByClassName("displayLater")[1].textContent = "Paths"
        document.getElementsByClassName("displayLater")[2].textContent = "Skill Assesstments"
        document.getElementsByClassName("displayLater")[3].textContent = "Certification practice exams"
        document.getElementsByClassName("displayLater")[4].textContent = "Usage Analytics"
        document.getElementsByClassName("displayLater")[5].textContent = "Channels"
        document.getElementsByClassName("displayLater")[6].textContent = "Advanced channel analytics"
        document.getElementsByClassName("displayLater")[7].textContent = "Advanced skill analytics"
        document.getElementsByClassName("displayLater")[8].textContent = "Single Sign-On"
        document.getElementsByClassName("displayLaterSmall")[6].textContent = "Measure progress towards business objectives by ensuring employees are completing assigned content and courses."
        document.getElementsByClassName("displayLaterSmall")[7].textContent = "See individual skill levels and topic-level insights to understand current proficiency and put the right people on the right projects."
        document.getElementsByClassName("displayLaterSmall")[8].textContent = "Streamline your team' s experience by giving learners a single username and password to access Pluralsight."
        document.getElementsByClassName("displayLaterSmall")[3].textContent = "Prepare for professional certifications with industry-leading practice exams."
        document.getElementsByClassName("displayLaterSmall")[4].textContent = "View usage, hours spent learning and a leaderboard of your top members."
        document.getElementsByClassName("displayLaterSmall")[5].textContent = "Combine sections of different courses or paths to create a custom learning plan aligned to your team goals."
        document.getElementsByClassName("displayLaterSmall")[0].textContent = "Develop your skills with 7, 000+ expert-led courses across hundreds of topics."
        document.getElementsByClassName("displayLaterSmall")[1].textContent = "Build on your proficiency by knowing which courses to watch in which order, with course work curated by experts."
        document.getElementsByClassName("displayLaterSmall")[2].textContent = "Measure your skill level with confidence in as little as 20 questions and five minutes."
    }
        else if(x.options[x.selectedIndex].value === "Serbian_Cyr"){
            document.getElementById("pHolder").innerHTML = "<p> Сачувајте до 30% уколико се региструјете преко школе или фирме. Ако не, онда пробајте наше Годишње или Персоналне претплате уз 33% попуста!!!</p>";
            document.getElementById("tecGetter").textContent = "Платформа за технолошко обучавање"
            document.getElementsByClassName("smallP")[0].textContent = "Будите у току са високо специјализованим курсевима, проценама и алатима који вам помажу у изградњи ваших способности. За фирме, стекните непроцењиве увиде у вештине, снаге и слабости и ускладите учење са оним што је битно."
            document.getElementById("optDesc").textContent= "Успех Почиње Овде"
            document.getElementsByClassName("forShow")[0].textContent = "Лично"
            document.getElementsByClassName("forShow")[1].textContent = "Tим"
            document.getElementsByClassName("forShow")[2].textContent = "Предузеће"
            document.getElementsByClassName("smallPr")[0].textContent = "Унапредите ваше способности и вашу каријеру"
            document.getElementsByClassName("smallPr")[1].textContent = "Припремите вашу групу и дајте свој максимум"
            document.getElementsByClassName("smallPr")[2].textContent = "Усмерите ваш напредак према бизнис задацима"
            document.getElementsByClassName("displayLater")[0].textContent = "Библиотека Курсева"
            document.getElementsByClassName("displayLater")[1].textContent = "Путеви"
            document.getElementsByClassName("displayLater")[2].textContent = "Процене вештина"
            document.getElementsByClassName("displayLater")[3].textContent = "Испитивања праксе сертификације"
            document.getElementsByClassName("displayLater")[4].textContent = "Употреба аналитике"
            document.getElementsByClassName("displayLater")[5].textContent = "Канали"
            document.getElementsByClassName("displayLater")[6].textContent = "Напредна аналитика канала"
            document.getElementsByClassName("displayLater")[7].textContent = "Напредна анализа вештина"
            document.getElementsByClassName("displayLater")[8].textContent = "Уникатна пријава"
            document.getElementsByClassName("displayLaterSmall")[6].textContent = "Усмерите напредак ка бизнис задацима тако што ћете осигурати да ваши запослени завршавају задати посао."
            document.getElementsByClassName("displayLaterSmall")[7].textContent = "Погледајте појединачне нивое вјештина и увид у ниво теме како бисте разумјели тренутну способност и поставили праве људе на праве пројекте."
            document.getElementsByClassName("displayLaterSmall")[8].textContent = "Поједноставите искуство вашег тима дајући ученицима једно корисничко име и лозинку за приступ Pluralsight."
            document.getElementsByClassName("displayLaterSmall")[3].textContent = "Припремите се за професионалне сертификате са испитима који воде праксу у индустрији."
            document.getElementsByClassName("displayLaterSmall")[4].textContent = "Прегледајте коришћење, часове проведене у учењу и лидербоард ваших чланова."
            document.getElementsByClassName("displayLaterSmall")[5].textContent = "Комбинујте одељке различитих курсева или стаза да бисте креирали прилагођени план учења усклађен са циљевима вашег тима."
            document.getElementsByClassName("displayLaterSmall")[0].textContent = "Развијте своје вештине са 7, 000+ стручним предавањима преко стотина тема."
            document.getElementsByClassName("displayLaterSmall")[1].textContent = "Изградите на својој стручности знајући које курсеве гледати у којем редоследу, с курсом курирају стручњаци."
            document.getElementsByClassName("displayLaterSmall")[2].textContent = "Измерите ниво вјештина са сигурношћу за само 20 питања и пет минута."
        }
        else if(x.options[x.selectedIndex].value === "French"){
            document.getElementById("pHolder").innerHTML = "<p>Économisez jusqu'à 30% si vous vous inscrivez par le biais d'un compte d'école ou d'un compte d'entreprise. Sinon, vous pouvez souscrire un abonnement Premium annuel ou personnel à 33% de réduction!!!</p>";
            document.getElementById("tecGetter").textContent = "La plateforme d'apprentissage technologique"
            document.getElementsByClassName("smallP")[0].textContent ="Restez au fait de la technologie avec des cours dirigés par des experts, des évaluations et des outils qui vous aident à acquérir les compétences dont vous avez besoin, quand vous en avez besoin. Pour les organisations, obtenez un aperçu sans précédent sur les forces et les faiblesses des compétences et alignez l'apprentissage sur l'essentiel.";
            document.getElementById("optDesc").textContent= "Le Succès Commence Ici"
            document.getElementsByClassName("forShow")[0].textContent = "Personnel"
            document.getElementsByClassName("forShow")[1].textContent = "Équipe"
            document.getElementsByClassName("forShow")[2].textContent = "L' entreprise"
            document.getElementsByClassName("smallPr")[1].textContent = "Préparez votre équipe et maximisez vos efforts"
            document.getElementsByClassName("smallPr")[0].textContent = "Développez vos compétences et faites progresser votre accompagnateur"
            document.getElementsByClassName("smallPr")[2].textContent = "Mesurer les progrès vers les objectifs de l'entreprise"
            document.getElementsByClassName("displayLater")[0].textContent = "Bibliothèque de cours"
            document.getElementsByClassName("displayLater")[1].textContent = "Les chemins"
            document.getElementsByClassName("displayLater")[2].textContent = "Évaluations de compétences"
            document.getElementsByClassName("displayLater")[3].textContent = "Examens de pratique de certification"
            document.getElementsByClassName("displayLater")[4].textContent = "Analyse d'utilisation"
            document.getElementsByClassName("displayLater")[5].textContent = "Canaux"
            document.getElementsByClassName("displayLater")[6].textContent = "Analyse de canal avancée"
            document.getElementsByClassName("displayLater")[7].textContent = "Analyse de compétences avancée"
            document.getElementsByClassName("displayLater")[8].textContent = "Authentification unique"
            document.getElementsByClassName("displayLaterSmall")[6].textContent = "Mesurez les progrès accomplis dans la réalisation des objectifs métier en vous assurant que les employés suivent le contenu et les cours attribués."
            document.getElementsByClassName("displayLaterSmall")[7].textContent = "Consultez les niveaux de compétence individuels et les informations sur les sujets pour comprendre les compétences actuelles et affecter les bonnes personnes aux bons projets."
            document.getElementsByClassName("displayLaterSmall")[8].textContent = "Streamline your team' s experience by giving learners a single username and password to access Pluralsight."
            document.getElementsByClassName("displayLaterSmall")[3].textContent = "Préparez-vous à des certifications professionnelles avec des examens de pratique de pointe."
            document.getElementsByClassName("displayLaterSmall")[4].textContent = "Affichez l'utilisation, les heures consacrées à l'apprentissage et un classement de vos meilleurs membres."
            document.getElementsByClassName("displayLaterSmall")[5].textContent = "Combinez des sections de différents cours ou chemins pour créer un plan d'apprentissage personnalisé aligné sur les objectifs de votre équipe."
            document.getElementsByClassName("displayLaterSmall")[0].textContent = "Développez vos compétences avec plus de 7 000 cours animés par des experts sur des centaines de sujets."
            document.getElementsByClassName("displayLaterSmall")[1].textContent = "Tirez parti de vos compétences en sachant quels cours regarder dans quel ordre, avec des travaux de cours organisés par des experts."
            document.getElementsByClassName("displayLaterSmall")[2].textContent = "Mesurez votre niveau de compétence avec confiance en seulement 20 questions et cinq minutes."
        }
        else if(x.options[x.selectedIndex].value === "German"){
            document.getElementById("pHolder").innerHTML = "<p>Sparen Sie bis zu 30%, wenn Sie sich bei der Schule oder einem Unternehmenskonto anmelden. Wenn nicht, können Sie ein Jahres- oder ein persönliches Premium-Abonnement für 33% Rabatt erhalten!!!</p>";
            document.getElementById("tecGetter").textContent = "Die Technologie-Lernplattform"
            document.getElementsByClassName("smallP")[0].textContent ="Bleiben Sie mit der Technologie auf dem Laufenden, mit von Experten durchgeführten Kursen, Bewertungen und Tools, die Ihnen helfen, die erforderlichen Fähigkeiten aufzubauen, wenn Sie sie benötigen. Erhalten Sie für Unternehmen einen beispiellosen Einblick in die Stärken und Schwächen von Fertigkeiten und richten Sie das Lernen an den wichtigsten Punkten aus.";
            document.getElementById("optDesc").textContent= "Erfolg Beginnt Hier"
            document.getElementsByClassName("forShow")[0].textContent = "Persönlich"
            document.getElementsByClassName("forShow")[1].textContent = "Mannschaft"
            document.getElementsByClassName("forShow")[2].textContent = "Unternehmen"
            document.getElementsByClassName("smallPr")[0].textContent = "Steigern Sie Ihre Fähigkeiten und bringen Sie Ihre Karriere voran"
            document.getElementsByClassName("smallPr")[1].textContent = "Bereiten Sie Ihr Team vor und maximieren Sie Ihre Anstrengungen"
            document.getElementsByClassName("smallPr")[2].textContent = "Messen Sie den Fortschritt in Richtung auf die geschäftlichen Ziele"
            document.getElementsByClassName("displayLater")[0].textContent = "Kursbibliothek"
            document.getElementsByClassName("displayLater")[1].textContent = "Pfade"
            document.getElementsByClassName("displayLater")[2].textContent = "Geschicklichkeitsbewertungen"
            document.getElementsByClassName("displayLater")[3].textContent = "Zertifizierungsprüfungen"
            document.getElementsByClassName("displayLater")[4].textContent = "Nutzungsanalyse"
            document.getElementsByClassName("displayLater")[5].textContent = "Fernsehkanal"
            document.getElementsByClassName("displayLater")[6].textContent = "Erweiterte Kanalanalyse"
            document.getElementsByClassName("displayLater")[7].textContent = "Fortgeschrittene Fähigkeitsanalysen"
            document.getElementsByClassName("displayLater")[8].textContent = "Einmalige Anmeldung"
            document.getElementsByClassName("displayLaterSmall")[6].textContent = "Messen Sie den Fortschritt bei der Erreichung Ihrer Geschäftsziele, indem Sie sicherstellen, dass die Mitarbeiter die zugewiesenen Inhalte und Kurse absolvieren."
            document.getElementsByClassName("displayLaterSmall")[7].textContent = "Sehen Sie sich individuelle Skill-Level und Einblicke auf Themenebene an, um die aktuellen Fähigkeiten zu verstehen und die richtigen Leute für die richtigen Projekte zu finden."
            document.getElementsByClassName("displayLaterSmall")[8].textContent = "Optimieren Sie die Erfahrung Ihres Teams, indem Sie den Lernenden einen einzigen Benutzernamen und ein Kennwort geben, um auf Pluralsight zuzugreifen."
            document.getElementsByClassName("displayLaterSmall")[3].textContent = "Bereiten Sie sich auf professionelle Zertifizierungen mit branchenführenden Übungsprüfungen vor."
            document.getElementsByClassName("displayLaterSmall")[4].textContent = "Zeigen Sie die Nutzung, die Lernstunden und eine Bestenliste Ihrer Top-Mitglieder an."
            document.getElementsByClassName("displayLaterSmall")[5].textContent = "Kombinieren Sie Abschnitte verschiedener Kurse oder Pfade, um einen benutzerdefinierten Lernplan zu erstellen, der auf Ihre Teamziele abgestimmt ist."
            document.getElementsByClassName("displayLaterSmall")[0].textContent = "Entwickeln Sie Ihre Fähigkeiten mit über 7.000 von Experten geführten Kursen zu Hunderten von Themen."
            document.getElementsByClassName("displayLaterSmall")[1].textContent = "Bauen Sie auf Ihren Kenntnissen auf, indem Sie wissen, welche Kurse in welcher Reihenfolge angesehen werden sollen. Die Kursarbeit wird von Experten kuratiert."
            document.getElementsByClassName("displayLaterSmall")[2].textContent = "Messen Sie Ihre Fähigkeiten mit nur 20 Fragen und fünf Minuten mit Zuversicht."

        }
   
    }


    var niz = ["Browse library","Role IQ","Skill IQ","Iris","Paths","Projects","Interactive Courses","Guides","Authors","Mobile apps","Professional Services","Technology Index"];

    for(i=0; i<niz.length;i++){
        document.getElementsByClassName('paragraphContent')[1].innerHTML += "<p>" + niz[i] + "</p>";
    }

    var drugiNiz = ["Investors","Partners","CodeAlignOne.org","Customer stories","Careers","Teach","Blog","Newsroom","CodeAlign engineering","Affiliate program","Subscribe"];

    for(i=0; i<drugiNiz.length;i++){
        document.getElementsByClassName('paragraphContent')[3].innerHTML += "<p>" + niz[i] + "</p>";
    }