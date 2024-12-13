import whoweare from "../images/whoweare.jpg";

const AboutSection = () => {
  return (
    <div className="auto-container pt-[70px]">
      <h1 className="text-base uppercase">who we are</h1>
      <section className="flex items-center justify-between bg-white">
        <div className="max-w-[50%]">
          <h2 className="text-3xl font-bold mb-5">
            We are here to make the <br /> your experience{" "}
            <span className="text-[#45a401] italic">best.</span>
          </h2>
          <p className="text-base leading-relaxed mb-5 text-[#1a1e66]">
            We are energetic to perform better, passionate to offset the
            challenges and the hostility to excel ourselves in the flourishing
            innovation.
          </p>
          <p className="text-base leading-relaxed mb-5 text-[#1a1e66]">
            Our team of experts involves the most splendid information. We
            encourage them to amplify their true capability and interest to
            adapt to the latest and trend-setting innovation renditions.
          </p>
          <div className="flex gap-10 mt-5">
            <div className="text-center">
              <h3 className="text-3xl text-[#45a401] font-bold">1235</h3>
              <p className="text-sm font-bold text-gray-800">
                Satisfied Clients
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl text-[#45a401] font-bold">1402+</h3>
              <p className="text-sm font-bold text-gray-800">Completed Works</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl text-[#45a401] font-bold">35</h3>
              <p className="text-sm font-bold text-gray-800">Winning Awards</p>
            </div>
          </div>
        </div>
        <div className="max-w-[50%]">
          <img src={whoweare} alt="team" className="w-full rounded-[30px] shadow-[0_0_40px_rgba(0,0,0,0.4)]" />
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
