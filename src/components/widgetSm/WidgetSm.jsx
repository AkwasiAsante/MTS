import './widgetSm.css';
import {
  Person,
  FolderOpen,
  FileCopy,
  Description,
  InsertDriveFile,
} from '@material-ui/icons';

export default function WidgetSm({
  buduStats,
  kasoaStats,
  othersStats,
  maleStats,
  femaleStats,
}) {
  return (
    <div className='widgetSm'>
      <p className='widgetSmTitle'>Statistics</p>
      <div className='gender-con'>
        <div className='gender'>
          <div className='genTitle'>
            <p>Total Male</p>
          </div>
          <div className='icon-val'>
            <Person className='gen-icon' />
            <h2>{maleStats}</h2>
          </div>
        </div>

        <div className='gender'>
          <div className='genTitle'>
            <p>Total Female</p>
          </div>
          <div className='icon-val'>
            <Person className='gen-icon' />
            <h2>{femaleStats}</h2>
          </div>
        </div>
      </div>

      <div className='gender-con'>
        <div className='gender'>
          <div className='genTitle'>
            <p>Districts</p>
          </div>
          <div className='icon-val'>
            <Description className='gen-icon' />
            <h2>2</h2>
          </div>
        </div>
        {/* <div className='vl'></div> */}
        <div className='gender'>
          <div className='genTitle'>
            <p>Buduburam</p>
          </div>
          <div className='icon-val'>
            <FolderOpen className='gen-icon' />
            <h2>{buduStats}</h2>
          </div>
        </div>
      </div>

      <div className='gender-con'>
        <div className='gender'>
          <div className='genTitle'>
            <p>Kasoa West</p>
          </div>
          <div className='icon-val'>
            <InsertDriveFile className='gen-icon' />
            <h2>{kasoaStats}</h2>
          </div>
        </div>
        {/* <div className='vl'></div> */}
        <div className='gender'>
          <div className='genTitle'>
            <p>Others</p>
          </div>
          <div className='icon-val'>
            <FileCopy className='gen-icon' />
            <h2>{othersStats}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
