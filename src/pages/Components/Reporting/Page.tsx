import ReportViewer from "../../../Components/Reporting/ReportViewer.tsx";

const EXAMPLE = {
  "grossTotalExclTax": 0,
  "totalInclTax": 0,
  "totalVatTax": 0,
  "orderNumber": "TEST01",
  "createdAt": "2023-11-01",
  "currency": {
    "code": "MAD"
  },
  "desiredDeliveryDate": "2023-11-05",
  "externalRef": "",
  "ref": "",
  "taxType": "HT",
  "vendor": {
    "name": "MERI",
    "address": "Adresse 1",
    "postalCode": 12345,
    "phoneNumber": "+2126966998855"
  },
  "purchaseOrderProducts": [
    {
      "product": {
        "code": "P01"
      },
      "designation": "Product 1",
      "quantity": 1,
      "grossTotalExclTax": 0,
      "vatRate": 0.1,
      "grossPrice": 0,
      "netPrice": 0,
      "discount": {
        "discountType": "Amount",
        "value": 0
      }
    },
    {
      "product": {
        "code": "P02"
      },
      "designation": "Product 2",
      "quantity": 1,
      "grossTotalExclTax": 0,
      "vatRate": 0.1,
      "grossPrice": 0,
      "netPrice": 0,
      "discount": {
        "discountType": "Amount",
        "value": 0
      }
    }
  ]
}

const Page = () => {

  return (
    <div>
      <ReportViewer fileName="5.mrt" params={EXAMPLE} />
    </div>
  );
};

export default Page;
