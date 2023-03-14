import React from "react";
import "./BookTable.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import SubHeadingHeader from "../../components/SubHeading/SubHeadingHeader";

function BookTable() {
  return (
    <div
      className="app__book-table flex__center section__padding"
      id="bookings"
    >
      <div className="app__book-table_card">
        <SubHeading title="reservations" />
        <SubHeadingHeader title="book a table"/>
        <div className="app__book-table_input-selections">
          <select name="person" id="person">
            <option
              value="1 person"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              1 person
            </option>
            <option
              value="2 persons"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              2 persons
            </option>
            <option
              value="3 persons"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              3 persons
            </option>
            <option
              value="4 persons"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              4 persons
            </option>
            <option
              value="5 persons"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              5 persons
            </option>
            <option
              value="6 persons"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              6 persons
            </option>
          </select>

          <select name="date" id="date">
            <option
              value="03/04/2023"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              03/04/2023
            </option>
            <option
              value="04/04/2023"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              04/04/2023
            </option>
            <option
              value="05/04/2023"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              05/04/2023
            </option>
            <option
              value="06/04/2023"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              06/04/2023
            </option>
            <option
              value="07/04/2023"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              07/04/2023
            </option>
            <option
              value="08/04/2023"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              08/04/2023
            </option>
          </select>

          <select name="time" id="time">
            <option
              value="9:00am"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              9:00 AM
            </option>
            <option
              value="10:00am"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              10:00 AM
            </option>
            <option
              value="11:00am"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              11:00 AM
            </option>
            <option
              value="12:00pm"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              12:00 PM
            </option>
            <option
              value="2:00pm"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              2:00 PM
            </option>
            <option
              value="7:00pm"
              className="p__opensans"
              style={{ fontSize: "12px", fontWeight: "100" }}
            >
              7:00 PM
            </option>
          </select>
        </div>
        <button className="custom__button">bookmore</button>
      </div>
    </div>
  );
}

export default BookTable;
