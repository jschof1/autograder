// import "./styles.css";

const Ajv = require("ajv");
const ajv = new Ajv();


//FIRST TRY
// const Ajv = require("ajv")
// const addFormats = require("ajv-formats")

// const ajv = new Ajv()
// addFormats(ajv)


// addFormats(ajv, ["date", "int32", "regex" ])



// const schema = {
//   type: "string",
//   format: "date",
//   formatMinimum: 0,
//   formatExclusiveMaximum: 5,
// }

//AJV check that the json has a row called STAR RATING

// STRUCTURE CHECKING STAGE YOUR UPLOADING FILE WHICH OF YOUR COLUM IS FACILITY NAME ETC, RENAME THOSE SO THEY AREN'T PENALISED 

// THEN START ASKING ABOUT THE ACTUAL DATA 

// CSV WILL LOOK AT THE SCHEMA 
// JSON TEST THE CONTENT


// MUST HAVE CSV
// MACHINE READABLE NO BLANK COMLUMBS
// MUST HAVE 7 COLUMNS
// MUST HAVE NUMERIC COLUMNS 
// MUST HAVE TO HAVE MADE CHANGE FROM NUMBEROUIC TO STIRNG HLEATH FACILTIY OWNERSHIP
// TYPES OF DATES. WAYS 


// AJV CHECK WHETHER THE STRUCTURE IS RIGHT VALUES ARE NUMERICAL OR STRING


//IMPORTING SCHEMA FROM LOCAL
// const validate = ajv.compile(schema)


// ajv.addSchema(JustPlacementSchema, "test/schemas/excellent-100-2.json");


//CREATING SIMPLE SCHEMA TO TEST
const schema = {
  type: "object",
  properties: {
      Region: {
          "type": "string"
      },
      District: {
          "type": "string"
      },
      Date: {
          "type": "string"
      },
      HealthFacilityType: {
          "type": "string"
      },
      HealthFacilityOwnership: {
          "type": "string"
      },
      HealthFacilityName: {
          "type": "string"
      },
      StarRating: {
          "type": "string"
      },
  },
  required: ["foo"],
  additionalProperties: false
}

let objTester = {
    Region: "Region",
    District: "District",
    Date: "Date",
    HealthFacilityType: "HealthFacilityType",
    HealthFacilityOwnership: "HealthFacilityOwnership",
    HealthFacilityName: "HealthFacilityName",
    StarRating: "StarRating",
}
// const test = ajv.compile(schema);
// const isValid = test (objTester);
// console.log(isValid ? obj : {obj, error: test.errors });


// ATTEMPT 2.0
// import excellentSchema from '../test/schemas/excellent-100-2.json';


// export default class SchemaValidator {

  // constructor() {
  //   const ajv = new Ajv({ format: 'full', unknownFormats: 'ignore', verbose: true, logger: false });
  //   ajv.addSchema(actionSchema, 'action.json');

//     this.jsonValidator = ajv.compile(excellentSchema);
//   }

//   validate(json) {
//     const valid = this.jsonValidator(json);

//     return {
//       valid,
//       errors: valid ? this.jsonValidator.errors : undefined,
//     };
//   }
// }

// document.getElementById("app").innerHTML = `
// <h1>AUTO-GRADER</h1>
// `;
