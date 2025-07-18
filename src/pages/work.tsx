import { careerHighlights } from "@/data/home-data"

function ContentBulletBlock({ title, bodyText, subTitle = "" }: { title: string; bodyText: Record<string, string>, subTitle?: string }) {
  const bulletedList = Object.entries(bodyText).map(([key, value]) => (
    <li key={key}>
      <div className="bullet-item">{value}</div>
    </li>
  ));
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
      <div>
        <h2>Work History:</h2>
        <ul>
          <li>
            {Object.entries(careerHighlights).map(([key, value]) => (
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