import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { MdWebAsset } from "react-icons/md";

export const experiences = [
  {
    title: "title_1",
    location: "Recife, PR",
    description: "description_1",
    icon: React.createElement(RiComputerLine),

    date: "2016 - 2020",
  },
  {
    title: "title_2",
    location: "Brasilia, BR",
    description: "description_2",
    icon: React.createElement(MdWebAsset),

    date: "2020 - 2021",
  },
  {
    title: "title_3",
    location: "Brasilia, BR",
    description: "description_3",
    icon: React.createElement(FaReact),

    date: "2022 - present",
  },
] as const;



export const career_timeline_buzzvel = [
  {
    title: "title_header_1",
    icon: React.createElement(FaReact),
    icon_2: "",
    description_title: ["title_1", "title_2", "title_3"],
    description: [
      "description_1",
      "description_2",
      "description_3",
      
    ],
    date: "date_1",
  },
  {
    title: "title_2",
    icon: "",
    icon_2: React.createElement(FaReact),
    description_title: ["title_4", "title_5", "title_6"],
    description: [
      "description_4",
      "description_5",
      "description_6",
      
    ],
    date: "date_2",
  },
  {
    title: "title_3",
    icon: React.createElement(FaReact),
    icon_2: "",
    description_title: ["title_7", "title_8", "title_9"],
    description: [
      "description_7",
      "description_8",
      "description_9",
      
    ],
    date: "date_3",
  },
] as const;
