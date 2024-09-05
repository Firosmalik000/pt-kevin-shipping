const Fleet = () => {
  return (
    <div className="w-full py-16 px-8 bg-gray-50">
      <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">Our Fleet</h1>

      <div className="max-w-3xl mx-auto text-center bg-white shadow-lg rounded-lg p-8">
        <p className="text-lg text-gray-700 mb-8">
          PT Kevin Shipping boasts a modern and well-maintained fleet of barges and tugboats. Our vessels are equipped with the latest technology and safety features to ensure efficient and reliable operations. Here is a glimpse of our
          fleet:
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tugboats</h2>
          <ul className="list-disc list-inside text-left text-gray-700">
            <li>TB.PRIMA RAJAWALI 777</li>
            <li>TB.PRIMA RAJAWALI 888</li>
            <li>TB.ADHI 1</li>
            <li>TB.ADHI 2</li>
            <li>TB.ADHI 3</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Barges</h2>
          <ul className="list-disc list-inside text-left text-gray-700">
            <li>BG.MANDIRI ANGGREK</li>
            <li>BG.MANDIRI AZALEA</li>
            <li>BG.INTERNUSA 1</li>
            <li>BG.INTERNUSA 2</li>
            <li>BG.INTERNUSA 3</li>
          </ul>
        </div>

        <p className="text-lg text-gray-700">
          For detailed specifications of each vessel, please{' '}
          <a href="mailto:Kevinshipping89@gmail.com" className="text-blue-600 underline">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Fleet;
