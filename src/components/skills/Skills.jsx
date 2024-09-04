import React from "react";
import Title from "../../layouts/Title";
import Card from "./Card";

import { SiAlwaysdata, SiCoreldraw } from "react-icons/si";

import { MdDraw } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { TbMathSymbols } from "react-icons/tb";
import { IoArrowRedoSharp } from "react-icons/io5";

const Skills = () => {
  const cards = [
    {
      id: 1,
      title: "Data Analyst",
      des: " Skilled data analyst proficient in Excel, Python, Google Colab, and SPSS, adept at transforming data into actionable insights through advanced analysis and visualization techniques.",
      icon: <SiAlwaysdata size={50} />,
      icon2: (
        <a href="https://onlinestatbook.com/2/calculators/normal_dist.html">
          <IoArrowRedoSharp size={25} />
        </a>
      ),
    },
    {
      id: 2,
      title: "Web Developer",
      des: "Proficient in React.Js Framework, Tailwind CSS Framework. Additionally am well versed in JavaScript, HTML, CSS, Python, PHP, MySQL and Java.",
      icon: <SiAlwaysdata size={50} />,
      icon2: <IoArrowRedoSharp size={25} />,
    },
    {
      id: 3,
      title: "Artist",
      des: "I'm a multifaceted artist known for evocative paintings, insightful art critiques, and detailed writings on art history, offering profound perspectives on artistic techniques and historical contexts.",
      icon: <MdDraw size={50} />,
      icon2: <IoArrowRedoSharp size={25} />,
    },
    {
      id: 4,
      title: "Graphics Designer",
      des: " Specializing in creating visually compelling designs. Proficient in CorelDRAW and other industry-standard software, they excel in branding, illustration, and digital media, delivering impactful visual solutions",
      icon: <SiCoreldraw size={50} />,
      icon2: <IoArrowRedoSharp size={25} />,
    },
    {
      id: 5,
      title: "Content Writer",
      des: " Skilled content writer specializing in art and history. I create engaging and well-researched articles, essays, and critiques that bring cultural and historical contexts to life for readers",
      icon: <TfiWrite size={50} />,
      icon2: <IoArrowRedoSharp size={25} />,
    },
    {
      id: 6,
      title: "Mathematician",
      des: "Expert in applied mathematics and statistics. Open to solving complex problems, conducting statistical analyses, and applying mathematical principles to real-world scenarios.",
      icon: <TbMathSymbols size={50} />,
      icon2: <IoArrowRedoSharp size={25} />,
    },
  ];
  return (
    <section
      id="skills"
      className="w-full py-10 px-10 border-b-[1px]  border-b-gray-600 mx-2"
    >
      <Title title="Skills" des="What I Do" />
      <div className=" flex flex-col m-auto gap-8 sm:grid grid-cols-2 lg:grid-cols-3 ">
        {cards.map(({ id, title, icon, des, icon2 }) => (
          <Card key={id} title={title} des={des} icon={icon} icon2={icon2} />
        ))}
        {/* <Card
          title="Data Analyst"
          des=" Skilled data analyst proficient in Excel, Python, Google Colab, and SPSS, adept at transforming data into actionable insights through advanced analysis and visualization techniques."
          icon={<SiAlwaysdata size={50} />}
        />
        <Card
          title="Web Developer"
          des="Proficient in React.Js Framework, Tailwind CSS Framework. Additionally am well versed in JavaScript, HTML, CSS, Python, PHP, MySQL and Java."
          icon={<CgWebsite size={50} />}
        />
        <Card
          title="Artist"
          des="I'm a multifaceted artist known for evocative paintings, insightful art critiques, and detailed writings on art history, offering profound perspectives on artistic techniques and historical contexts."
          icon={<MdDraw size={50} />}
        />
        <Card
          title="Graphics Designer"
          des=" Specializing in creating visually compelling designs. Proficient in CorelDRAW and other industry-standard software, they excel in branding, illustration, and digital media, delivering impactful visual solutions"
          icon={<SiCoreldraw size={50} />}
        />
        <Card
          title="Content Writer"
          des=" Skilled content writer specializing in art and history. I create engaging and well-researched articles, essays, and critiques that bring cultural and historical contexts to life for readers"
          icon={<TfiWrite size={50} />}
        />
        <Card
          title="Mathematician"
          des="Expert in applied mathematics and statistics. Open to solving complex problems, conducting statistical analyses, and applying mathematical principles to real-world scenarios."
          icon={<TbMathSymbols size={50} />}
        /> */}
      </div>
    </section>
  );
};

export default Skills;
