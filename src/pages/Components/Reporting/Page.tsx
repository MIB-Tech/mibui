import ReportViewer from "../../../Components/Reporting/ReportViewer.tsx";

const Page = () => {
  const fileName = '3.mrt';

  return (
    <div>
      <ReportViewer fileName={fileName} />
    </div>
  );
};

export default Page;
