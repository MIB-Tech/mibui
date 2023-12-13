import React, { useEffect, useMemo, useState } from 'react';
import { Stimulsoft } from 'stimulsoft-reports-js/Scripts/stimulsoft.viewer';

type ReportViewerProps = {
  fileName: string
  params?: object
}

const ReportViewer: React.FC<ReportViewerProps> = ({ fileName, params }) => {
  const [viewer, setViewer] = useState(new Stimulsoft.Viewer.StiViewer(undefined, 'StiViewer', false));

  const report = useMemo(() => {
    const reportInstance = new Stimulsoft.Report.StiReport();
    reportInstance.loadFile(`/${fileName}`);
    reportInstance.regData('JsonData', 'JsonData', params);
    return reportInstance;
  }, [fileName, params]);

  useEffect(() => {
    setViewer((currentViewer) => {
      currentViewer.report = report;
      return currentViewer;
    });

    viewer.renderHtml('viewer-container');
  }, [report, viewer]);

  return <div id="viewer-container" />;
};

export default ReportViewer;
