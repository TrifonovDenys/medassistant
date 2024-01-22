import { useRouter } from 'next/router';

const EducationalClassDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch data based on the id parameter
console.log(id);
  return (
    <div>
      <h1>Educational Class Details</h1>
      <p>Class ID: {id}</p>
      {/* Render other details based on the fetched data */}
    </div>
  );
};

export default EducationalClassDetail;