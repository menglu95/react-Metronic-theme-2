import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

// falgs
import usFlag from "../../../assets/images/flags/us.jpg";
import spain from "../../../assets/images/flags/spain.jpg";
import germany from "../../../assets/images/flags/germany.jpg";
import italy from "../../../assets/images/flags/italy.jpg";
import russia from "../../../assets/images/flags/russia.jpg";

const LanguageDropdown = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);
  const [flag] = useState(usFlag);
  const [lng] = useState("English");

  function changeLanguageAction(lng) {}

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle className="btn header-item waves-effect" tag="button">
          <img src={flag} alt="Skote" height="16" className="mr-1" />
          <span className="align-middle">{lng}</span>
        </DropdownToggle>
        <DropdownMenu className="language-switch" right>
          <DropdownItem
            tag="a"
            href="#"
            onClick={() => changeLanguageAction("eng")}
            className="notify-item"
          >
            <img src={usFlag} alt="Skote" className="mr-1" height="12" />
            <span className="align-middle">English</span>
          </DropdownItem>
          <DropdownItem
            tag="a"
            href="#"
            onClick={() => changeLanguageAction("sp")}
            className="notify-item"
          >
            <img src={spain} alt="Skote" className="mr-1" height="12" />
            <span className="align-middle">Spanish</span>
          </DropdownItem>
          <DropdownItem
            tag="a"
            href="#"
            onClick={() => changeLanguageAction("gr")}
            className="notify-item"
          >
            <img src={germany} alt="Skote" className="mr-1" height="12" />
            <span className="align-middle">German</span>
          </DropdownItem>
          <DropdownItem
            tag="a"
            href="#"
            onClick={() => changeLanguageAction("it")}
            className="notify-item"
          >
            <img src={italy} alt="Skote" className="mr-1" height="12" />
            <span className="align-middle">Italian</span>
          </DropdownItem>
          <DropdownItem
            tag="a"
            href="#"
            onClick={() => changeLanguageAction("rs")}
            className="notify-item"
          >
            <img src={russia} alt="Skote" className="mr-1" height="12" />
            <span className="align-middle">Russian</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

// export default withNamespaces()(LanguageDropdown);
export default LanguageDropdown;
