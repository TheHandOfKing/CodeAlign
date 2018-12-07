function changeLan(){
    var x = document.getElementById("lnaguageSelector");
    if(x.options[x.selectedIndex].value === "English"){
        document.getElementById("userHelp").innerHTML = "<p>Forgot Password?</p>" + "<p> Sign in with company or school</p>";
        document.getElementById("orChange").textContent = "OR";
        document.getElementById("createAccChange").textContent = "Create an Account";
        document.getElementById("paraChange").textContent = "Copyright © 2018, CodeAlign All Rights Reserved";
        document.getElementById("termsOU").innerHTML = "<a href=\"terms.html\">Terms of Use</a>  <p id=\"ppOlicy\">Privacy Policy</p>";
        document.getElementById("e_mail").textContent = "Email or Username";
        document.getElementById("pw").textContent = "Password";
        document.getElementById("prijava").textContent = "Sign In";
        document.getElementById("desniDeo").innerHTML = "Let's create the future <strong>together</strong>";
        document.getElementById("donjiDesni").textContent = "Start your free 10-day trial!";
    }

 else if(x.options[x.selectedIndex].value === "Serbian_Cyr"){
    document.getElementById("userHelp").innerHTML = "<p>Заборавили сте шифру?</p>" + "<p> Пријавите се помоћу фирме или школе</p>";
    document.getElementById("orChange").textContent = "ИЛИ";
    document.getElementById("createAccChange").textContent = "Направите Налог";
    document.getElementById("paraChange").textContent = "Ауторско право © 2018, CodeAlign сва права су резервисана";
    document.getElementById("termsOU").innerHTML = "<a href=\"terms.html\">Услови коришћења</a>  <p id=\"ppOlicy\">Правила о приватности</p>";
    document.getElementById("e_mail").textContent = "Е-маил или Корисничко име";
    document.getElementById("pw").textContent = "Шифра";
    document.getElementById("prijava").textContent = "Пријавите Се";
    document.getElementById("desniDeo").innerHTML = "Хајде да направимо будућност <strong>заједно</strong>";
    document.getElementById("donjiDesni").textContent = "Започните ваш десетодневни пробни период!";

    }

    else if(x.options[x.selectedIndex].value === "French"){
        document.getElementById("userHelp").innerHTML = "<p>Mot de passe oublié?</p>" + "<p> Connectez-vous avec l'entreprise ou l'école</p>";
        document.getElementById("orChange").textContent = "OU";
        document.getElementById("createAccChange").textContent = "Créer un Compte";
        document.getElementById("paraChange").textContent = "Copyright © 2018, CodeAlign Tous droits réservés.";
        document.getElementById("termsOU").innerHTML = "<a href=\"terms.html\">Conditions D'utilisation</a>  <p id=\"ppOlicy\">Politique de Confidentialité</p>";
        document.getElementById("e_mail").textContent = "E-mail ou Nom D'utilisateur";
        document.getElementById("pw").textContent = "Mot de Passe";
        document.getElementById("prijava").textContent = "Se Connecter";
        document.getElementById("desniDeo").innerHTML = "Créons ensemble l'avenir";
        document.getElementById("donjiDesni").textContent = "Commencez votre essai gratuit de 10 jours!";
    }

        else if(x.options[x.selectedIndex].value === "German"){
            document.getElementById("userHelp").innerHTML = "<a href=\"#\">Passwort vergessen?</a>" + "<p> Melden Sie sich bei Firma oder Schule an</p>";
            document.getElementById("orChange").textContent = "ODER";
            document.getElementById("createAccChange").textContent = "Ein Konto erstellen";
            document.getElementById("paraChange").textContent = "Copyright © 2018, CodeAlign Alle Rechte vorbehalten.";
            document.getElementById("termsOU").innerHTML = "<a href=\"terms.html\">Nutzungsbedingungen</a>  <p id=\"ppOlicy\">Datenschutz-Bestimmungen</p>";
            document.getElementById("e_mail").textContent = "E-Mail Adresse oder Benutzername";
            document.getElementById("pw").textContent = "Passwort";
            document.getElementById("prijava").textContent = "Einloggen";
            document.getElementById("desniDeo").innerHTML = "Lassen Sie uns gemeinsam die Zukunft <strong>gestalten</strong>";
            document.getElementById("donjiDesni").textContent = "Starten Sie Ihre kostenlose 10-Tage-Testversion!";
        }
}
