import { FC } from "react";
import { Skill } from "../../types";
import { FaCut, FaShower, FaMagic, FaPaw } from "react-icons/fa";
import styled from "styled-components";

const SKILLS: [Skill, FC][] = [
  ["Cut", FaCut],
  ["Trim", FaMagic],
  ["Nails", FaPaw],
  ["Wash", FaShower],
];

const SkillList = styled.div`
  display: flex;
  gap: 0.2em;
`;

function Skills({ skills }: { skills: Skill[] }) {
  return (
    <SkillList>
      {SKILLS.map(([skill, Icon]) => (
        <span
          key={skill}
          style={{ opacity: skills.includes(skill) ? 1 : 0.1 }}
          title={`${skill}: ${skills.includes(skill) ? "yes" : "no"}`}
        >
          <Icon />
        </span>
      ))}
    </SkillList>
  );
}

export default Skills;
