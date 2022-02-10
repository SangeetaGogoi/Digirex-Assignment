export default function Card({ record }) {
  return (
    <div className='card'>
      <p>
        <b>Name</b> : {record.Name}
      </p>
      <p>
        <b>Disease</b> : {record.Disease}{' '}
      </p>
      <p>
        <b>Affected From</b> : {record.To}
      </p>
      <p>
        <b>Recovery Date</b> : {record.From}{' '}
      </p>
    </div>
  );
}
