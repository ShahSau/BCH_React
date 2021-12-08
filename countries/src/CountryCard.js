import React from "react";
import number from "easy-number-formatter";
import { Link } from "react-router-dom";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";

const CountryCard = ({
  name,
  capital,
  languages,
  currencies,
  population,
  flags,
}) => {
  return (
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card text-center">
        <img class="card-img-top Cimg" src={flags.png} alt={name} />
        <h5 class="card-title  mt-3 mb-3 title">{name}</h5>
        <p class="card-text text">
          <IoLanguageSharp color="white" size="20px" />
          &nbsp;
          {languages.map((lang, i) => (
            <span key={i}> {lang.name} </span>
          ))}
        </p>
        <p class="card-text text">
          <MdOutlineAttachMoney color="white" size="20px" />
          &nbsp;
          {currencies.map((mon, i) => (
            <span key={i}>
              {mon.name} - {mon.symbol}
            </span>
          ))}
        </p>
        <p className="pop">
          <BsPeopleFill color="white" size="20px" />
          &nbsp;
          <span>{number.formatNumber(population)}</span>
        </p>
        <Link to={capital} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
