import { VictoryChart, VictoryAxis, VictoryBar } from 'victory';

const data = [
  { race: 'White', percent: 1.3 },
  { race: 'Black', percent: 1.4 },
  { race: 'Asian', percent: 1.0 },
  { race: 'AIAN', percent: 1.8 },
  { race: 'Latinx', percent: 1.8 },
  { race: 'other', percent: 1.5 }
];

export default function GenderChart() {
  return (
    <VictoryChart
      domainPadding={20}
    >
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5, 6]}
        tickFormat={['White', 'Black', 'Asian', 'AIAN', 'Latinx', 'Other']}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(x) => (`${x}%`)}
      />
      <VictoryBar
        data={data}
        x="race"
        y="percent"
      />
    </VictoryChart>
  );
}