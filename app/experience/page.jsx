"use client";
import "../globals.css";
import Card from "../components/Card";
import AnaglyphText from "../components/AnaglyphText";

export default function ExperiencePage() {
  // On garde l’ordre original des 6 compétences,
  // mais on remplace les "files" par ceux vus sur le screen, soigneusement renommés.

  const competences = [
    /* 1) Gérer le patrimoine informatique => 6 derniers doc du screen */
    {
      title: "Gérer le patrimoine informatique",
      files: [
        {
          fileName: "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique (2).pdf",
          fileUrl: "Exploiter_référentiels_normes_standards.pdf",
        },
        {
          fileName: "Vérifier le respect des règles d’utilisation des ressources numériques (2).pdf",
          fileUrl: "Vérifier%20le%20respect%20des%20règles%20d’utilisation%20des%20ressources%20numériques%20(2).pdf",
        },
        {
          fileName: "Recenser et identifier les ressources numériques Preuve concrete.pdf",
          fileUrl: "Recenser%20et%20identifier%20les%20ressources%20numériques%20Preuve%20concrete.pdf",
        },
        {
          fileName: "Mettre en place et vérifier les niveaux d’habilitation associées à un service (2).pdf",
          fileUrl: "habilserv.pdf",
        },
        {
          fileName: "Clonage disque dur (1).pdf",
          fileUrl: "clonage_disque.pdf",
        },
        {
          fileName: "conditionDeContinuité.pdf",
          fileUrl: "conditionDeContinuité.pdf",
        },
      ],
    },

    /* 2) Répondre aux incidents => 4 docs */
    {
      title: "Répondre, Assister, Faire évoluer",
      files: [
        {
          fileName: "Répondre aux incidents _Collecter, suivre et orienter les demandes (1).pdf",
          fileUrl: "orienterdem.pdf",
        },
        {
          fileName: "Répondre aux incidents _Traiter des demandes concernant les applications (2).pdf",
          fileUrl: "concernant_app.pdf",
        },
        {
          fileName: "Répondre aux incidents _Traiter des demandes concernant les services réseau et système, applicatifs (3).pdf",
          fileUrl: "applicatif.pdf",
        },
        {
          fileName: "Collecter, suivre et orienter les demandes (2).pdf",
          fileUrl: "collec_demandes.pdf",
        },
      ],
    },

    /* 3) Développer la présence en ligne => 3 docs */
    {
      title: "Développer la présence en ligne de l'organisation",
      files: [
        {
          fileName: "Participer à la valorisation de l’image de l’organisation (2).pdf",
          fileUrl: "Participer_à_valorisation.pdf",
        },
        {
          fileName: "Référencer les services en ligne et mesurer leur visibilité (3).pdf",
          fileUrl: "référencer_services_en_ligne.pdf",
        },
        {
          fileName: "Développer la présence en ligne _Participer à l’évolution d’un site Web (1).pdf",
          fileUrl: "presence_en_ligne.pdf",
        },
      ],
    },

    /* 4) Mettre à disposition des utilisateurs un service => 3 docs */
    {
      title: "Mettre à disposition des utilisateurs un service informatique",
      files: [
        {
          fileName: "Déployer un service (2).pdf",
          fileUrl: "madsi_deployer.pdf",
        },
        {
          fileName: "Réaliser les tests d’intégration et d’acceptation d’un service (2).pdf",
          fileUrl: "madsi_acceptation.pdf",
        },
        {
          fileName: "Accompagner les utilisateurs dans la mise en place d’un service (1).pdf",
          fileUrl: "madsi_miseplace.pdf",
        },
      ],
    },

    /* 5) Travailler en mode projet => juste un lien Trello */
    {
      title: "Travailler en mode projet",
      files: [
        {
          fileName: "Lien Trello POUR GESTION DE PROJET INFORMATIQUE",
          fileUrl: "https://trello.com/w/espacedetravailuser60172302/home",
        },
        {
          fileName: "TRELLO",
          fileUrl: "",
        },
      ]
    },

    /* 6) Organiser son développement professionnel => 2 docs (top du screen) */
    {
      title: "Organiser son développement professionnel",
      files: [
        {
          fileName: "MALIK DANIAL (4).pdf",
          fileUrl: "MALIK%20DANIAL%20(4).pdf",
        },
        {
          fileName: "PARCOURS DE CERTIFICATION.pptx.pdf",
          fileUrl: "PARCOURS%20DE%20CERTIFICATION.pptx.pdf",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen text-white p-4 bg-black">
      <div className="relative top-[30vh] max-w-[90vw] h-[40vh] z-10 mx-auto">
        <div className="text-center mb-16 scale-[110%]">
          <AnaglyphText>Compétences BTS SIO</AnaglyphText>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-2 justify-between pb-4">
          {competences.map((competence, index) => (
            <div
              key={index}
              className="w-full lg:w-1/6 min-w-[200px] flex-shrink-0"
            >
              <Card title={competence.title} files={competence.files} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
