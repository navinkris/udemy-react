import { useParams } from 'react-router-dom';

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Event Detail Page</h1>
      <p>Event ID: {params.eventId}</p>
    </>
  )
}

export default EventDetailPage;