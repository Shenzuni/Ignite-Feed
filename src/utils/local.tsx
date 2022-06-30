export const postsMock = [
  {
    id: 0,
    author: {
      name: "Shenzuni",
      description: "React & Node",
      img: "https://github.com/shenzuni.png",
    },
    content: [
      { type: "paragraph", text: `Fala galeraa 👋` },

      {
        type: "paragraph",
        text: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no
      NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
      },

      { type: "anchor", text: "https://jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-29 12:31:00"),
  },
  {
    id: 1,
    author: {
      name: "Shenzuni",
      description: "React & Node",
      img: "https://github.com/shenzuni.png",
    },
    content: [
      { type: "paragraph", text: `Fala galeraa 👋` },

      {
        type: "paragraph",
        text: `Test 🚀`,
      },

      { type: "anchor", text: "https://github.com/shenzuni" },
    ],
    publishedAt: new Date("2022-02-29 12:31:00"),
  },
]

export const commentsMock = [
  {
    id: 0,
    author: { name: "Shenzuni", img: "https://github.com/shenzuni.png" },
    content: `Fala galeraa 👋`,
    publishedAt: new Date("2022-06-29 12:31:00"),
  },
]
