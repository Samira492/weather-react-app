import React from "react";
import axios from "axios";

import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search a city..."
              className="form-control rounded-pill"
              autoComplete="off"
              autoFocus
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary rounded-pill w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
