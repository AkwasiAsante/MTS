import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from '@material-ui/core';
import './genderstat.css';

export default function GenderStat({ sM, sF, pM, pF, aM, aF }) {
  return (
    <div className='genTable'>
      <h4>Gender Statistics</h4>

      <Table>
        <TableHead>
          <TableRow
            style={{
              backgroundColor: 'rgb(251, 251, 255)',
            }}
          >
            <TableCell>CLUB</TableCell>
            <TableCell>MALE</TableCell>
            <TableCell>FEMALE</TableCell>
            <TableCell>TOTAL</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>SENIOR YOUTH</TableCell>
            <TableCell>{sM}</TableCell>
            <TableCell>{sF}</TableCell>
            <TableCell>{sM + sF}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>PATHFINDER</TableCell>
            <TableCell>{pM}</TableCell>
            <TableCell>{pF}</TableCell>
            <TableCell>{pM + pF}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ADVENTURER</TableCell>
            <TableCell>{aM}</TableCell>
            <TableCell>{aF}</TableCell>
            <TableCell>{aM + aF}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontSize: 14, fontWeight: 600 }}>
              TOTAL
            </TableCell>
            <TableCell style={{ fontSize: 14, fontWeight: 600 }}>
              {sM + pM + aM}
            </TableCell>
            <TableCell style={{ fontSize: 14, fontWeight: 600 }}>
              {sF + pF + aF}
            </TableCell>
            <TableCell style={{ fontSize: 14, fontWeight: 600 }}>
              {sM + pM + aM + sF + pF + aF}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

// export default GenderStat;
