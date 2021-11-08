import './widgetLg.css';
import Pathfinder from '../../assets/pathfinder.jpg';
import Ad from '../../assets/ad.png';
import Mg from '../../assets/mg.png';

export default function WidgetLg({ lastJoined }) {
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>New Join Members</h3>
      <table className='widgetLgTable'>
        <thead>
          <tr className='widgetLgLt'>
            <th className='widgetLgTh'>Full Name</th>
            <th className='widgetLgTh'>Gender</th>
            <th className='widgetLgTh'>Class</th>
            <th className='widgetLgTh'>Date</th>
          </tr>
        </thead>
        <tbody>
          {lastJoined.map((data) => (
            <tr className='widgetLgLt' key={data._id}>
              <td className='widgetLgUser'>
                <img
                  className='widgetLgImg'
                  src={
                    data.ayclass === 'Pathfinder'
                      ? Pathfinder
                      : data.ayclass === 'Adventurer'
                      ? Ad
                      : Mg
                  }
                  // src={Ad}
                  alt=''
                />
                <p className='widgetLgName'>{data.fname + ' ' + data.lname}</p>
              </td>
              <td className='widgetLgGender'>{data.gender}</td>
              <td className='widgetLgClass'>{data.ayclass}</td>
              <td className='widgetLgDate'>{data.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
