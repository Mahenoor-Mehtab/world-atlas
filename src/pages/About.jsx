import country from "../api/countryData.json"

const About = () => {
  return (
    <section className="section-about container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Here are the Interesting Facts <br /> we're proud of
      </h2>

      <div className="gradient-card flex flex-wrap gap-6 justify-center">
        {country.map((curCountry) => {
          const { id, countryName, capital, population, interestingFact } = curCountry;

          return (
            <div key={id} className="card w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
              <div className="container-card bg-blue-200 p-6 rounded-lg shadow-md">
                <ul className="space-y-2">
                  <li>
                    <p className="text-xl font-semibold">{countryName}</p>
                  </li>
                  <li>
                    <span className="font-medium">Capital:</span> {capital}
                  </li>
                  <li>
                    <span className="font-medium">Population:</span> {population}
                  </li>
                  <li>
                    <span className="font-medium">Interesting Facts:</span> {interestingFact}
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;