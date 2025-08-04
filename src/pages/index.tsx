import TextBlock from "@/components/textBlock";
import Image from "next/image";
import { profileData, careerHighlights, seekingOpportunities } from "@/data/home-data"
import Link from "next/link";

function ContentBulletBlock({ title, bodyText, subTitle = "" }: { title: string; bodyText?: Record<string, string>, subTitle?: string }) {
  const bulletedList = bodyText ? Object.entries(bodyText).map(([key, value]) => (
    <li key={key}>
      <div className="bullet-item">{value}</div>
    </li>
  )) : null;
  return (
    <div className="text-block">
      <h3>{title}</h3>
      {subTitle.length > 0 ? <h4 style={{ marginBottom: "1em" }}>{subTitle}</h4> : null}
      <ul>
        {bulletedList}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div className="main-accent">
      <h2>About Me:</h2>
      <Image
        src="/cv_site_profile.jpg"
        alt="Profile Picture"
        width={200}
        height={200}
        className="profile-image"
      />
      <TextBlock
        title=""
        bodyText={
          <>
            Former mathematics educator turned software engineer with 4 years delivering full‑stack
            solutions in React, TypeScript, Node.js, and AWS. Recognized for translating complex problems
            into elegant code, mentoring junior developers, fixing baffling bugs, and pushing for and producing clear documentation. Following a
            planned family sabbatical (2023–2025) during which I continued freelancing and open‑source
            contributions, I’m ready to re‑enter the workforce full‑time. Find my{" "}
            <a
              href="https://docs.google.com/document/d/10jE9WHLiiqeNZRtO5dWSViOHDJcGtnT7csu8kLpuCek/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>{" "}
            here.
          </>}
      />
      <div>
        <h2><Link href="/work">Career Highlights:</Link></h2>
        <ul>
          <li>
            {Object.entries(careerHighlights).map(([key, value]) => (
              <ContentBulletBlock
                key={key}
                title={value.title}
                subTitle={value.subTitle}
              />
            ))}
          </li>
        </ul>
        <h2>Toolkit & Education</h2>
        <ul>
          <li>
            {Object.entries(profileData).map(([key, value]) => (
              <ContentBulletBlock
                key={key}
                title={value.title}
                bodyText={value.bullets}
                subTitle={value.subTitle}
              />
            ))}
          </li>
        </ul>
        <h2>What&apos;s Next</h2>
        <ul>
          <li>
            {Object.entries(seekingOpportunities).map(([key, value]) => (
              <ContentBulletBlock
                key={key}
                title={value.title}
                bodyText={value.bullets}
                subTitle={value.subTitle}
              />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}