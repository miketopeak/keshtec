import java from "../images/java.png";
import react from "../images/react.png";
import azure from "../images/azure.png";
import angular from "../images/angular.jpg";
import net from "../images/net.png";

const VendorSection = () => {
  return (
    <section className="auto-container px-10 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <img
          src={java}
          alt="Java"
          className="w-full h-auto max-w-[150px] object-contain"
        />
        <img
          src={react}
          alt="React"
          className="w-full h-auto max-w-[150px] object-contain"
        />
        <img
          src={azure}
          alt="Microsoft Azure"
          className="w-full h-auto max-w-[150px] object-contain"
        />
        <img
          src={angular}
          alt="AngularJS"
          className="w-full h-auto max-w-[150px] object-contain"
        />
        <img
          src={net}
          alt="C#"
          className="w-full h-auto max-w-[150px] object-contain"
        />
      </div>
    </section>
  );
};

export default VendorSection;
