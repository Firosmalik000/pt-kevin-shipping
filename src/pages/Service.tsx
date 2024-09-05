const Service = () => {
  const companyHighlights = [
    {
      title: 'Extensive Industry Experience',
      description: 'With over a decade of expertise in marine transport services, we have built a solid foundation in the industry.',
    },
    {
      title: 'Expanding Capabilities',
      description: 'We continuously evolve to meet the diverse and growing needs of our valued customers.',
    },
    {
      title: 'Strong Financial Standing',
      description: 'Our robust financial position allows us to cultivate strong and lasting relationships with our clients.',
    },
    {
      title: 'Dedicated and Skilled Workforce',
      description: 'Our committed team of professionals plays a vital role in driving significant growth and ensuring excellence in service delivery.',
    },
    {
      title: 'Comprehensive Support Services',
      description: 'We are dedicated to providing exceptional support, maintenance, project management, and more to ensure the success of your maritime operations.',
    },
  ];

  return (
    <div>
      <h1>Service</h1>
      <p>Our services include:</p>
      <ul>
        {companyHighlights.map((highlight, index) => (
          <li key={index}>
            <h2>
              {index + 1} - {highlight.title}
            </h2>
            <p>{highlight.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
