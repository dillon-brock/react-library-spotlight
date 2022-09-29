import plants from '../../data/plants.json';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

export default function PlantsTable() {
  return (
    <Table data={plants}>
      <Column width={100}>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={300}>
        <HeaderCell>Common Name</HeaderCell>
        <Cell dataKey="common_name" />
      </Column>

      <Column width={300}>
        <HeaderCell>Family</HeaderCell>
        <Cell dataKey="family" />
      </Column>

      <Column width={300}>
        <HeaderCell>Scientific Name</HeaderCell>
        <Cell dataKey="scientific_name" />
      </Column>
    </Table>
  );
}