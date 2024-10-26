"use client"

import Image from "next/image";
import "./page.css";
import Header from "./header";
import Category from "./category"

const CATEGORIES = [
  {
    title: "Because you watched The Boy and the Heron",
    movies: [
      {
        id: 1,
        title: "Deadpool & Wolverine",
        imageUrl: "img/movies/deadpool-wolverine.jpg"
      },
      {
        id: 2,
        title: "Beetlejuice",
        imageUrl: "img/movies/beetlejuice-beetlejuice.jpg"
      },
      {
        id: 3,
        title: "Despicable Me 4",
        imageUrl: "img/movies/despicable-me-4.jpg"
      },
      {
        id: 4,
        title: "The Substance",
        imageUrl: "img/movies/the-substance.jpg"
      },
      {
        id: 5,
        title: "Transformers Mech Beasts",
        imageUrl: "img/movies/transformers-mech-beasts.jpg"
      },
      {
        id: 6,
        title: "El Hoyo 2",
        imageUrl: "img/movies/el-hoyo-2.jpg"
      },
      {
        id: 7,
        title: "Inside Out 2",
        imageUrl: "img/movies/inside-out-2.jpg"
      },
      {
        id: 8,
        title: "The Wild Robot",
        imageUrl: "img/movies/the-wild-robot.jpg"
      },
      {
        id: 9,
        title: "The Crow",
        imageUrl: "img/movies/the-crow.jpg"
      },
      {
        id: 10,
        title: "Speak No Evil",
        imageUrl: "img/movies/speak-no-evil.jpg"
      },
      {
        id: 11,
        title: "Joker Folie A Deux",
        imageUrl: "img/movies/joker-folie-a-deux.jpg"
      },
      {
        id: 12,
        title: "Alien Romulus",
        imageUrl: "img/movies/alien-romulus.jpg"
      }
    ]
  },
  {
    title: "Because you like the superheroes movies",
    movies: [
      {
        id: 1,
        title: "Deadpool & Wolverine",
        imageUrl: "img/movies/deadpool-wolverine.jpg"
      },
      {
        id: 2,
        title: "Beetlejuice",
        imageUrl: "img/movies/beetlejuice-beetlejuice.jpg"
      },
      {
        id: 3,
        title: "Despicable Me 4",
        imageUrl: "img/movies/despicable-me-4.jpg"
      },
      {
        id: 4,
        title: "The Substance",
        imageUrl: "img/movies/the-substance.jpg"
      },
      {
        id: 5,
        title: "Transformers Mech Beasts",
        imageUrl: "img/movies/transformers-mech-beasts.jpg"
      },
      {
        id: 6,
        title: "El Hoyo 2",
        imageUrl: "img/movies/el-hoyo-2.jpg"
      },
      {
        id: 7,
        title: "Inside Out 2",
        imageUrl: "img/movies/inside-out-2.jpg"
      },
      {
        id: 8,
        title: "The Wild Robot",
        imageUrl: "img/movies/the-wild-robot.jpg"
      },
      {
        id: 9,
        title: "The Crow",
        imageUrl: "img/movies/the-crow.jpg"
      },
      {
        id: 10,
        title: "Speak No Evil",
        imageUrl: "img/movies/speak-no-evil.jpg"
      },
      {
        id: 11,
        title: "Joker Folie A Deux",
        imageUrl: "img/movies/joker-folie-a-deux.jpg"
      },
      {
        id: 12,
        title: "Alien Romulus",
        imageUrl: "img/movies/alien-romulus.jpg"
      }
    ]
  }
]

export default function Home() {
  return (
    <>
      <Header></Header>

      <section className="categories">
        <div>
          {CATEGORIES.map((category, index) => <Category key={index} data={category} onMovieSelected={(movie) => console.log('movie clicked', movie)}></Category>)}
        </div>
      </section>
    </>
  );
}
