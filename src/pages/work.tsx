import TextBlock from "@/components/textBlock";

export default function Work() {
  return (
    <div className="main-accent">
      <h1>Work History</h1>
      <ul>
        <li>
          <TextBlock
            title="Qualtrics "
            bodyText=""
          />
        </li>
        <li>
          <TextBlock
            title="Slalom"
            bodyText=""
          />
        </li>
        <li>
          <TextBlock
            title="Code Fellows"
            bodyText=""
          />
        </li>
        <li>
          <TextBlock
            title="Portland Public Schools"
            bodyText=""
          />
        </li>
      </ul>

      <h1>Education</h1>
      <ul>
        <li>
          <TextBlock
            title="Code Fellows | FullStack JavaScript | 2019"
            bodyText=""
          />
        </li>
        <li>
          <TextBlock
            title="Lewis & Clark Graduate School of Education | 2016"
            bodyText=""
          />
        </li>
        <li>
          <TextBlock
            title="Western Washington University | 2013"
            bodyText=""
          />
        </li>
      </ul>
    </div>
  );
}