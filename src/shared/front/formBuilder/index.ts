import * as yup from "yup";
import moment from "moment";
import { MONTHS } from "../utils/constants";
interface GenerateForm {
  Components: any;
  initialValues: any;
}
interface FieldProps {
  label?: string;
  fieldKey?: string;
  fieldType?: string;
  activeValue?: string | null;
  options?: any;
  Component?: any;
  dropdown?: any;
  placeholder?: string;
}
let years: any = [];
let days: any = [];
const startYear: number = JSON.parse(2022);
for (let i = startYear; i <= JSON.parse(startYear) + 30; i++) {
  years.push({ label: i.toString(), value: i.toString() });
}

export function generateSteps({ Components, initialValues }: GenerateForm) {
  if (
    (initialValues["leaseTermEndYear"] && initialValues["leaseTermEndMonth"]) ||
    (initialValues["leaseTermStartYear"] &&
      initialValues["leaseTermStartMonth"])
  ) {
    days = [];
    const noDays =
      initialValues["leaseTermEndYear"] && initialValues["leaseTermEndMonth"]
        ? moment(
            `${initialValues["leaseTermEndYear"]}-${initialValues["leaseTermEndMonth"]}`,
            "YYYY-MM"
          ).daysInMonth()
        : moment(
            `${initialValues["leaseTermStartYear"]}-${initialValues["leaseTermStartMonth"]}`,
            "YYYY-MM"
          ).daysInMonth();
    for (let i = 1; i <= noDays; i++) {
      days.push({ label: i.toString(), value: i.toString() });
    }
  }
  const steps: any = [
    {
      label: "The Agreement",
      lists: [
        'The Landlord and Tenant agree to enter into a residential tenancy agreement on the terms set out below (the "Agreement") / (the "Tenancy")',
      ],
      fields: <Array<FieldProps>>[
        {
          label: "Property Address",
          fieldKey: "propertyAddress",
          fieldType: "input",
          Component: Components.Input,
          placeholder: "Property Address",
          editable: false,
        },
        {
          label: "Full Name",
          fieldKey: "tenantFullName",
          fieldType: "input",
          Component: Components.Input,
          placeholder: "Full Name",
          editable: false,
        },
        {
          label: "Phone No",
          fieldKey: "tenantPhoneNo",
          fieldType: "input",
          Component: Components.Input,
          placeholder: "Phone No",
          editable: true,
        },
        {
          label: "Email",
          fieldKey: "tenantEmail",
          fieldType: "input",
          Component: Components.Input,
          placeholder: "Email",
          editable: false,
        },
      ],
      validations: yup.object().shape({
        propertyAddress: yup.string().required("Property Address is required"),
        tenantFullName: yup.string().required("Full Name is required"),
        tenantPhoneNo: yup.number().required("Phone No  required"),
        tenantEmail: yup.string().email().required("Email is required"),
      }),
    },
    {
      label: "Lease Term Data",
      fields: <Array<FieldProps>>[
        {
          label: "",
          fieldKey: "leaseTermData",
          fieldType: "radioBoxGroup",
          activeValue: initialValues["leaseTermData"] ?? null,
          options: ["Fixed Term", "Month to Month", "Year to Year"],
          Component: Components.RadioBoxGroup,
        },
        initialValues["leaseTermData"] === "Fixed Term" && {
          label: "End Year",
          fieldKey: "leaseTermEndYear",
          fieldType: "dropdown",
          dropdown: years,
          Component: Components.Select,
          placeholder: "Select Year",
        },
        initialValues["leaseTermData"] === "Fixed Term" && {
          label: "End Month",
          fieldKey: "leaseTermEndMonth",
          fieldType: "dropdown",
          dropdown: MONTHS,
          Component: Components.Select,
          placeholder: "Select Month",
        },
        initialValues["leaseTermData"] === "Fixed Term" && {
          label: "End Day",
          fieldKey: "leaseTermEndDay",
          fieldType: "dropdown",
          dropdown: days,
          Component: Components.Select,
          placeholder: "Select Days",
        },
        initialValues["leaseTermData"] &&
          initialValues["leaseTermData"] !== "Fixed Term" && {
            label: "Start Year",
            fieldKey: "leaseTermStartYear",
            fieldType: "dropdown",
            dropdown: years,
            Component: Components.Select,
            placeholder: "Select Year",
          },
        initialValues["leaseTermData"] &&
          initialValues["leaseTermData"] !== "Fixed Term" && {
            label: "Start Month",
            fieldKey: "leaseTermStartMonth",
            fieldType: "dropdown",
            dropdown: MONTHS,
            Component: Components.Select,
            placeholder: "Select Month",
          },
        initialValues["leaseTermData"] &&
          initialValues["leaseTermData"] !== "Fixed Term" && {
            label: "Start Day",
            fieldKey: "leaseTermStartDay",
            fieldType: "dropdown",
            dropdown: days,
            Component: Components.Select,
            placeholder: "Select Days",
          },
      ].filter(Boolean),
      validations: yup.object().shape({
        leaseTermData: yup.string().required("Please select one"),
        leaseTermEndYear:
          initialValues["leaseTermData"] === "Fixed Term"
            ? yup.string().required("End Year is required")
            : yup.string().nullable(),
        leaseTermEndMonth:
          initialValues["leaseTermData"] === "Fixed Term"
            ? yup.string().required("End Month is required")
            : yup.string().nullable(),
        leaseTermEndDay:
          initialValues["leaseTermData"] === "Fixed Term"
            ? yup.string().required("End Day is required")
            : yup.string().nullable(),
        leaseTermStartYear:
          initialValues["leaseTermData"] !== "Fixed Term"
            ? yup.string().required("Start Year is required")
            : yup.string().nullable(),
        leaseTermStartMonth:
          initialValues["leaseTermData"] !== "Fixed Term"
            ? yup.string().required("Start Month is required")
            : yup.string().nullable(),
        leaseTermStartDay:
          initialValues["leaseTermData"] !== "Fixed Term"
            ? yup.string().required("Start Day is required")
            : yup.string().nullable(),
      }),
    },
    {
      label: "Rent Payment",
      fields: <Array<FieldProps>>[
        {
          label: "Rent Amount",
          fieldKey: "rentAmount",
          fieldType: "input",
          Component: Components.Input,
          placeholder: "Rent Amount",
        },
        {
          label: "Date of Payment",
          fieldKey: "rentPaymentTime",
          fieldType: "radioBoxGroup",
          activeValue: initialValues["rentPaymentTime"] ?? null,
          options: ["Weekly", "Every Two weeks", "Monthly"],
          Component: Components.RadioBoxGroup,
        },
      ],
      validations: yup.object().shape({
        rentAmount: yup.number().required("Rent Amount is required"),
        rentPaymentTime: yup.string().required("Please select one"),
      }),
    },
    {
      label: "Annual Rent Review",
      fields: <Array<FieldProps>>[
        {
          label: "",
          fieldKey: "annualRentReview",
          fieldType: "radioBoxGroup",
          activeValue: initialValues["annualRentReview"] ?? null,
          options: ["Legal Minimum", "More than legal Minimum"],
          Component: Components.RadioBoxGroup,
        },
        initialValues["annualRentReview"] === "Legal Minimum" && {
          label: "No of Days before increasing rent",
          fieldKey: "rentIncreaseNoOfDays",
          fieldType: "input",
          Component: Components.Input,
          placeholder: "No of Days before increasing rent",
        },
      ].filter(Boolean),
      validations: yup.object().shape({
        annualRentReview: yup.string().required("Please select one"),
        rentIncreaseNoOfDays:
          initialValues["annualRentReview"] === "Legal Minimum"
            ? yup.number().required("Please enter the no of days")
            : yup.number().nullable(),
      }),
    },
    {
      label: "Security Deposit",
      fields: <Array<FieldProps>>[
        {
          label: "Will a security deposit be required ?",
          fieldKey: "isSecurityDepositRequired",
          fieldType: "dropdown",
          dropdown: [
            {
              label: "Yes",
              value: "yes",
            },
            {
              label: "No",
              value: "no",
            },
          ],
          Component: Components?.Select,
          placeholder: "Select Security Deposit",
        },
        initialValues["isSecurityDepositRequired"] === "yes" && {
          label: "Security deposit amount",
          fieldKey: "securityDepositAmount",
          fieldType: "mask",
          Component: Components.Input,
          placeholder: "Security Deposit Amount",
        },
      ].filter(Boolean),
      validations: yup.object().shape({
        isSecurityDepositRequired: yup.string().required("Please select one"),
        securityDepositAmount:
          initialValues["isSecurityDepositRequired"] === "yes"
            ? yup.number().required("Please enter the amount")
            : yup.number().nullable(),
      }),
    },
    {
      label: "Utilities Details",
      fields: <Array<FieldProps>>[
        {
          label: "who will be responsible for going utility costs ? ",
          fieldKey: "responsibleForGoingUtilityCosts",
          fieldType: "radioBoxGroup",
          activeValue: initialValues["responsibleForGoingUtilityCosts"] ?? null,
          options: ["Tenant pays", "Landlord pays"],
          Component: Components.RadioBoxGroup,
        },
      ],
      validations: yup.object().shape({
        responsibleForGoingUtilityCosts: yup
          .string()
          .required("Please select one"),
      }),
    },
    {
      label: "Agreement Date",
      fields: [
        {
          label: "Start Year",
          fieldKey: "startYear",
          fieldType: "dropdown",
          dropdown: years,
          Component: Components.Select,
          placeholder: "Select Year",
        },
        {
          label: "Start Month",
          fieldKey: "startMonth",
          fieldType: "dropdown",
          dropdown: MONTHS,
          Component: Components.Select,
          placeholder: "Select Month",
        },
        {
          label: "Start Day",
          fieldKey: "startDay",
          fieldType: "dropdown",
          dropdown: days,
          Component: Components.Select,
          placeholder: "Select Days",
        },
        {
          label: "End Year",
          fieldKey: "endYear",
          fieldType: "dropdown",
          dropdown: years,
          Component: Components.Select,
          placeholder: "Select Years",
        },
        {
          label: "End Month",
          fieldKey: "endMonth",
          fieldType: "dropdown",
          dropdown: MONTHS,
          Component: Components.Select,
          placeholder: "Select Month",
        },
        {
          label: "End Day",
          fieldKey: "endDay",
          fieldType: "dropdown",
          dropdown: days,
          Component: Components.Select,
          placeholder: "Select Days",
        },
      ],
      validations: yup.object().shape({
        startDay: yup.string().required("Start Day is required"),
        startYear: yup.string().required("Start Year is required"),
        startMonth: yup.string().required("Start Month is required"),
        endDay: yup.string().required("End Day is required"),
        endYear: yup.string().required("End Year is required"),
        endMonth: yup.string().required("End Month is required"),
      }),
    },
    {
      label: "Payment Method",
      fields: <Array<FieldProps>>[
        {
          label: "Choose Payment Method",
          fieldKey: "paymentMethod",
          fieldType: "radioBoxGroup",
          activeValue: initialValues["paymentMethod"] ?? null,
          options: ["Rentisity App", "Via Bank", "Cash"],
          Component: Components.RadioBoxGroup,
        },
        initialValues["paymentMethod"] === "Via Bank" && {
          label: "Bank Name",
          fieldKey: "bankName",
          fiedType: "input",
          Component: Components.Input,
          placeholder: "Bank Name",
        },
        initialValues["paymentMethod"] === "Via Bank" && {
          label: "Account Holder Name",
          fieldKey: "accountHolderName",
          fiedType: "input",
          Component: Components.Input,
          placeholder: "Account Holder Name",
        },
        initialValues["paymentMethod"] === "Via Bank" && {
          label: "IBAN",
          fieldKey: "iban",
          fiedType: "input",
          Component: Components.Input,
          placeholder: "IBAN",
        },
        initialValues["paymentMethod"] === "Via Bank" && {
          label: "BIC",
          fieldKey: "bic",
          fiedType: "input",
          Component: Components.Input,
          placeholder: "BIC",
        },
      ].filter(Boolean),

      validations: yup.object().shape({
        paymentMethod: yup.string().required("Please select one"),
      }),
    },
  ];

  return steps;
}
