import React from 'react';
import '../styles/pages/WebsiteProjects.scss';

const projectData = [
  {
    studentName: "Alba, John Ernelle Concepcion",
    studentLink: "https://ernellealba.github.io/",
    projects: [
      { name: "Cuppa Joy Milktea", link: "https://ernellealba.github.io/Cuppa-Joy-Milktea/" },
      { name: "9: Anime Connect", link: "https://anime-connect.vercel.app/" },
      { name: "Concert Craft", link: "https://concert-craft.vercel.app/" },
      { name: "Pokedex", link: "https://react--pokedex.vercel.app/" },
      { name: "🔗", link: "https://github.com/ErnelleAlba" },
    ],
  },
  {
    studentName: "Banez, Ederick Salceda",
    studentLink: "https://esbanez.github.io/",
    projects: [
      { name: "Interior Furniture Banez", link: "https://esbanez.github.io/Interior-furniture-Banez/" },
      { name: "9: Anime Connect", link: "https://anime-connect.vercel.app/" },
      { name: "To Do App", link: "https://todo-app-with-react-js.vercel.app/" },
      { name: "Lend Hub", link: "https://lend-hub.vercel.app/" },
      { name: "🔗", link: "https://github.com/ESBanez" },
    ],
  },
  {
    studentName: "Catbagan, Gisel Jean Agang",
    studentLink: "https://giseljeancatbagan.github.io/",
    projects: [
      { name: "Maxsof", link: "https://giseljeancatbagan.github.io/maxsof/" },
      { name: "8: Brainiac Clash", link: "https://brainiac-clash.vercel.app/" },
      { name: "Furfam Finder", link: "https://furfam-finder.vercel.app/" },
      { name: "Travel Blog", link: "https://travel-blog-silk.vercel.app/" },
      { name: "🔗", link: "https://github.com/giseljeancatbagan" },
    ],
  },
  {
    studentName: "Consignado, Dominic Ilano",
    studentLink: "https://nickconsignado.github.io/",
    projects: [
      { name: "Redwall Chinese Cuisine", link: "" },
      { name: "6: Rapid Jobs Board", link: "https://rapid-jobs-board-germany.vercel.app/" },
      { name: "Lend Hub", link: "https://lend-hub.vercel.app/" },
      { name: "Music Player", link: "https://nickconsignado.github.io/my-player/" },
      { name: "🔗", link: "https://github.com/NickConsignado" },   
    ],
  },
  {
    studentName: "Elmido, Kier Miguel Dayawon",
    studentLink: "https://nickconsignado.github.io/",
    projects: [
      { name: "Raked Store Repair Service", link: "" },
      { name: "12: ShopSavvy", link: "https://rapid-jobs-board-germany.vercel.app/" },
      { name: "Concert Craft", link: "https://concert-craft.vercel.app/" },
      { name: " ", link: " " },
      { name: "🔗", link: "https://github.com/kiermiguel2020" },
    ],
  },
  {
    studentName: "Feliciano, Roldan E",
    studentLink: "https://felicianoroldan.github.io/",
    projects: [
      { name: "SteadFastness", link: "https://felicianoroldan.github.io/SteadFastness/" },
      { name: "7: Exploredia", link: "https://exploredia.vercel.app/" },
      { name: "Saving Sense", link: "https://savingsense.vercel.app/" },
      { name: " ", link: " " },
      { name: "🔗", link: "https://github.com/felicianoroldan" },
    ],
  },
  {
    studentName: "Fuentes, Tynneth Jhoel",
    studentLink: "https://tjfuentes.github.io/",
    projects: [
      { name: "Color Hue Prints", link: "https://tjfuentes.github.io/color-hue-prints/" },
      { name: "5: F2P Games", link: "https://f2p-games-rose.vercel.app/" },
      { name: "Meet Kristine V.2", link: "https://meet-kristine-v2.vercel.app/" },
      { name: "Tic-Tac-Toe", link: "https://tjfuentes.github.io/tic-tac-toe/" },
      { name: "🔗", link: "https://github.com/tjfuentes" },
    ],
  },
  {
    studentName: "Gindoy, Gerwin Beley",
    studentLink: "https://gerwinbg.github.io/",
    projects: [
      { name: "Eyog Dental", link: "https://gerwinbg.github.io/eyog-dental/" },
      { name: "3: Global Trivia", link: "https://global-trivia.vercel.app/index.html" },
      { name: "Rent Wise", link: "https://rentwise-sigma.vercel.app/" },
      { name: "To Do List", link: "https://gerwinbg.github.io/to-do-list/" },
      { name: "🔗", link: "https://github.com/GerwinBG" },
    ],
  },
  {
    studentName: "Lynch, Christine Elaine Estolano",
    studentLink: "https://elainelynch.github.io/",
    projects: [
      { name: "Blizzard Tech Services", link: "https://elainelynch.github.io/blizzard-tech-services/" },
      { name: "1: The Linguist", link: "https://thelinguist.vercel.app/" },
      { name: "Saving Sense", link: "https://savingsense.vercel.app/" },
      { name: "", link: "" },
      { name: "🔗", link: "https://github.com/elainelynch" },
    ],
  },
  {
    studentName: "Marin, Matthew Rich Francisco",
    studentLink: "https://matthewmarin.github.io/",
    projects: [
      { name: "CapMedia Creatives", link: "https://matthewmarin.github.io/CapMedia-Creatives/" },
      { name: "2: Cinehub", link: "https://thecinehub.vercel.app/" },
      { name: "Progresia", link: "https://progresia.vercel.app/" },
      { name: "Rock Paper Scissors Game", link: "https://matthewmarin.github.io/Rock-Paper-Scissor/" },
      { name: "🔗", link: "https://github.com/matthewmarin" },
    ],
  },
  {
    studentName: "Ong, Mark Anthony Martirez",
    studentLink: " ",
    projects: [
      { name: "Gourmet Delights", link: "https://ongmarkanthony.github.io/delight-gourmet/" },
      { name: "11: Meet Kristine!", link: "https://meet-kristine.vercel.app/" },
      { name: "Meet Kristine V.2", link: "https://meet-kristine-v2.vercel.app/" },
      { name: "Information Form", link: "" },
      { name: "🔗", link: "https://github.com/ongmarkanthony" },
    ],
  },
  {
    studentName: "Paller, Lymar Paul Alib",
    studentLink: "https://github.com/LymarPaller/LymarPaller.github.io",
    projects: [
      { name: "By.Olivia", link: "https://lymarpaller.github.io/by.olivia/" },
      { name: "4: Kairos", link: "https://kairos-weatherapp.vercel.app/" },
      { name: "Nexus", link: "https://nexus-three-ruddy.vercel.app/login" },
      { name: "Vowel Counter", link: "https://lymarpaller.github.io/vowel.counter/" },
      { name: "🔗", link: "https://github.com/LymarPaller" },
    ],
  },
  {
    studentName: "Perez, Jeimyre Gale Lobingco",
    studentLink: "https://galeperez.github.io/",
    projects: [
      { name: "Aurora Studios", link: "https://galeperez.github.io/aurora-studios/" },
      { name: "5: F2P Games", link: "https://f2p-games-rose.vercel.app/" },
      { name: "Furfam Finder", link: "https://furfam-finder.vercel.app/" },
      { name: "Tic-Tac-Toe", link: "https://galeperez.github.io/tictactoe/" },
      { name: "🔗", link: "https://github.com/GalePerez" },
    ],
  },
  {
    studentName: "Seneres, Mark Dave Sarauso",
    studentLink: "https://markseneres.github.io/",
    projects: [
      { name: "Tasty Bites", link: "https://markseneres.github.io/TastyBites/" },
      { name: "11: Meet Kristine!", link: "https://meet-kristine.vercel.app/" },
      { name: "Lend Hub", link: "https://lend-hub.vercel.app/" },
      { name: " ", link: " " },
      { name: "🔗", link: " " },
    ],
  },
  {
    studentName: "Villamor, Mariya Venturina",
    studentLink: "https://riyavillamor.github.io/",
    projects: [
      { name: "Cuisina", link: "https://riyavillamor.github.io/Cuisina/" },
      { name: "7: Exploredia", link: "https://exploredia.vercel.app/" },
      { name: "Nexus", link: "https://nexus-three-ruddy.vercel.app/login" },
      { name: "Techblazers", link: "https://techblazers.vercel.app/" },
      { name: "🔗", link: "https://github.com/RiyaVillamor" },
    ],
  },
  {
    studentName: "Zapuiz, Ma Nikki Panal",
    studentLink: "https://nikkizapuiz.github.io/",
    projects: [
      { name: "Chasing Umami", link: "https://nikkizapuiz.github.io/Chasing-Umami/" },
      { name: "8: Brainiac Clash", link: "https://brainiac-clash.vercel.app/" },
      { name: "Luxuria", link: "https://synced-cloud.vercel.app/" },
      { name: "Knowledge Check", link: "https://nikkizapuiz.github.io/simpleApp/" },
      { name: "🔗", link: "https://github.com/NikkiZapuiz" },
    ],
  },
];

const WebsiteProjects = () => {
  return (
    <div className="app">
      <div className="website-projects-page">
        <h1>Web projects</h1>
        <table className="class-record">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Mini Project 1</th>
              <th>Mini Project 2</th>
              <th>Mini Project 3</th>
              <th>Other Apps</th>
              <th>Github</th>
            </tr>
          </thead>
          <tbody>
            {projectData.map((student, index) => (
              <tr key={index}>
                <td>
                  <a
                    href={student.studentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {student.studentName}
                  </a>
                </td>
                {student.projects.map((project, i) => (
                  <td key={i}>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-link"></i> {project.name}
                      </a>
                    ) : (
                      ""
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WebsiteProjects;
