export interface EventItemType {
  image: string;
  title: string;
  date: string;
  description: string;
  map: string;
  price: string;
  id: number;
}

const events: EventItemType[] = [
  {
    image: "/event/event1.jpeg",
    title:
      "Designing for Success: UI/UX Freelance and the Business Landscape (2023)",
    date: "05 Agustus 2023",
    description: "Surabaya Dev Tech Community Revolution!",
    map: "Offline Event",
    price: "Gratis",
    id: 1,
  },

  {
    image: "/event/event2.jpeg",
    title:
      "Breaking the Barrier: Unleashing the Power of Frontend & FullStack Web Dev",
    date: "24 Juni 2023",
    description:
      "Bersiap untuk hadir di SurabayaDev Offline Meetup! Breaking the Barrier: Unleashing the Power of Frontend and FullStack Web Development",
    map: "Offline Event",
    price: "Gratis",
    id: 2,
  },

  {
    image: "/event/event3.jpeg",
    title: "Web Automation Testing with Puppeteer",
    date: "01 April 2023",
    description:
      "Learn the basics of web automation testing using Puppeteer, an open-source Node library, in this webinar. Boost your testing efficiency!",
    map: "Offline Event",
    price: "Gratis",
    id: 3,
  },

  {
    image: "/event/event4.jpeg",
    title: "QA Career Preparation | MQA x SurabayaDev",
    date: "25 Februari 2023",
    description:
      "Mempersiapkan untuk menjadi sebagai seorang Quality Assurance",
    map: "Offline Event",
    price: "Gratis",
    id: 4,
  },

  {
    image: "/event/event5.jpeg",
    title: "Front End Web Development with React JS | PatriaDev x SurabayaDev",
    date: "17 Desember 2022",
    description:
      "Mengetahui bagaimana kerja seorang front end dev dalam proses web development menggunakan library javascript React JS",
    map: "Offline Event",
    price: "Gratis",
    id: 5,
  },

  {
    image: "/event/event6.jpeg",
    title: "Evaluating User Experience to Build Better Products",
    date: "27 November 2022",
    description:
      "Heuristic Usability merupakan Metode untuk menganalisa agar memberikan kemudahan dalam penggunaan.",
    map: "Offline Event",
    price: "Gratis",
    id: 6,
  },

  {
    image: "/event/event7.jpeg",
    title: "Memulai Karir sebagai Product Manager",
    date: "29 Oktober 2022",
    description: 'Meet Up Surabaya dev "Memulai Karir sebagai Product Manager"',
    map: "Offline Event",
    price: "Gratis",
    id: 7,
  },
];

export default events;