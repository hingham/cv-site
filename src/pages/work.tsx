import TextBlock from "@/components/textBlock";

export default function Work() {
  return (
    <div className="main-accent">
      <h1>Work History</h1>
      <ul>
        <li>
          <TextBlock
            title="Qualtrics "
            body=""
          />
        </li>
        <li>
          <TextBlock
            title="Slalom"
            body=""
          />
        </li>
        <li>
          <TextBlock
            title="Code Fellows"
            body=""
          />
        </li>
        <li>
          <TextBlock
            title="Portland Public Schools"
            body=""
          />
        </li>
      </ul>

      <h1>Education</h1>
      <ul>
        <li>
          <TextBlock
            title="Code Fellows | FullStack JavaScript | 2019"
            body=""
          />
        </li>
        <li>
          <TextBlock
            title="Lewis & Clark Graduate School of Education | 2016"
            body=""
          />
        </li>
        <li>
          <TextBlock
            title="Western Washington University | 2013"
            body=""
          />
        </li>
      </ul>
    </div>
  );
}